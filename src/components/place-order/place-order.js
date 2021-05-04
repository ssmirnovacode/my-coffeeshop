import React, {useState} from 'react';
import './place-order.scss';
import Cart from '../cart/cart';
import {connect} from 'react-redux';
import {clearCart} from '../../redux/actions/cartAC';
import {Link} from 'react-router-dom';
import basePath from '../../assets/basePath';
import {orderSubmitted, orderError} from '../../redux/actions/orderAC';
import { useFormik } from 'formik';
import validate from '../../services/validate';
import firebase from '../../firebase.config';

const PlaceOrder = (props) => {

    const [isFailMsgVisible, setFailMsg] = useState(false);

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
                values.id = Math.random().toString(36).substr(2, 9);
                const orderRef = firebase.database().ref('orders');
                orderRef.push(values);
                console.log(values);
                props.orderSubmitted(values);
                console.log(props.order);
                resetForm();
                props.clearCart();
                props.history.push(`${basePath}/thank-you`);
            }
            else {
                setFailMsg(true);
                setTimeout( () => setFailMsg(false), 1500)
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
                        <label>Phone:    
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
                {
                    isFailMsgVisible ? <div className="fail">Cart is empty</div> : null
                }
                
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
