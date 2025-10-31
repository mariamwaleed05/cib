import React, { Component } from 'react';
import './Home.css';
import NavBar from '../components/NavBar.jsx';
import Header from './../components/Header.jsx';
import Footer from './../components/Footer.jsx';
import Button from '../common/Button.jsx';
import Card from './../common/Card.jsx';
import MainMenuTap from './../common/MainMenuTap.jsx';
import SmallMenuTap from './../common/SmallMenuTap.jsx';
import SubTitle from './../common/SubTitle.jsx';
import NewsCard from './../common/NewsCard.jsx';
import SectionTitle from './../common/SectionTitle.jsx';
import CenterCard from './../common/CenterCard.jsx';
import FooterLink from './../common/FooterLink.jsx';

import icon from '../assets/icon.png'; 

import logo1 from '../assets/logo1.png'; 
import logo2 from '../assets/logo2.png'; 
import logo3 from '../assets/logo3.jpg'; 

import icon2 from '../assets/icon2.png'; 
import icon3 from '../assets/icon3.png'; 
import icon4 from '../assets/icon4.png'; 

const Home = () => {
    return ( 
        <>
<NavBar/>
<Header/>
<MainMenuTap/>
<SubTitle/>
<SectionTitle/>
<div className='flex'>
      <Card 
        className="card1"
        imageSrc={icon}       
        altText="Apply for a new account" 
        headingText="Apply for a new account" 
      />
      <Card 
            className="card1"
         imageSrc={icon}      
        altText="Apply for a card" 
        headingText="Apply for a card" 
      />
      <Card 
    className="card1"
        imageSrc={icon}    
        altText="Apply for loan or overdraft" 
        headingText="Apply for loan or overdraft" 
      />
</div>

<SectionTitle title="Learning Center" />
<SubTitle title="Learn more about banking and your finances" />
<CenterCard/>
<Button title="View More" className="secondary" />
<SectionTitle title="News"/>
<NewsCard/>
<NewsCard/>
<NewsCard/>
<Button title="View All News" className="secondary" />
<SmallMenuTap/>

<SubTitle title="Sustainable Finance" />
<SectionTitle title="Sustainability is an integral part of the way we work" />
 <div className='flex'>
      <Card 
        className="flex2"
        imageSrc={logo1}       
        altText="S&P/EGX ESG Index" 
        headingText="S&P/EGX ESG Index" 
      />
      <Card 
        className="flex2"
        imageSrc={logo2}      
        altText="Bloomergy Gender Equality Index" 
        headingText="Bloomergy Gender Equality Index" 
      />
      <Card 
        className="flex2"
        imageSrc={logo3}    
        altText="FTSE4Good Index" 
        headingText="FTSE4Good Index" 
      />
</div>
<Button title="Learn More" className="secondary" />


<SubTitle title="AWARDS" />
<SectionTitle title="CIB's Intergraty and quality are recognized internationally" />
 <div className='flex'>
      <Card 
        className="flex2"
        imageSrc={icon2}       
        altText="Best Private Bank In Egypt" 
        headingText="Best Private Bank In Egypt" 
        subText="Global Finance -2023"
      />
      <Card 
        className="flex2"
        imageSrc={icon3}      
        altText="Best Mergers & Acqusation Deal in MENA" 
        headingText="Best Mergers & Acqusation Deal in MENA" 
        subText="EMEA Finance - 2023"

      />
      <Card 
        className="flex2"
        imageSrc={icon4}    
        altText="Best Bank In Egypt" 
        headingText="Best Bank In Egypt" 
        subText="Euromoney - 2023"
      />
</div>
<Button title="See All our awards" className="secondary" />


<SubTitle title="WE CARE" />
<SectionTitle title="Our dedicated team is committed to meeting your needs" />

<Footer/>
<FooterLink/>
        </>
     );
};
 
export default Home ;