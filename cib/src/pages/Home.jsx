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

const Home = () => {
    return ( 
        <>
<NavBar/>
<Header/>
<MainMenuTap/>
<SubTitle/>
<SectionTitle/>
<Card/>

<SectionTitle title="Learning Center" />
<SubTitle title="Learn more about banking and your finances" />
<CenterCard/>
<Button title="View More" className="secondary" />


<SmallMenuTap/>
<NewsCard/>
<Footer/>
<FooterLink/>
        </>
     );
};
 
export default Home ;