import React from 'react';
import './giftset-item.scss';

const GiftsetItem = ({item, toggleModal}) => {

    const {title, image, price, content} = item;

    return(
        <div className="giftset_item">
            <div className="giftset_img"><img src={image} alt={title}/></div>
            <div className="giftset_content">
                
                    <div className="giftset_price">{price} $</div>
                    <div className="giftset_title">{title}</div>
                    <div className="giftset_text">{content}</div>
                    <button className="giftset_btn">ADD To CART</button>
                    <div className="giftset_details" onClick={() => toggleModal(item)}>Details</div>
            </div>
        </div>
    )
}

export default GiftsetItem;

