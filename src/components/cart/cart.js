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
        this.props.cart.forEach(item => {
            total += item.price * item.qty;
        })
            return(
                <div className="cart_container" >

                    <div className="cart_title">Items in your cart:</div>
                    <div className="cart_list">
                        {
                            this.props.cart.map(item => {
                                return(
                                    <div className="cart_item" key={item.id}>
                                        <div className="cart_item_title">{item.title}</div>
                                        <div className="cart_item_price">Price: {item.price} $</div>
                                        <div onClick={() => this.props.deleteFromCart(item.id)} className="cart_item_delete"><i className="fa fa-trash-o"></i></div>
                                        <div className="cart_item_img"><img src={item.image} alt={item.title}/></div>                                               
                                        <div className="cart_item_qty">Quantity: 
                                            <button className="minus" onClick={()=> this.props.minusQty(item.id)}> - </button>
                                                {item.qty} 
                                            <button className="plus" onClick={() => this.props.plusQty(item.id)}> + </button>
                                        </div>
                                        
                                        
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="cart_total">Total: {total} $</div>
                    <button className="cart_btn" onClick={() => this.props.toggleOrderForm()}>Make your order</button>
                    <div className="cart_continue"><Link to={`${basePath}/`}>Continue shopping</Link></div>

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