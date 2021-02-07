import React, {Component} from 'react';
import './place-order.scss';
import {connect} from 'react-redux';
import {clearForm, saveFormData} from '../../actions/orderAC';
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
                    <div className="order_content"> 
                            <div className="order_title">Please fill in your data</div>
                            <form onSubmit={(values) => this.handleSubmit(values)}>
                                <input type="text" id="firstname" name ="firstname"  
                                    placeholder="First Name" />
                                <input type="text" id="lastname" name ="lastname"  
                                    placeholder="Last Name" />
                                <input type="text" id="tel" name ="tel"  
                                    placeholder="Phone number" />
                                <input type="email" id="email" name ="email" 
                                    placeholder="Email" />  
                                <button className="modal_btn" type="submit">Order now!</button>
                            </form>
                    </div>   
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