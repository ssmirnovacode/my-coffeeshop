import React from 'react';
import './combo-item.scss';
import toggleButton from '../../local-functions/toggleButton';

const ComboItem = ({item, toggleModal, addToCart, toggleCart}) => {

    const {title, image, price, content, id} = item;

    return (
        <div className="combo-item_container">
            <div className="combo-item_img">
               <img src={image} alt={title}/> 
            </div>
            <div className="combo-item_price">{price} $<span>6.00 $</span></div>  {/* Add old prices to db.json */}
            <div className="combo-item_title">{title}</div>
            <div className="combo-item_content">{content}</div>
            <button className="combo-item_btn" data-id={id} onClick={(e) => {
                addToCart();
                toggleButton('.combo-item_btn','.combo-item_btn_viewcart', e)
            }}>ADD To CART</button>
            <button className="combo-item_btn_viewcart hidden" data-id={id} onClick={toggleCart}>View cart</button>
            <div className="combo-item_details"  onClick={() => toggleModal(item)}>Details</div>
        </div>
    )
}

export default ComboItem;