import React, {Component} from 'react';
import './navigation.scss';
import {Link} from 'react-router-dom';
import basePath from '../../assets/basePath';
import animateScrollTo from 'animated-scroll-to';

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
                    &#8801;
                </div>
                <ul className="nav_menu">
                    <li><Link to={`${basePath}/`}><span>MY COFFEESHOP</span></Link></li>
                    <li onClick={() => animateScrollTo(500)}>OUR BEVERAGES</li>
                    <li onClick={() => animateScrollTo(1000)}>CHOOSE YOUR DRINK</li>
                    <li onClick={() => animateScrollTo(1900)}>GIFTSET</li>
                    <li onClick={() => animateScrollTo(2600)}>OUR PASTRY</li>
                </ul>
                <ul className="nav_menu_sidebar">
                    <li><Link to={`${basePath}/`} onClick={this.toggleMenu}><span>MY COFFEESHOP</span></Link></li>
                    <li onClick={() => {animateScrollTo(500); this.toggleMenu();}}>OUR BEVERAGES</li>
                    <li onClick={() => {animateScrollTo(1500); this.toggleMenu();}}>CHOOSE YOUR DRINK</li>
                    <li onClick={() => {animateScrollTo(2800); this.toggleMenu();}}>GIFTSET</li>
                    <li onClick={() => {animateScrollTo(3500); this.toggleMenu();}}>OUR PASTRY</li>
                </ul>
            </nav>
        )
    }
    
}

export default Navigation;