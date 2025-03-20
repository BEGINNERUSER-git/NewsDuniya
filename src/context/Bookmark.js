import React, { createContext, useEffect, useState } from 'react'

export const BookmarkContext=createContext();
const LocalStorageKey = 'bookmarkedArticles'; 
export const BookmarkProvider=({children})=> {
    const [bookmarked, setbookmarked] = useState(() => {
        try {
          const storeBookmarks = JSON.parse(localStorage.getItem(LocalStorageKey));
          return Array.isArray(storeBookmarks) ? storeBookmarks : [];
        } catch (err) {
          console.error("Error parsing stored bookmarks:", err);
          return [];
        }
      });
      
    const addBookmarks=(articles)=>{
        setbookmarked((prevArticles)=>{
            if (!prevArticles.some(item => item.url === articles.url)) {
                return [...prevArticles, articles];
            }
            return prevArticles;
        });
       
    };

   

    const removeBookmark = (url) => {
        setbookmarked((prevArticles) =>
            prevArticles.filter((item) => item.url !== url)
        );
    };
    // useEffect(()=>{
    //     try{
    //         const storeBookmarks =JSON.parse(localStorage.getItem(LocalStorageKey));
    //         if(Array.isArray(storeBookmarks)){
    //             setbookmarked(storeBookmarks);
    //         }

    //     }
    //     catch(err){
    //         console.error("Error geeting bookmark",err);
    //     }
    // },[]);

    useEffect(()=>{
     localStorage.setItem(LocalStorageKey,JSON.stringify(bookmarked));

    },[bookmarked]);

   
  return (
    
      <BookmarkContext.Provider value={{bookmarked,addBookmarks,removeBookmark}}>
        {children}
      </BookmarkContext.Provider>
    
  )
}


//useEffect Hook for Initial Data Load: The first useEffect hook is used to load bookmarks from the local storage when the component mounts. It runs only once when the component mounts ([] dependency array). It retrieves the stored bookmarks from local storage and updates the state with them.

//useEffect Hook for Data Persistence: The second useEffect hook is used for data persistence. It runs whenever the bookmarkedmovies state changes. It updates the local storage with the current list of bookmarked movies.