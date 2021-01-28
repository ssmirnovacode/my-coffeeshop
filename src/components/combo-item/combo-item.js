import React from 'react';
import './combo-item.scss';

const ComboItem = ({item, toggleModal, addToCart}) => {

    const {title, image, price, content} = item;

    return (
        <div className="combo-item_container">
            <div className="combo-item_img">
               <img src={image} alt={title}/> 
            </div>
            <div className="combo-item_price">{price} $<span>6.00 $</span></div>  {/* Add old prices to db.json */}
            <div className="combo-item_title">{title}</div>
            <div className="combo-item_content">{content}</div>
            <button className="combo-item_btn" onClick={() => addToCart()}>ADD To CART</button>
            <div className="combo-item_details"  onClick={() => toggleModal(item)}>Details</div>
        </div>
    )
}

export default ComboItem;