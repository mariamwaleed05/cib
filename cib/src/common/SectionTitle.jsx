import React, { Component } from 'react';
import './SectionTitle.css';

const SectionTitle = ({ title = "Apply Online now for cards & loans with ease!" }) => {
    return ( 
        <h2 className='bjb'>{title}</h2>
     );
}
 
export default SectionTitle ;