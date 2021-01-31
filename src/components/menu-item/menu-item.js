import React from 'react';
import './menu-item.scss';
//import toggleButton from '../../local-functions/toggleButton';

const toggleButton = (addToCartBtnSelector, viewCartBtnSelector, e) => {

        console.log(e.target);

        const cardId = e.target.getAttribute('data-id'); // getting the item.id

        const addToCartBtns = document.querySelectorAll(addToCartBtnSelector),
            viewCartBtns = document.querySelectorAll(viewCartBtnSelector);

        addToCartBtns.forEach(elem => {
            if (elem.getAttribute('data-id') === cardId) {
                elem.classList.add('hidden');
            }
        });

        viewCartBtns.forEach(elem => {
            if (elem.getAttribute('data-id') === cardId) {
                elem.classList.remove('hidden');
            }
        });
    
}

const MenuItem = ({item, toggleModal, addToCart, toggleCart}) => {

    const {image, price, title, content, id} = item;
    return (
        <div className="menu-item_container">
            <div className="menu-item_img">
               <img src={image} alt={title}/> 
            </div>
            <div className="menu-item_price">{price} $</div>
            <div className="menu-item_title">{title}</div>
            <div className="menu-item_content">{content}</div>
            <button className="menu-item_btn" data-id={id} onClick={(e) => {
                addToCart();
                toggleButton('.menu-item_btn', '.menu-item_btn_viewcart', e);
                }}>ADD To CART</button>
            <button className="menu-item_btn_viewcart hidden" data-id={id} onClick={toggleCart}>View cart</button>
            <div className="menu-item_details" onClick={() => toggleModal(item)}>Details</div>
        </div>
    )
}

export default MenuItem;