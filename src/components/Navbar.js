import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { CountrySelect } from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import { GetCountries } from "react-country-state-city";

export default function Navbar({selectedCountry,handleCountryChange}) {
  const [query,setQuery]=useState("");
  const navigate=useNavigate();
  const [countriesList, setCountriesList] = useState([]);
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(query.trim()){
      navigate(`/search/${query}`);
      setQuery("");
    }
  }
  
  useEffect(() => {
    GetCountries().then((result) => {
      setCountriesList(result);
    });
  }, []);

  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary" >
    <div className="container-fluid">
      <Link  className="navbar-brand" to="/">NewsDuniya</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link  className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link  className="nav-link" to="business">Business</Link>
          </li>
          <li className="nav-item">
            <Link  className="nav-link" to="entertainment">Entertainment</Link>
          </li>
          <li className="nav-item">
            <Link  className="nav-link " to="general">General</Link>
          </li>
          <li className="nav-item">
            <Link  className="nav-link"  to="health">Health</Link>
          </li>
          <li className="nav-item">
            <Link  className="nav-link " to="science">Science</Link>
          </li>
          <li className="nav-item">
            <Link  className="nav-link " to="sports">Sports</Link>
          </li>
          <li className="nav-item">
            <Link  className="nav-link " to="technology">Technology</Link>
          </li>
          <li className="nav-item">
            <Link  className="nav-link " to="bookmarks">Bookmarks</Link>
          </li>
        </ul>
        <form className="d-flex mx-5" role="search" onSubmit={handleSubmit} style={{paddingRight:'0px'}}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={query} onChange={(e)=>{setQuery(e.target.value)}}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div >
      <CountrySelect
        defaultValue="UNITED STATES"
        containerClassName="form-group"
        inputClassName=""
        onChange={handleCountryChange}
        countries={countriesList}
        value={selectedCountry}
        placeHolder="Select Country"
      />
      </div>
      </div>
    </div>
  </nav>
  
  );
}
