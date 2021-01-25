import React from 'react';
import './home.scss';
import Navigation from '../navigation/navigation';
import cartIcon from '../../img/shopping-cart-solid.svg';

const Home = () => {


    return (
        <div className="home_container">
            <div className="left block">
                <div className="moto">YOUR <span>PERSONALIZED</span> COFFEE</div>
            </div>

            <div className="home-image">
                
            </div>

            <div className="right block">
                <div className="cart">
                    <img className="cart_image" src={cartIcon} alt="cart"></img>
                    <div className="cart_total">Total: 100 $</div>
                    </div>
                <div className="navigation">
                    <Navigation/>
                </div>
            </div>

        </div>
    )
}

export default Home;