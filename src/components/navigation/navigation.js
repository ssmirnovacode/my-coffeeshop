import React from 'react';
import './navigation.scss';

const Navigation = () => {
    return(
        <nav>
            <div className="nav_burger">            
                 &#9776;
            </div>
            <ul className="nav_menu">
                <li><a href="#"><span>MY COFFEESHOP</span></a></li>
                <li><a href="#beverages">OUR BEVERAGES</a></li>
                <li><a href="#menu">CHOOSE YOUR DRINK</a></li>
                <li><a href="#giftset">GIFTSET</a></li>
                <li><a href="#combo">OUR COMBOS</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;