import React from 'react';
import './ReviewProduct.css'

const ReviewProduct = (props) => {
    const { id, name, review, ratings } = props;
    return (
        <div className='revew'>

            <h5>Name: {name}</h5>
            <p>Review: {review}</p>
            <p>Ratings: {ratings}</p>
        </div>
    );
};

export default ReviewProduct;