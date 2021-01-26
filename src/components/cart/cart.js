import React, {Component} from 'react';
import '.cart.scss';
import {connect} from 'react-redux';
import {toggleModal} from '../../actions/modal';
import {deleteFromCart} from '../../actions/cartAC';

class Cart extends Component {

    render() {

        return(
            <div className="modal_container" onClick={(event) => {
                                                    if (event.target.classList.contains('modal_container')) {
                                                        return this.props.toggleModal(); //possible bug: make sure to change modal state on clicking the cart
                                                        }    
                                                    }}>
                <div className="modal_dialog">
                    <div className="modal_content">
                        <div className="modal_close" onClick={() => this.props.toggleModal()}>&times;</div> {/* Change to 'continue shopping' */}
                        <div className="modal_cart_list">
                            {
                                this.props.cart.map(item => {
                                    return(
                                        <div className="modal_cart_item" key={item.id}>
                                        <div className="modal_cart_item_title">{item.title}</div>
                                        <div className="modal_cart_item_price">{item.price}</div>
                                        <div className="modal_cart_item_qty">{item.qty}</div>
                                        <div onClick={() => deleteFromCart(item.id)} className="modal_cart_item_delete">&times;</div>
                                    </div>
                                    )
                                })
                            }
                        </div>
                        <button className="modal_btn" /* onClick={this.props.placeOrder} */>Order now</button>
                    </div>
                </div>
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        modal: state.modal,
        cart: state.cart
    }
}

const mapDispatchToProps = {
    toggleModal,
    deleteFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);