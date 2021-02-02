import React, {Component} from 'react';
import './cart.scss';
import {connect} from 'react-redux';
import {deleteFromCart, toggleCart, plusQty, minusQty} from '../../actions/cartAC';
import {toggleOrderForm} from '../../actions/orderAC';

class Cart extends Component {

    render() {
        let total = 0;
        this.props.cart.items.forEach(item => {
            total += item.price * item.qty;
        })
            return(
                <div className="modal_container" onClick={(event) => {
                                                        if (event.target.classList.contains('modal_container')) {
                                                            return this.props.toggleCart(); 
                                                            }    
                                                        }}>
                    <div className="modal_dialog">
                        <div className="modal_content">
                            <div className="modal_close" onClick={() => this.props.toggleCart()}>&times;</div> {/* Change to 'continue shopping' */}
                            <div className="modal_title">Items in your cart:</div>
                            <div className="modal_cart_list">
                                {
                                    this.props.cart.items.map(item => {
                                        return(
                                            <div className="modal_cart_item" key={item.id}>
                                                <div className="modal_cart_item_title">{item.title}</div>
                                                <div className="modal_cart_item_price">Price: {item.price} $</div>
                                                <div onClick={() => this.props.deleteFromCart(item.id)} className="modal_cart_item_delete"><i className="fa fa-trash-o"></i></div>
                                                <div className="modal_cart_item_img"><img src={item.image} alt={item.title}/></div>                                               
                                                <div className="modal_cart_item_qty">Quantity: 
                                                    <button className="plus" onClick={() => {
                                                        this.props.plusQty(item.id);
                                                        console.log(item);
                                                        }}> + </button>
                                                     {item.qty} 
                                                    <button className="minus" onClick={()=> this.props.minusQty(item.id)}> - </button>
                                                </div>
                                                
                                                
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="modal_cart_total">Total: {total} $</div>
                            <button className="modal_btn" onClick={() => {
                                this.props.toggleOrderForm();
                                this.props.toggleCart();
                                }}>Make your order</button>
                            <div className="modal_cart_continue" onClick={() => this.props.toggleCart()}>Continue shopping</div>
                        </div>
                    </div>
                </div>
            )
               
    }   
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = {
    toggleCart,
    deleteFromCart,
    plusQty,
    minusQty,
    toggleOrderForm
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);