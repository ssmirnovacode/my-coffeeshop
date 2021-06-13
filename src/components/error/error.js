import React from 'react';
import './error.scss';

const Error = ({text=''}) => {
    return(
        <div className="error">{text}</div>
    )
}

export default Error;