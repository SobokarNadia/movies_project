import React from 'react';
import StarRatings from "react-star-ratings/build/star-ratings";


const StarsRating = ({vote_average}) => {
    const rating = vote_average*0.5;
    return (
        <div>
            <StarRatings rating={rating} starRatedColor={'yellow'} />
        </div>
    )
}

export {StarsRating};