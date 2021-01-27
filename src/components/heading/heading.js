import React from 'react';
import './heading.scss';

const Heading = ({small, big, id}) => {
    return (
        <div className="heading">
                <a name={id}></a>
                <div className="heading_small">{small}</div>
                <div className="heading_big">{big}</div>
        </div>
    )
}

export default Heading;
