import React from 'react';
import './beverage-item.scss';

const BeverageItem = () => { //as props we will pass {img, title, text}
    return(
        <div className="beverage-item_container">
            <div className="beverage-item beverage-item_img"><img src="https://png.pngtree.com/png-vector/20190529/ourlarge/pngtree-coffee-cup-icon-png-image_1117239.jpg" alt="coffee icon"/></div>
            <div className="beverage-item beverage-item_title">Item title</div>
            <div className="beverage-item beverage-item_text">Some description here... Some description here... Some description here...</div>
        </div>
    )
}

export default BeverageItem;