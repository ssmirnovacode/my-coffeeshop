import React from 'react';
import './thank-you.scss';
import {Link} from 'react-router-dom';
import basePath from '../../assets/basePath';
import {connect} from 'react-redux';
import Loading from '../loading/loading';

const ThankYou = (props) => {

    const {firstname, loading} = props.order;

    const timerId = setTimeout(() =>{ props.history.push(`${basePath}/`); clearInterval(timerId)}, 10000);

    if (loading) {
        return <Loading/>
    }


    return(
        <div className="thank-you_container">
            <div className="thank-you_title">Thank you for your order, <span>{firstname}</span>!</div>
            <p className="thank-you_text">
                Your order # <span>{props.order.number}</span> has been submitted successfully. When it´s ready to be picked up, we will notify you by SMS.
                Remember, you can skip the line and go straight to the register to pay and pick up your coffee.
            </p>
            <Link className="thank-you_back" to={`${basePath}/`}>Back to the store</Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        order: state.order.order,
        loading: state.order.loading
    }
}

export default connect(mapStateToProps)(ThankYou);;