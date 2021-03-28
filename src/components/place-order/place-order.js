import React from 'react';
import './place-order.scss';
import Cart from '../cart/cart';
import {connect} from 'react-redux';
import {clearCart} from '../../actions/cartAC';
import {Link} from 'react-router-dom';
import basePath from '../../services/basePath';
import baseURL from '../../services/baseURL';
import RequestService from '../../services/requestService';
import {orderSubmitted, orderError} from '../../actions/orderAC';
import { useFormik } from 'formik';
import orderFailMsg from '../../local-functions/orderFailMsg';
import validate from '../../services/validate';

const PlaceOrder = (props) => {

    const formik = useFormik({
        initialValues: {
            firstname: '',
            tel: ''
        },
        validate,
        onSubmit: (values, { resetForm }) => {
            if (props.cart.length > 0) {
                values.items = props.cart.map(item => ({
                    id: item.id,
                    title: item.title,
                    qty: item.qty
                }));

                const requestService = new RequestService();
                const url = baseURL+'orders';
    
                requestService.postMenuItems(url, values)
                .then(res => props.orderSubmitted(res))
                .then( res => console.log(res))
                .catch( () => props.orderError())
                .finally( () => {
                    resetForm();
                    props.clearCart();
                    props.history.push(`${basePath}/thank-you`);
                });
            }
            else {
                orderFailMsg('.order_back');
            }          
        },
      });

    return(
        <div className="wrapper">
            <Cart/>
            
            <div className="order_container" >            
                <div className="order_title">Please fill in your data</div>
                <form onSubmit={formik.handleSubmit}>

                    <div className="order_form-field">
                        <label>Name:   
                        <input required type="text" id="firstname" name ="firstname"  
                            placeholder="Your Name" 
                            onChange={formik.handleChange}
                            value={formik.values.firstname}/>
                        </label>
                        {formik.errors.firstname ? <div className="errMess">{formik.errors.firstname}</div> : null}
                    </div>

                    <div className="order_form-field">
                        <label>Phone number:    
                        <input required type="text" id="tel" name ="tel"  
                            placeholder="Your phone number" 
                            onChange={formik.handleChange}
                            value={formik.values.tel}/>
                        </label>
                        {formik.errors.tel ? <div className="errMess">{formik.errors.tel}</div> : null}
                    </div>

                    <p className="order_instructions">
                        When your order is ready we will send you 
                        an SMS notification so you can pick up your order in our shop.
                        No need to wait in the queue! Go straight to the register, pay for your order and pick it up.
                    </p>

                    <button className="order_btn" type="submit">ORDER NOW</button>
                </form>
                <div className="order_back"><Link to={`${basePath}/`}>Back to the store</Link></div>

            </div>
        </div>
    );
        
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        order: state.order
    }
}

const mapDispatchToProps = {
    clearCart,
    orderSubmitted,
    orderError
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceOrder);