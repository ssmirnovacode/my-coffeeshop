import React from 'react';
import './heading.scss';

const Heading = ({small, big}) => {
    return (
        <div className="heading">
                <div className="heading_small">{small}</div>
                <div className="heading_big">{big}</div>
        </div>
    )
}

export default Heading;
