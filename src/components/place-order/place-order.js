import React, {Component} from 'react';
import './place-order.scss';
import {connect} from 'react-redux';
import {clearForm, saveFormData} from '../../actions/orderAC';
import {Link} from 'react-router-dom';
import basePath from '../../services/basePath';
import { useFormik } from 'formik';

const PlaceOrder = () => {

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            tel: '',
            email: '',
        },
        onSubmit: values => {
          console.log(JSON.stringify(values, null, 2));
        },
      });

            return(
                <div className="order_container" > 
                    
                            <div className="order_title">Please fill in your data</div>

                            <form onSubmit={formik.handleSubmit}>
                                <div className="order_form-field">
                                    <label>First name: 
                                    <input type="text" id="firstname" name ="firstname"  
                                        placeholder="First Name" 
                                        onChange={formik.handleChange}
                                        value={formik.values.firstname}/>
                                    </label>
                                </div>
                                <div className="order_form-field">
                                    <label>Last name: 
                                    <input type="text" id="lastname" name ="lastname"  
                                        placeholder="Last Name" 
                                        onChange={formik.handleChange}
                                        value={formik.values.lastname}/>
                                    </label>
                                </div>
                                <div className="order_form-field">
                                    <label>Phone number: 
                                    <input type="text" id="tel" name ="tel"  
                                        placeholder="Phone number" 
                                        onChange={formik.handleChange}
                                        value={formik.values.tel}/>
                                    </label>
                                </div>
                                <div className="order_form-field">
                                    <label>Email: 
                                    <input type="email" id="email" name ="email" 
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
                                <div className="order_back"><Link to={`${basePath}/cart`}>Back to the cart</Link></div>
                            </form>

                </div>
            );
        
};

const mapStateToProps = (state) => {
    return {
        order: state.cart
    }
}

const mapDispatchToProps = {
    saveFormData,
    clearForm
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceOrder);