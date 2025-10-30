import React, { Component } from 'react';
import './Header.css';
import Hero from '../assets/hero.jpg'; 

const Header = () => {
    return ( 
<>
    <div className='name'>    
        <h1 className='title'>CIB</h1>
        <p className='subtitle'>Delivering value to our
        clients, our community and our shareholders</p>
<button className='b'>{props.title}</button>     );

    </div>

        <img src={Hero} alt="CIB Logo" className="hero" />  

</>

     );
}
 
export default Header ;