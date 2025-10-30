import React, { Component } from 'react';
import './CenterCard.css';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpeg';

const CenterCard = () => {
    return ( 

       <>
       
          <div className="container">
      <div className="card">
        <img src={img1} alt="Buying a home" className="card-image" />
        <div className="card-content">
          <h3 className="card-title">Buying a home and making a home</h3>
          <p className="card-description">
            Buying a home can be an emotional process, but it&rsquo;s important to approach it logically
          </p>
          <a href="#" className="read-more-link">
            Read more
          </a>
        </div>
      </div>

      <div className="card">
        <img src={img2} alt="Traveling on a budget" className="card-image" />
        <div className="card-content">
          <h3 className="card-title">Traveling on a budget</h3>
          <p className="card-description">
            So for all of you travelers, take a vacation without spending a fortune with these helpful tips and tricks:
          </p>
          <a href="#" className="read-more-link">
            Read more
          </a>
        </div>
      </div>

      <div className="card">
        <img src={img3} alt="University life tips" className="card-image" />
        <div className="card-content">
          <h3 className="card-title">University life tips</h3>
          <p className="card-description">
            The impact of a good education can be transformative.
          </p>
          <a href="#" className="read-more-link">
            Read more
          </a>
        </div>
      </div>
    </div>
       
       
       
       </>
     );
}
 
export default CenterCard ;