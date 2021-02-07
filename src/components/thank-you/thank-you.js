import React from 'react';
import './thank-you.scss';
import {Link} from 'react-router-dom';
import basePath from '../../services/basePath';

const ThankYou = (props) => {

    setTimeout(() => props.history.push(`${basePath}/`), 5000);

    return(
        <div className="thank-you_container">
            <div className="thank-you_title">Thank you for your order!</div>
            <p className="thank-you_text">
                Your order has been submitted successfully. When it´s ready to be pisked up, we will notify you by SMS.
                Remember, you can skip the line and go straight to the register to pay and pick up your coffee.
            </p>
            <Link className="thank-you_back" to={`${basePath}/`}>Back to the store</Link>
        </div>
    )
}



export default ThankYou;