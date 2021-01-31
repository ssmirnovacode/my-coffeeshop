import React, {Component} from 'react';
import './cart.scss';
import {connect} from 'react-redux';
import {deleteFromCart, toggleCart, plusQty, minusQty} from '../../actions/cartAC';

class Cart extends Component {

    constructor(props) {
        super(props);

        this.changeQtyView = this.changeQtyView.bind(this);
    }

    changeQtyView = (id) => {
        const targetItem = this.props.cart.items.filter(item => item.id === id)[0];
        console.log(targetItem);
        const oldQty = targetItem.qty;
        const newQty = document.querySelector('[type="number"]').value;

        if (newQty > oldQty) {
            this.props.plusQty(id);
            document.querySelector('[type="number"]').value = targetItem.qty++;
        }
        else {
            this.props.minusQty(id);
            document.querySelector('[type="number"]').value = targetItem.qty--;
        }
        
    }

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
                                                <div className="modal_cart_item_qty">Quantity: <input type="number" value={item.qty} onChange={() => {
                                                    //this.props.plusQty(item.id);
                                                    this.changeQtyView(item.id)
                                                    }}/></div>
                                                
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
    deleteFromCart,
    plusQty,
    minusQty
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);