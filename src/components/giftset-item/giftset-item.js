import React from 'react';
import './giftset-item.scss';
import toggleButton from '../../local-functions/toggleButton';

const GiftsetItem = ({item, toggleModal, addToCart, toggleCart}) => {

    const {title, image, price, content, id} = item;

    return(
        <div className="giftset_item">
            <div className="giftset_img"><img src={image} alt={title} onClick={() => toggleModal(item)}/></div>
            <div className="giftset_content">
                
                    <div className="giftset_price">{price} $</div>
                    <div className="giftset_title">{title}</div>
                    <div className="giftset_text">{content}</div>
                    <button className="giftset_btn" data-id={id} onClick={(e) => {
                        addToCart();
                        toggleButton('.giftset_btn', '.giftset_btn_viewcart', e);            
                    }}>ADD To CART</button>
                    <button className="giftset_btn_viewcart hidden" data-id={id} onClick={toggleCart}>View cart</button>
                    <div className="giftset_details" onClick={() => toggleModal(item)}>Details</div>
            </div>
        </div>
    )
}

export default GiftsetItem;

