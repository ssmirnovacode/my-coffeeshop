import React, {Component} from 'react';
import './home.scss';
import Navigation from '../navigation/navigation';
import cartIcon from '../../img/shopping-cart-solid.svg';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import basePath from '../../services/basePath';
import animateScrollTo from 'animated-scroll-to';
import { withRouter } from "react-router-dom";

class Home extends Component {
    
    render() {
        let total = 0;
        this.props.cart.forEach(item => {
            total += item.price * item.qty;
        })

        //console.log(this.props.location);

        const renderNav = this.props.location.pathname !== '/my-coffeeshop/cart' 
                            && this.props.location.pathname !=='/my-coffeeshop/order' 
                            && this.props.location.pathname !=='/my-coffeeshop/thank-you'
                            && this.props.location.pathname.substring(0, 26) !=='/my-coffeeshop/item-detail'
                            ? <Navigation/> : 
                                <> 
                                <Link className="homelink" to={`${basePath}/`}><span>MY COFFEESHOP</span></Link>
                                <Link className="homeicon" to={`${basePath}/`}><i className="fa fa-home" aria-hidden="true"></i> </Link>
                                </> ;

        const renderCartIcon = this.props.location.pathname !== '/my-coffeeshop/cart' 
                            && this.props.location.pathname !=='/my-coffeeshop/order' 
                            && this.props.location.pathname !=='/my-coffeeshop/thank-you' ? 
                            <div className="cart" >
                            <Link to={`${basePath}/cart`}><img className="cart_image" src={cartIcon} alt="cart"/>
                            <div className="cart__total">Total: {total} $</div></Link>
                            </div>
                            : null;

        return (
            <div className="home_container" id="home">
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
    
            </div>
        )
    }  
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default withRouter(connect(mapStateToProps)(Home));