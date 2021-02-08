import React, {Component} from 'react';
import './navigation.scss';
import {Link} from 'react-router-dom';
import basePath from '../../services/basePath';
import animateScrollTo from 'animated-scroll-to';
import Menu from '../menu/menu';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.animatedScroll = this.animatedScroll.bind(this);
    }

    toggleMenu = () => {
        if(document.querySelector('.nav_menu_sidebar').classList.contains('active')) {
            document.querySelector('.nav_menu_sidebar').classList.remove('active');
        }
        else document.querySelector('.nav_menu_sidebar').classList.add('active');
    }

    animatedScroll = () => {

    }

    render() {
        return(
            <nav>
                <div className="nav_burger" onClick={this.toggleMenu}>            
                     &#9776;
                </div>
                <ul className="nav_menu">
                    <li><Link to={`${basePath}/`}><span>MY COFFEESHOP</span></Link></li>
                    <li><div onClick={() => animateScrollTo(500)}>OUR BEVERAGES</div></li>
                    <li onClick={() => animateScrollTo(1000)}>CHOOSE YOUR DRINK</li>
                    <li onClick={() => animateScrollTo(1900)}>GIFTSET</li>
                    <li onClick={() => animateScrollTo(2600)}>OUR COMBOS</li>
                </ul>
                <ul className="nav_menu_sidebar">
                    <li><Link to={`${basePath}/`} onClick={this.toggleMenu}><span>MY COFFEESHOP</span></Link></li>
                    <li><a href="#beverages" onClick={this.toggleMenu}>OUR BEVERAGES</a></li>
                    <li><a href="#menu" onClick={this.toggleMenu}>CHOOSE YOUR DRINK</a></li>
                    <li><a href="#giftset" onClick={this.toggleMenu}>GIFTSET</a></li>
                    <li><a href="#combo" onClick={this.toggleMenu}>OUR COMBOS</a></li>
                </ul>
            </nav>
        )
    }
    
}

export default Navigation;