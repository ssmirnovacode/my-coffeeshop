import React from 'react';
import './combo-item.scss';

const ComboItem = ({item}) => {

    const {title, image, price, content} = item;

    return (
        <div className="combo-item_container">
            <div className="combo-item_img">
               <img src={image} alt={title}/> 
            </div>
            <div className="combo-item_price">{price}<span>6.00 $</span></div>  {/* Add old prices to db.json */}
            <div className="combo-item_title">{title}</div>
            <div className="combo-item_content">{content}</div>
            <button className="combo-item_btn">ORDER NOW!</button>
            <div className="combo-item_details"><a href="#">Details</a></div>
        </div>
    )
}

export default ComboItem;