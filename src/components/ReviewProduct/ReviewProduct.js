import React from 'react';
import './ReviewProduct.css'

const ReviewProduct = (props) => {
    const { id, name, review, ratings, icon, img } = props;
    return (
        <div className='revew'>
            <div className='rev-img'>
                <img src={img} alt="" />
            </div>
            <h3>Name: {name}</h3>
            <h5>Review: {review}</h5>
            <p>{ratings}</p>
            <img src={icon}></img>

        </div>
    );
};

export default ReviewProduct;


