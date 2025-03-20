import "./App.css";
import React ,{useState,useEffect}from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import First from "./components/First";
import Search from "./components/Search";
import { BookmarkProvider } from "./context/Bookmark";
import Bookmark from "./components/page/Bookmark";
import { GetCountries } from "react-country-state-city";

function App() {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [selectedCountry, setSelectedCountry] = useState("us");
  
  
  const handleCountryChange = (country) => {
    const lower=country.iso2;
    const code=lower.toLowerCase();
    setSelectedCountry(code);
  };

  return (
    <div>
      <BookmarkProvider>
        <Router>
          <Navbar
          selectedCountry={selectedCountry}
          handleCountryChange={handleCountryChange}
        
          
          />
          <Routes>
            {/* Redirect from '/' to '/general' */}
            <Route path="/" element={<Navigate to="/general" />} />

            {/* Routes for specific categories */}
            <Route path="business" element={<First pageSize={pageSize} country={selectedCountry} category="business" />} />
            <Route path="entertainment" element={<First pageSize={pageSize} country={selectedCountry} category="entertainment" />} />
            <Route path="general" element={<First pageSize={pageSize} country={selectedCountry} category="general" />} />
            <Route path="health" element={<First pageSize={pageSize} country={selectedCountry} category="health" />} />
            <Route path="science" element={<First pageSize={pageSize} country={selectedCountry} category="science" />} />
            <Route path="sports" element={<First pageSize={pageSize} country={selectedCountry} category="sports" />} />
            <Route path="technology" element={<First pageSize={pageSize} country={selectedCountry} category="technology" />} />
            <Route path="search/:query" element={<Search />} />
            <Route path="bookmarks" element={<Bookmark />} />
          </Routes>
        </Router>
      </BookmarkProvider>
    </div>
  );
}

export default App;
