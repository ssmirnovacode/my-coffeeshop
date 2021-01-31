import React, {Component} from 'react';
import './item-detail.scss';
import {connect} from 'react-redux';
import {toggleModal} from '../../actions/modal';
import {addToCart, toggleCart} from '../../actions/cartAC';
import toggleButton from '../../local-functions/toggleButton';

class ItemDetail extends Component {

    render() {

        if (this.props.modal.shown) {
            const {title, price, image, content, id} = this.props.modal.item;
            document.body.style.overflow = 'hidden';
            return(
                <div className="modal_container" onClick={(event) => {
                                                    if (event.target.classList.contains('modal_container')) {
                                                        return this.props.toggleModal(); 
                                                        }    
                                                    }}> 
                    <div className="modal_dialog">
                        <div className="modal_content">
                            <div className="modal_close" onClick={() => this.props.toggleModal()}>&times;</div> 
                            <div className="modal_img"><img src={image} alt={title}/></div>
                            <div className="modal_title">{title}</div>
                            <div className="modal_price">{price} $</div>  
                            <div className="modal_text">{content}</div>
                            <button className="modal_btn" data-id={id}
                            onClick={(e) => {                                           
                                this.props.addToCart(this.props.modal.item);
                                toggleButton('.modal_btn','.modal_btn_viewcart', e);
                                }}>ADD To CART</button>
                            <button className="modal_btn_viewcart hidden" data-id={id}
                            onClick={this.props.toggleCart}>View cart</button>    
                        </div>
                    </div>
                </div>
            )
        }
        else {
            document.body.style.overflow = '';
            return (<div className="hidden"></div>); //change to 'null'
        }
    } 
}

const mapStateToProps = (state) => {
    return {
        modal: state.modal
    }
}

const mapDispatchToProps = {
    toggleModal,
    addToCart,
    toggleCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);