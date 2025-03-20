import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./spinner";
import { useParams } from "react-router-dom";

export default function First(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
    const [totalResults, setTotalResults] = useState(null);
   const {query}=useParams();

  // Fetch the data based on page, country, and category
  const News = async () => {
    const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=727f083eb5df4ba5af91ef57b82ed657`;

    setLoading(true);

    try {
      const data = await fetch(url);
      const response = await data.json();
      setArticles(response.articles)
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
  }, [query]); // Include page in dependency array

  
  return (
    <div>
      <h2 className="text-center my-5" style={{ margin: "35px 0px 90px 0px" }}>
       Search Result for {query}
      </h2>
      {loading && <Spinner />} {/* Display spinner when loading initial data */}
      {articles.length > 0 ? (
        <InfiniteScroll
          dataLength={articles.length} // Length of the articles array
           // Fetch more articles
           hasMore={articles.length < totalResults}
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
