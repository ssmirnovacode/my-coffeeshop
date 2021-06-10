import React from 'react';
import './home.scss';
import Navigation from '../navigation/navigation';
import cartIcon from '../../img/shopping-cart-solid.svg';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import basePath from '../../assets/basePath';
import animateScrollTo from 'animated-scroll-to';
import { withRouter } from "react-router-dom";

const Home = props => {

    let total = 0;
    props.cart.forEach(item => {
        total += item.price * item.qty;
    });

    const renderNav = props.location.pathname !== '/my-coffeeshop/cart' 
                        && props.location.pathname !=='/my-coffeeshop/order' 
                        && props.location.pathname !=='/my-coffeeshop/thank-you'
                        //&& props.location.pathname.substring(0, 26) !=='/my-coffeeshop/item-detail'
                        && props.location.pathname.substring(0, 21) !=='/my-coffeeshop/combos'
                        && props.location.pathname.substring(0, 22) !=='/my-coffeeshop/giftset'
                        && props.location.pathname.substring(0, 24) !=='/my-coffeeshop/menuItems'
                        ? <Navigation/> : 
                            <> 
                            <Link className="homelink" to={`${basePath}/`}><span>MY COFFEESHOP</span></Link>
                            <Link className="homeicon" to={`${basePath}/`}><i className="fa fa-home" aria-hidden="true"></i> </Link>
                            </> ;

    const renderCartIcon = props.location.pathname !== '/my-coffeeshop/cart' 
                        && props.location.pathname !=='/my-coffeeshop/order' 
                        && props.location.pathname !=='/my-coffeeshop/thank-you' ? 
                        <div className="cart" >
                        <Link to={`${basePath}/cart`}><img className="cart_image" src={cartIcon} alt="cart"/>
                        <div className="cart__total">Total: {total} $</div></Link>
                        </div>
                        : null;

    return (
        <header className="home_container" id="home">
            <div className="left block">
                <div className="moto">YOUR <span>PERSONALIZED</span> COFFEE</div>
            </div>

            <div className="home-image">
                
            </div>

            <div className="right block">
                    {renderCartIcon}
                <div className="navigation">
                    {renderNav}
                </div>
                <div className="up" onClick={() => animateScrollTo(document.querySelector('#home'))}> &uarr; </div>
            </div>

        </header>
    )
     
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default withRouter(connect(mapStateToProps)(Home));