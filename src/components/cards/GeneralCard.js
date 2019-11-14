import React from 'react'
import './GeneralCard.css'
import './Card.css'
import 'bootstrap/dist/css/bootstrap.css'

const GeneralCard = ({children, className}) => {
    return (
        <div className={`${className} card general-card`}>
            {children}
        </div>
    )
};

export default GeneralCard;