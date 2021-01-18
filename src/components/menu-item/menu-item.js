import React from 'react';
import './menu-item.scss';

const MenuItem = () => {
    return (
        <div className="menu-item_container">
            <div className="menu-item_img">
               <img src="https://png.pngtree.com/png-vector/20190529/ourlarge/pngtree-coffee-cup-icon-png-image_1117239.jpg" alt="coffee icon"/> 
            </div>
            <div className="menu-item_price">5.00 $</div>
            <div className="menu-item_title">Some coffee</div>
            <div className="menu-item_content">Coffee, sugar, dry milk</div>
            <button className="menu-item_btn">ORDER NOW!</button>
            <div className="menu-item_details"><a href="#">Details</a></div>
        </div>
    )
}

export default MenuItem;