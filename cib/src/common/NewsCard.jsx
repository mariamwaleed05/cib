import React from 'react';
import './NewsCard.css';
import Image from '../assets/img4.jpeg';

const NewsCard = () => {
    return (
        <div className="news-section-container">
            <div className="news-item">
                <div className="news-image-container">
                    <img src={Image} alt="CIB" className="img" />
                </div>
                <div className="news-content">
                    <p className="news-date">08/10/2025 - Commercial International Bank (CIB) Has Partnered with CI Capital to Successfully Closes the Seventh Securitization Bond Issuance for Halan Consumer Finance, Worth EGP 3.4 Billion</p>
                    <h3 className="news-title">Commercial International Bank (CIB) Has Partnered with CI Capital to Successfully Closes the Seventh Securitization Bond Issuance for Halan Consumer Finance, Worth EGP 3.4 Billion</h3>
                    <p className="news-description">CIB, Egypt’s leading and largest private-sector bank, has successfully partnered with CI Capital to complete the seventh issuance for Halan Consumer Finance, valued at EGP 3.4 billion.</p>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;