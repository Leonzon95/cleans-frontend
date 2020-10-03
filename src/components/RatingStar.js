import React from 'react';
import { FaStar } from 'react-icons/fa';

const RatingStar = props => {
    const displayStars = () => {
        return [...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
            <FaStar size={25} 
                    color={ratingValue <= props.rating ? "#ffc107" : "#e4e5e9"} 
                    key={ratingValue}
                    />
            )
        });
    }
    return displayStars();
}

export default RatingStar;