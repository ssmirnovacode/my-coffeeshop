import React, {Component} from 'react';
import './cart.scss';
import {connect} from 'react-redux';
import {deleteFromCart, plusQty, minusQty} from '../../actions/cartAC';
import {toggleOrderForm} from '../../actions/orderAC';
import {Link} from 'react-router-dom';
import basePath from '../../services/basePath';

class Cart extends Component {

    render() {
        let total = 0;
        this.props.cart.items.forEach(item => {
            total += item.price * item.qty;
        })
            return(
                <div className="cart_container" >

                    <div className="cart_title">Items in your cart:</div>
                    <div className="cart_list">
                        {
                            this.props.cart.items.map(item => {
                                return(
                                    <div className="cart_item" key={item.id}>
                                        <div className="cart_item_title">{item.title}</div>
                                        <div className="cart_item_price">Price: {item.price} $</div>
                                        <div onClick={() => this.props.deleteFromCart(item.id)} className="modal_cart_item_delete"><i className="fa fa-trash-o"></i></div>
                                        <div className="cart_item_img"><img src={item.image} alt={item.title}/></div>                                               
                                        <div className="cart_item_qty">Quantity: 
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
                    <button className="modal_btn" onClick={() => this.props.toggleOrderForm()}>Make your order</button>
                    <div className="modal_cart_continue"><Link to={`${basePath}/menu`}>Continue shopping</Link></div>

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
    deleteFromCart,
    plusQty,
    minusQty,
    toggleOrderForm
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);