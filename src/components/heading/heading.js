import React from 'react';

const Heading = ({small, big}) => {
    return (
        <div className="heading beverages">
                <div className="heading_small">{small}</div>
                <div className="heading_big">{big}</div>
        </div>
    )
}

export default Heading;

/* <div className="heading beverages">
                <div className="heading_small">Your Personalized Coffee</div>
                <div className="heading_big">COFFEE BUILD YOUR BASE</div>
        </div> */