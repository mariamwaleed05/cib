import React, { Component } from 'react';
import './Header.css';
import Hero from '../assets/hero.jpg'; 
import Button from '../common/Button';

const Header = ({ title = "Discover More" }) => {    
    return ( 
<>

      <div className='name'>
      <h1 className='title'>CIB</h1>
      <p className='subtitle'>Delivering value to our clients, our community and our shareholders</p>
      <Button title={title} className="primary" />    </div>
      <img src={Hero} alt="CIB Logo" className="hero" />

</>

     );
}
 
export default Header ;