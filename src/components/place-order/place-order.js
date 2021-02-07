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

const PlaceOrder = (props) => {

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            tel: '',
            email: '',
        },
        onSubmit: (values, { resetForm }) => {
            values.items = props.cart;
            const data = JSON.stringify(values);  
            console.log(data);

            resetForm();
            props.clearCart();
            props.history.push(`${basePath}/thank-you`);

            /* const requestService = new RequestService();
            const url = baseURL+'orders';

            requestService.postMenuItems(url, data)
            .then(res => props.orderSubmitted(res))
            .then( res => console.log(res))
            .catch( () => props.orderError())
            .finally( () => {
                resetForm();
                props.clearCart();
                props.history.push(`${basePath}/thank-you`);
                //console.log(props.order);
            });      */      
        },
      });

    return(
        <div className="wrapper">
            <Cart/>
            
            <div className="order_container" >            
                <div className="order_title">Please fill in your data</div>
                <form onSubmit={formik.handleSubmit}>

                    <div className="order_form-field">
                        <label>First name: 
                        <input required type="text" id="firstname" name ="firstname"  
                            placeholder="First Name" 
                            onChange={formik.handleChange}
                            value={formik.values.firstname}/>
                        </label>
                    </div>

                    <div className="order_form-field">
                        <label>Last name: 
                        <input required type="text" id="lastname" name ="lastname"  
                            placeholder="Last Name" 
                            onChange={formik.handleChange}
                            value={formik.values.lastname}/>
                        </label>
                    </div>

                    <div className="order_form-field">
                        <label>Phone number: 
                        <input required type="text" id="tel" name ="tel"  
                            placeholder="Phone number" 
                            onChange={formik.handleChange}
                            value={formik.values.tel}/>
                        </label>
                    </div>
                    
                    <div className="order_form-field">
                        <label>Email: 
                        <input required type="email" id="email" name ="email" 
                            placeholder="Email" 
                            onChange={formik.handleChange}
                            value={formik.values.email}/>  
                        </label>
                    </div>

                    <p className="order_instructions">
                        When your order is ready we will send you 
                        an SMS notification so you can pick up your order in our shop.
                        No need to wait in the queue! Go straight to the register, pay for your order and pick it up.
                    </p>

                    <button className="order_btn" type="submit">Order now</button>
                    {/* <div className="order_back"><Link to={`${basePath}/cart`}>Back to the cart</Link></div> */}
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