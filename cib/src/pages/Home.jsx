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
<Button title="Discover More" />

<Footer/>
<Button/>
<Card/>
<MainMenuTap/>
<SmallMenuTap/>
<SubTitle/>
<NewsCard/>
<SectionTitle/>
<CenterCard/>
<FooterLink/>
        </>
     );
};
 
export default Home ;