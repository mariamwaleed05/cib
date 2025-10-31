import React, { Component } from 'react';
import './Card.css';
import Icon from '../assets/icon.png'; 

const Card = (props) => {
      const { imageSrc, altText, headingText, className, subText} = props; 
    return ( 

        <>
    <div className={className}> 
      <img src={imageSrc} alt={altText} className="img" />
      <h2>{headingText}</h2>
      <p>{subText}</p>
    </div>
     </>
  );
};
 
export default Card ;