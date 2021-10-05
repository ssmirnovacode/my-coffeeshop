import React from 'react';
import './thank-you.scss';
import {Link} from 'react-router-dom';
import basePath from '../../assets/basePath';
import {connect, useDispatch} from 'react-redux';
import {orderError} from '../../redux/actions/orderAC';
import Loading from '../loading/loading';
import Error from '../error/error';

const ThankYou = (props) => {

    const { loading, error} = props;
    const { firstname, number } = props.order;
    const dispatch = useDispatch();

    if (error) {
        const timerId = setTimeout(() =>{ 
            dispatch(orderError(null));
            props.history.push(`${basePath}/`); 
            clearInterval(timerId);
        }, 5000);
        return <Error text={error.message} />
    }

    if (loading) {
        return <Loading/>
    }

    else return(
        <div className="thank-you_container">
            <div className="thank-you_title">Thank you for your order, <span>{firstname}</span>!</div>
            <p className="thank-you_text">
                Your order # <span>{number}</span> has been submitted successfully. When it´s ready to be picked up, we will notify you by SMS.
                Remember, you can skip the line and go straight to the register to pay and pick up your coffee.
            </p>
            <Link className="thank-you_back" to={`${basePath}/`}>Back to the store</Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        order: state.order.order,
        loading: state.order.loading,
        error: state.order.error
    }
}

export default connect(mapStateToProps)(ThankYou);;