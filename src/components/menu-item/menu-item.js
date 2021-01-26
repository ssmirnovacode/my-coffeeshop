import React from 'react';
import './menu-item.scss';

const MenuItem = ({item, toggleModal}) => {

    const {image, price, title, content} = item;
    return (
        <div className="menu-item_container">
            <div className="menu-item_img">
               <img src={image} alt={title}/> 
            </div>
            <div className="menu-item_price">{price}</div>
            <div className="menu-item_title">{title}</div>
            <div className="menu-item_content">{content}</div>
            <button className="menu-item_btn">ADD To CART</button>
            <div className="menu-item_details" onClick={() => toggleModal(item)}>Details</div>
        </div>
    )
}

export default MenuItem;