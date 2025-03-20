import React, { useContext } from "react";
import { BookmarkContext } from "../context/Bookmark";

export default function Newsitem(props) {
  const { addBookmarks, removeBookmark, bookmarked } = useContext(BookmarkContext);

  // Check if the current article is already bookmarked
  const isBookmarked = bookmarked.some(item => item.url === props.url);

  // Handle bookmark toggle (add or remove)
  // const handleBookmark = () => {
  //   if (isBookmarked) {
  //     removeBookmark(props.url);
  //     alert(`${props.title} removed from bookmarks`);
  //   } else {
  //     addBookmarks({
  //       title: props.title,
  //       description: props.description,
  //       url: props.url,
  //       urlToImage: props.urlToImage,
  //     });
  //     alert(`${props.title} added to bookmarks`);
  //   }
  // };

  return (
    <div className="my-3">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={props.urlToImage}
          className="card-img-top"
          alt={props.title || "News Image"}
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <small className=" my-7 text-body-secondary">By {props.author || "Unkown"} on {new Date(props.date).toUTCString()}</small>
         
<br/>          <a href={props.url} target="_blank" className="btn btn-sm btn-primary">
            Read more
          </a>
          {/* The button toggles between adding/removing bookmark */}
         
{  props.isBookmarkedPage ||  isBookmarked ?(     <button
             type="button"
             className="mx-3 btn btn-sm btn-danger"
            onClick={()=>{
              removeBookmark(props.url);
              alert(`${props.title} removed from bookmarks`);

            }}>Remove Bookmark</button>
           
):( <button 
  className="mx-3 btn btn-sm btn-success"
  onClick={()=>{
    addBookmarks({title: props.title,
             description: props.description,
           url: props.url,
          urlToImage: props.urlToImage});
       alert(`${props.title} added to bookmarks`);


  }}>Add Bookmark</button>
)}     
       </div>
      </div>
    </div>
  );
}
