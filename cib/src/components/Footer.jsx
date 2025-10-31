import React, { Component } from 'react';
import './Footer.css';
import CibLogo from '../assets/ciblogo.png'; 

import googleplay from '../assets/googleplay.png'; 
import appstore from '../assets/appstore.png'; 

import one from '../assets/one.png'; 
import two from '../assets/two.png'; 
import three from '../assets/three.png'; 
import four from '../assets/four.png'; 
import five from '../assets/five.png'; 
import six from '../assets/six.png'; 


const Footer = () => {
    return ( 
<>
<div className='flex g'>
<img src={CibLogo} alt="CIB Logo" className="cib-logo" />        
 <div className="section1">
        <p>FAQ</p> 
        <p>Learning Center</p> 
        <p>Fees & Charges</p> 
        <p>Terms & Conditions</p> 
      </div>

      <div className="section1">
        <p>Local</p> 
        <p>Abroad</p> 
        <p>Business</p> 
        <p>Corporate</p> 
      </div>

      <div className="section1">
        <p>Careers</p> 
        <p>Why CIB</p> 
        <p>Email Us</p>
        <p>System Statuses</p> 
      </div>

<div className='section1'>
<img src={googleplay} alt="googleplay" className="googleplay" />        
<img src={appstore} alt="CIB Logo" className="appstore" />        

</div>
</div>


<div className='line'></div>

<div className='flexg'>
<p>CBE Approvals</p>
<p>Cookie Policy</p>
<p>Privacy Policy</p>
<p>User Agreement</p> 

<img src={one} alt="img" className="imgg" />        
<img src={two} alt="img" className="imgg" />        
<img src={three} alt="img" className="imgg" />        
<img src={four} alt="img" className="imgg" />        
<img src={five} alt="img" className="imgg" />        
<img src={six} alt="img" className="imgg" />        
</div>
</>

     );
}
 
export default Footer ;