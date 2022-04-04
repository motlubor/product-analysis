import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReviewProduct from '../ReviewProduct/ReviewProduct';
import Reviews from '../Reviews/Reviews';
import './Home.css'

const Home = () => {

    return (
        <div className='home-container'>
            <div className='home'>
                <h1>The Best Camera As You Choose</h1>
                <p>We respect your choose and Demand. We Afford to Supply Our Best Product to You.</p>
                <p>Customer Satisfaction is Our Main Goal. As Well By Giving Our Best Services</p>
                <p>We Always Try to Keep Qualityful and Also in Price Product That You Can Afford Easyly</p>
                <h2>Customer Reviews</h2>

                <div>
                    <Reviews></Reviews>


                </div>
                <button className='review-button'>See All Reviews</button>
            </div>
            <div className='home-image'>
                <img src="https://images.unsplash.com/photo-1621985499238-698dfd45b017?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
            </div>
        </div>
    );
};

export default Home;