import React from 'react';
import './navigation.css';

const Navigation = () => {
    return(
        <nav>
            <ul className="navmenu">
                <li><a href="#"><span>MY COFFEESHOP</span></a></li>
                <li><a href="#">OUR BEVERAGES</a></li>
                <li><a href="#">CHOOSE YOUR DRINK</a></li>
                <li><a href="#">GIFTSET</a></li>
                <li><a href="#">OUR COMBOS</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;