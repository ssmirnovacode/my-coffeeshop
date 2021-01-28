import React, {Component} from 'react';
import './cart.scss';
import {connect} from 'react-redux';
import {deleteFromCart, toggleCart} from '../../actions/cartAC';

class Cart extends Component {

    render() {
        let total = 0;
        this.props.cart.items.forEach(item => {
            total += item.price * item.qty;
        })

        if (this.props.cart.visible) {
            //document.body.style.overflow = 'hidden';

            return(
                <div className="modal_container" onClick={(event) => {
                                                        if (event.target.classList.contains('modal_container')) {
                                                            return this.props.toggleCart(); 
                                                            }    
                                                        }}>
                    <div className="modal_dialog">
                        <div className="modal_content">
                            <div className="modal_close" onClick={() => this.props.toggleCart()}>&times;</div> {/* Change to 'continue shopping' */}
                            <div className="modal_cart_list">
                                {
                                    this.props.cart.items.map(item => {
                                        return(
                                            <div className="modal_cart_item" key={item.id}>
                                            <div className="modal_cart_item_title">{item.title}</div>
                                            <div className="modal_cart_item_price">{item.price} $</div>
                                            <div className="modal_cart_item_qty">Quantity: {item.qty}</div>
                                            <div onClick={() => this.props.deleteFromCart(item.id)} className="modal_cart_item_delete">&times;</div>
                                        </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="modal_cart_total">Total: {total} $</div>
                            <button className="modal_btn" /* onClick={this.props.placeOrder} */>Order now</button>
                            <div className="modal_cart_continue" onClick={() => this.props.toggleCart()}>Continue shopping</div>
                        </div>
                    </div>
                </div>
            )
        }

        else {
            document.body.style.overflow = '';
            return null;
        }
        
    }
    
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = {
    toggleCart,
    deleteFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);