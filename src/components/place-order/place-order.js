import React, {Component} from 'react';
import './place-order.scss';
import {connect} from 'react-redux';
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
            <div className="modal_container" > 
                <div className="modal_dialog">
                    <div className="modal_content">
                            <div className="modal_close" onClick={() => this.props.toggleModal()}>&times;</div> 
                            <div className="modal_title">Please fill in your data</div>
                            <Form model="placeOrder" onSubmit={(values) => this.handleSubmit(values)}>
                                <Control.text model=".firstname" id="firstname" name ="firstname"  
                                    placeholder="First Name" />
                                <Control.text model=".lastname" id="lastname" name ="lastname"  
                                    placeholder="Last Name" />
                                <Control.text model=".tel" id="tel" name ="tel"  
                                    placeholder="Phone number" />
                                <Control.text model=".email" id="email" name ="email" 
                                    placeholder="Email" />  
                                <button type="submit">Order now!</button>
                            </Form>
                    </div>
                </div>
            </div>
        )
    }
}


export default PlaceOrder;