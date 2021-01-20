import React from 'react';
import './navigation.scss';

const Navigation = () => {
    return(
        <nav>
            <div className="nav_burger">
                <button>bur</button>
            </div>
            <ul className="nav_menu">
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