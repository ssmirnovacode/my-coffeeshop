import React from 'react';
import './navigation.scss';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return(
        <nav>
            <div className="nav_burger">            
                 &#9776;
            </div>
            <ul className="nav_menu">
                <li><Link to={'/'}><span>MY COFFEESHOP</span></Link></li>
                <li><Link to={'/beverages'}>OUR BEVERAGES</Link></li>
                <li><Link to={'/menu'}>CHOOSE YOUR DRINK</Link></li>
                <li><Link to={'/giftset'}>GIFTSET</Link></li>
                <li><Link to={'/combo'}>OUR COMBOS</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation;