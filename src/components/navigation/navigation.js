import React, {Component} from 'react';
import './navigation.scss';
import {Link} from 'react-router-dom';
import basePath from '../../services/basePath';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu = () => {
        if(document.querySelector('.nav_menu_sidebar').classList.contains('active')) {
            document.querySelector('.nav_menu_sidebar').classList.remove('active');
        }
        else document.querySelector('.nav_menu_sidebar').classList.add('active');
    }

    render() {
        return(
            <nav>
                <div className="nav_burger" onClick={this.toggleMenu}>            
                     &#9776;
                </div>
                <ul className="nav_menu">
                    <li><Link to={`${basePath}/`}><span>MY COFFEESHOP</span></Link></li>
                    <li><Link to={`${basePath}/beverages`}>OUR BEVERAGES</Link></li>
                    <li><Link to={`${basePath}/menu`}>CHOOSE YOUR DRINK</Link></li>
                    <li><Link to={`${basePath}/giftset`}>GIFTSET</Link></li>
                    <li><Link to={`${basePath}/combo`}>OUR COMBOS</Link></li>
                </ul>
                <ul className="nav_menu_sidebar">
                    <li><Link to={`${basePath}/`}><span>MY COFFEESHOP</span></Link></li>
                    <li><Link to={`${basePath}/beverages`}>OUR BEVERAGES</Link></li>
                    <li><Link to={`${basePath}/menu`}>CHOOSE YOUR DRINK</Link></li>
                    <li><Link to={`${basePath}/giftset`}>GIFTSET</Link></li>
                    <li><Link to={`${basePath}/combo`}>OUR COMBOS</Link></li>
                </ul>
            </nav>
        )
    }
    
}

export default Navigation;