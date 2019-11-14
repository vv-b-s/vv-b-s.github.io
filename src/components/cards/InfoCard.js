import React from 'react';
import './Card.css';
import './InfoCard.css';

const InfoCard = ({children, className}) => {
    return (
        <div className={`${className} card info-card`}>
            {children}
        </div>
    );
};

export default InfoCard;