import React, { Component } from 'react';
import './SmallMenuTap.css';
import img5 from '../assets/img5.jpg';
import Button from './Button';

const SmallMenuTap = ({ buttonText = 'Learn more' }) => {
    return ( 

       <div className="international-scale-container">
            <div className="international-scale-content">
                <img src={img5} alt="CIB Logo" className="international-scale-background-img" />
                <div className="international-scale-overlay">
                    <h2 className="international-scale-title">CIB on an international scale</h2>
                    <p className="international-scale-description">Learn more about CIB's presence outside of Egypt</p>
                    <button className="international-scale-button">{buttonText}</button>
                </div>
            </div>
        </div>
     );
}
 
export default SmallMenuTap ;