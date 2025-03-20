import React, { useContext, useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./spinner";

export default function First(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1); // Track the current page
  const [totalResults, setTotalResults] = useState(null);

  // Fetch the data based on page, country, and category
  const News = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=727f083eb5df4ba5af91ef57b82ed657&page=${page}&pageSize=${props.pageSize}`;

    setLoading(true);

    try {
      const data = await fetch(url);
      const response = await data.json();
      console.log(response);
      setArticles((prevArticles) =>
        page === 1 ? response.articles : prevArticles.concat(response.articles)
      ); // Concatenate new articles when scrolling
      setTotalResults(response.totalResults);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Call News function on initial render and whenever props change
  useEffect(() => {
    News();
  }, [props.category,props.country, page]); // Include page in dependency array

  const fetchMoreData = () => {
    // Set loadingMore to true to prevent triggering multiple fetches
    setPage((prev) => prev + 1); // Increment the page number for pagination
  };

  return (
    <div>
      <h2 className="text-center my-5" style={{ margin: "35px 0px 90px 0px",paddingTop: "40px"
 }}>
        Top Headlines on {props.category}
      </h2>
      {loading && <Spinner />} {/* Display spinner when loading initial data */}
      {articles.length > 0 ? (
        <InfiniteScroll
          dataLength={articles.length} // Length of the articles array
          next={fetchMoreData} // Fetch more articles
          hasMore={articles.length < totalResults} // Check if there are more articles to load
          loader={<Spinner />} // Display spinner while loading more
        >
          <div className="container">
            <div className="row">
              {articles.map((article) => (
                <div key={article.url} className="col-md-4">
                  <Newsitem
                    title={article.title || "No title"}
                    description={article.description || "No description"}
                    urlToImage={article.urlToImage}
                    url={article.url} 
                    author={article.author}
                    date={article.publishedAt}
                  />
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>
      ) : (
        <div className="text-center">No articles available.</div>
      )}
    </div>
  );
}
