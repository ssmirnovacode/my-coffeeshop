import React, {Component} from 'react';
import './navigation.scss';

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
                    <li><a href="#"><span>MY COFFEESHOP</span></a></li>
                    <li><a href="#beverages">OUR BEVERAGES</a></li>
                    <li><a href="#menu">CHOOSE YOUR DRINK</a></li>
                    <li><a href="#giftset">GIFTSET</a></li>
                    <li><a href="#combo">OUR COMBOS</a></li>
                </ul>
                <ul className="nav_menu_sidebar">
                    <li><a href="#"><span>MY COFFEESHOP</span></a></li>
                    <li><a href="#beverages">OUR BEVERAGES</a></li>
                    <li><a href="#menu">CHOOSE YOUR DRINK</a></li>
                    <li><a href="#giftset">GIFTSET</a></li>
                    <li><a href="#combo">OUR COMBOS</a></li>
                </ul>
            </nav>
        )
    }
    
}

export default Navigation;