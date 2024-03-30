import React from 'react'

export default function Project() {
  return (
    <div id='Projects'>
           {/* Add more sections here */}
           <div className="pject">
        <h2>Projestors</h2>
          <div className="ProjectorContainer">
          <div className="col">
              <img src="./public/calan.jpeg" alt="" />
              <p>Somalia Flag</p>
          </div>
          <div className="col">
              <img src="./public/JUST Poster-01.jpg" alt="" />
              <p>Jamhuria Poster</p>
          </div>  
          <div className="col">
            <img src="./public/Calamo-04.jpg" alt=""/>
            <p>Somali Flag</p>
          </div>
          </div>
        </div>
      
    </div>
  )
}
