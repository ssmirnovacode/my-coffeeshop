import React from 'react';
import './menu-item.scss';

const MenuItem = ({item}) => {
    const {image, price, title, content} = item;
    return (
        <div className="menu-item_container">
            <div className="menu-item_img">
               <img src={image} alt={title}/> 
            </div>
            <div className="menu-item_price">{price}</div>
            <div className="menu-item_title">{title}</div>
            <div className="menu-item_content">{content}</div>
            <button className="menu-item_btn">ORDER NOW!</button>
            <div className="menu-item_details"><a href="#">Details</a></div>
        </div>
    )
}

export default MenuItem;