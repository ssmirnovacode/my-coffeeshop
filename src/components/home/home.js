import React, {Component} from 'react';
import './home.scss';
import Navigation from '../navigation/navigation';
import cartIcon from '../../img/shopping-cart-solid.svg';
import {connect} from 'react-redux';
import {toggleCart} from '../../actions/cartAC';

class Home extends Component {
    
    render() {
        //console.log(this.props.cart);
        return (
            <div className="home_container">
                <div className="left block">
                    <div className="moto">YOUR <span>PERSONALIZED</span> COFFEE</div>
                </div>
    
                <div className="home-image">
                    
                </div>
    
                <div className="right block">
                    <div className="cart" >
                        <img className="cart_image" src={cartIcon} alt="cart" onClick={this.props.toggleCart}></img>
                        <div className="cart_total">Total: 100 $</div>
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

const mapDispatchToProps = {
    toggleCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);