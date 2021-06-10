import React from 'react';
import './cart.scss';
import {connect} from 'react-redux';
import {deleteFromCart, plusQty, minusQty} from '../../redux/actions/cartAC';
import {Link} from 'react-router-dom';
import basePath from '../../assets/basePath';

const Cart = (props) => {
        console.log(props.cart);
        let total = 0;
        props.cart.forEach(item => {
            total += item.price * item.qty;
        });

        const orderBtn =  total !== 0 ? <Link  className="cart_btn" to={`${basePath}/order`}>ORDER ONLINE</Link> : null;

            return(
                <div className="cart_container" >

                    <div className="cart_title">Items in your cart:</div>
                    <div className="cart_list">
                        {
                            props.cart.map(item => {
                                return(
                                    <div className="cart_item" key={item.id}>
                                        <div className="cart_item_title">{item.title}</div>
                                        <div className="cart_item_price">Price: {item.price} $</div>
                                        <div onClick={() => props.deleteFromCart(item.id)} className="cart_item_delete"><i className="fa fa-trash-o"></i></div>
                                        <div className="cart_item_img"><img src={item.image} alt={item.title}/></div>                                               
                                        <div className="cart_item_qty"><div>Quantity: </div><br/>
                                            <button className="minus" onClick={()=> props.minusQty(item.id)}>  -  </button>
                                                <div className="cart_item_qty_number">{item.qty}</div>
                                            <button className="plus" onClick={() => props.plusQty(item.id)}> + </button>
                                        </div>                                      
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="cart_total">Total: {total} $</div>
                    {orderBtn}
                    <div className="cart_continue"><Link to={`${basePath}/`}>Continue shopping</Link></div>

                </div>
            )     
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = {
    deleteFromCart,
    plusQty,
    minusQty
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);