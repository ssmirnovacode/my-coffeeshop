import React, {Component} from 'react';
import './place-order.scss';
import {connect} from 'react-redux';

class PlaceOrder extends Component {

    render() {
        return(
            <div className="modal_container" > 
                <div className="modal_dialog">
                    <div className="modal_content">
                        
                        <button className="modal_btn">Order now</button>
                    </div>
                </div>
            </div>
        )
    }
}


export default PlaceOrder;