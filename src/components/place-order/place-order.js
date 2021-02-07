import React, {Component} from 'react';
import './place-order.scss';
import {connect} from 'react-redux';
import {clearForm, saveFormData} from '../../actions/orderAC';
import {Link} from 'react-router-dom';
import basePath from '../../services/basePath';
import { Control, Form, Errors} from 'react-redux-form';

class PlaceOrder extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (values) => {
        console.log(values);
        //post request
        //clear form
    }

    render() {
       
            return(
                <div className="order_container" > 
                    
                            <div className="order_title">Please fill in your data</div>

                            <form onSubmit={(values) => this.handleSubmit(values)}>
                                <div className="order_form-field">
                                    <label for="firstname">First name: </label>
                                    <input type="text" id="firstname" name ="firstname"  
                                        placeholder="First Name" />
                                </div>
                                <div className="order_form-field">
                                    <label for="lastname">Last name: </label>
                                    <input type="text" id="lastname" name ="lastname"  
                                        placeholder="Last Name" />
                                </div>
                                <div className="order_form-field">
                                    <label for="tel">Phone number: </label>
                                    <input type="text" id="tel" name ="tel"  
                                        placeholder="Phone number" />
                                </div>
                                <div className="order_form-field">
                                    <label for="email">Email: </label>
                                    <input type="email" id="email" name ="email" 
                                        placeholder="Email" />  
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
            )
        }
}

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