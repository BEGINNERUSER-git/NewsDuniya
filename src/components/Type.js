import React from 'react'
import { Link} from 'react-router-dom'
import './type.css'

export default function Type() {
  return (
    <>
      <div className='container-fluid my-5'>
        <div className="row d-flex justify-content-between">
          <div className="col-sm-4">
            <div className="card text-bg-dark">
              <img src="Business.png" className="card-img" alt="Business"/>
              <div className="card-img-overlay">
                <Link to="/business" 
                              className="card-title text-center">Business</Link >
              </div>
            </div>

            <div className="card text-bg-dark my-3">
              <img src="image.png" className="card-img" alt="Entertainment"/>
              <div className="card-img-overlay">
                <Link to="/entertainment" 
              className="card-title text-center">Entertainment</Link >
              </div>
            </div>

            <div className="card text-bg-dark">
              <img src="general.png" className="card-img my-3" alt="General"/>
              <div className="card-img-overlay">
                <Link to="/general"  
              className="card-title text-center">General</Link >
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card text-bg-dark">
              <img src="health.png" className="card-img" alt="Health"/>
              <div className="card-img-overlay">
                <Link to="/health" 
              className="card-title text-center">Health</Link >
              </div>
            </div>

            <div className="card text-bg-dark my-3">
              <img src="science.png" className="card-img" alt="Science"/>
              <div className="card-img-overlay">
                <Link to="/science"  
              className="card-title text-center">Science</Link >
              </div>
            </div>

            <div className="card text-bg-dark">
              <img src="sports.png" className="card-img my-3" alt="Sports"/>
              <div className="card-img-overlay">
                <Link to="/sports" 
              className="card-title text-center">Sports</Link >
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card text-bg-dark">
              <img src="tech.png" className="card-img" alt="Technology"/>
              <div className="card-img-overlay">
                <Link to="/technology"  
              className="card-title text-center">Technology</Link >
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

