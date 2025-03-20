import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick.css";
import { useEffect, useState } from "react";


const App = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  const [articles,setArticles]=useState(null);

  //Problem: If the component re-renders multiple times, multiple API requests could be made.
 //✅ Fix: Add an abort controller for cleanup.
  useEffect(() => {
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=727f083eb5df4ba5af91ef57b82ed657&page=1`;

    const controller = new AbortController();
    const fetchNews = async () => {
      try {
        const response = await fetch(url, { signal: controller.signal });
        const data = await response.json();
        setArticles(data.articles.sort(() => Math.random() - 0.5).slice(0, 4));
      } catch (error) {
        if (error.name !== "AbortError") console.error("Fetch error:", error);
      }
    };
    fetchNews();
    return () => controller.abort();
  }, []);
  return (
    <div className="conatiner my-3 back">
     
      <Slider {...settings}>
        
         {articles && articles.map((element) => (
            <div key={element.url} className="slide-container">
             {element.urlToImage && (
                <div className="image-container">
                  <img src={element.urlToImage} alt={element.title} className="slide-image" />
                  <div className="overlay">
                    <h2 className="title">{element.title}</h2>
                    <p className="description">{element.description}</p>
                  </div>
                </div>
              )}

        </div>
        
         ))}
        
      </Slider>
    </div>
  );
};

export default App;