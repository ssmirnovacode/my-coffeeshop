import React from 'react';
import './menu-item.scss';
import toggleButton from '../../local-functions/toggleButton';

const MenuItem = ({item, toggleModal, addToCart, toggleCart}) => {

    const {image, price, title, content} = item;
    return (
        <div className="menu-item_container">
            <div className="menu-item_img">
               <img src={image} alt={title}/> 
            </div>
            <div className="menu-item_price">{price} $</div>
            <div className="menu-item_title">{title}</div>
            <div className="menu-item_content">{content}</div>
            <button className="menu-item_btn" onClick={() => {
                addToCart();
                toggleButton('.menu-item_btn', '.menu-item_btn_viewcart');
                }}>ADD To CART</button>
            <button className="menu-item_btn_viewcart hidden" onClick={toggleCart}>View cart</button>
            <div className="menu-item_details" onClick={() => toggleModal(item)}>Details</div>
        </div>
    )
}

export default MenuItem;