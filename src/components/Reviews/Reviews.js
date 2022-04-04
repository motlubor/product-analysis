import React, { useEffect, useState } from 'react';
import ReviewProduct from '../ReviewProduct/ReviewProduct';
import './Reviews.css';

const Reviews = (props) => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data));

    }, []);

    return (
        <div>
            <h2 className='customer-rev'>Review Comes from Customer</h2>

            <div className='review'>
                {
                    reviews.map(review => <ReviewProduct
                        key={review.id}
                        name={review.name}
                        review={review.review}
                        ratings={review.ratings}
                        icon={review.icon}
                        img={review.img}


                    ></ReviewProduct>)
                }

            </div>
        </div>
    );
};

export default Reviews;