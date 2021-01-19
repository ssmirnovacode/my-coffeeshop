import React from 'react';
import './combo-item.scss';

const ComboItem = () => {
    return (
        <div className="combo-item_container">
            <div className="combo-item_img">
               <img src="https://png.pngtree.com/png-vector/20190529/ourlarge/pngtree-coffee-cup-icon-png-image_1117239.jpg" alt="coffee icon"/> 
            </div>
            <div className="combo-item_price">5.00 $ <span>6.00 $</span></div>
            <div className="combo-item_title">Some coffee</div>
            <div className="combo-item_content">Coffee, sugar, dry milk</div>
            <button className="combo-item_btn">ORDER NOW!</button>
            <div className="combo-item_details"><a href="#">Details</a></div>
        </div>
    )
}

export default ComboItem;