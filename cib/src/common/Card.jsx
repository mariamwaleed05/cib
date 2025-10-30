import React, { Component } from 'react';
import './Card.css';
import Icon from '../assets/icon.png'; 

const Card = () => {
    return ( 

        <>
        <div className='flex'>
            <div className='card1'>
                <img src={Icon} alt="CIB Logo" className="cib-logo" />        
                <h2>Apply for a new account</h2>
            </div>

              <div className='card1'>
                <img src={Icon} alt="CIB Logo" className="cib-logo" />        
                <h2>Apply for a card</h2>
            </div>

              <div className='card1'>
                <img src={Icon} alt="CIB Logo" className="cib-logo" />        
                <h2>Apply for loan or overdraft</h2>
            </div>
        </div>
        
        
        
        
        </>
     );
}
 
export default Card ;