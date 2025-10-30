import React, { Component } from 'react';
import './SubTitle.css';

const SubTitle = ({ title = "APPLY NOW" }) => {
    return ( 
        <h2 className='bb'>{title}</h2>
     );
}
 
export default SubTitle ;