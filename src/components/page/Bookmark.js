import React, { useContext } from 'react'
import { BookmarkContext } from '../../context/Bookmark'
import Newsitem from '../Newsitem'

export default function Bookmark() {
  const {bookmarked,removeBookmark}=useContext(BookmarkContext);

  
    return (
        <>
        <h2 className='text-center my-5'> BOOKMARKED ARTICLES</h2>
        {bookmarked.length===0 ?(
            <div className="text-center my-5">No articles bookmarked</div>
            ):(

              <div className="container">
                            <div className="row">
                              {bookmarked.map((article) => (
                                <div key={article.url} className="col-md-4">
                                  <Newsitem
                                    title={article.title || "No title"}
                                    description={article.description || "No description"}
                                    urlToImage={article.urlToImage}
                                    url={article.url}
                                    isBookmarkedPage={true}
                                  />
                                </div>
                              ))}
                              </div>
                              </div>
            )}
            
  </>
  )
}
