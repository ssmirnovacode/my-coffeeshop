import React, {Component} from 'react';
import './home.scss';
import Navigation from '../navigation/navigation';
import cartIcon from '../../img/shopping-cart-solid.svg';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import basePath from '../../services/basePath';

class Home extends Component {
    
    render() {
        let total = 0;
        this.props.cart.items.forEach(item => {
            total += item.price * item.qty;
        })

        return (
            <div className="home_container">
                <div className="left block">
                    <div className="moto">YOUR <span>PERSONALIZED</span> COFFEE</div>
                </div>
    
                <div className="home-image">
                    
                </div>
    
                <div className="right block">
                    <div className="cart" >
                        <Link to={`${basePath}/cart`}><img className="cart_image" src={cartIcon} alt="cart"/></Link>
                        <div className="cart__total">Total: {total} $</div>
                    </div>
                    <div className="navigation">
                        <Navigation/>
                    </div>
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

export default connect(mapStateToProps)(Home);