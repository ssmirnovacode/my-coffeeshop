import React from 'react';
import './beverage-item.scss';

const BeverageItem = ({item}) => { 
    const {title, image, text} = item; 
    return(
        <div className="beverage-item_container">
            <div className="beverage-item beverage-item_img"><img src={image} alt={title}/></div>
            <div className="beverage-item beverage-item_title">{title}</div>
            <div className="beverage-item beverage-item_text">{text}</div>
        </div>
    )
}

export default BeverageItem;