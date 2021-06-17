import React from 'react';
import Header from '../header/header';
import HomePage from '../pages/homePage';
import Footer from '../footer/footer';
import ItemDetail from '../item-detail/item-detail';
import Cart from '../cart/cart';
import PlaceOrder from '../place-order/place-order';
import ThankYou from '../thank-you/thank-you';
import Login from '../login/login';
import Register from '../register/register';
import Profile from '../profile/profile';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import basePath from '../../assets/basePath';
import firebase from '../../firebase.config';
import { connect } from 'react-redux';
import { setLoginStatus, setUserId } from '../../redux/actions/loginAC';
import './app.scss';

const App = (props) => {

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            props.setLoginStatus(true);
            props.setUserId(firebase.auth().currentUser.uid);
            console.log('User logged in');
        }
        else {
            props.setLoginStatus(false); 
            console.log('Noone logged in');
        } 
      });

    const handleLogout = () => {
        firebase.auth().signOut()
        //.then( () => props.history.push(`${basePath}/login`))
        .catch(err => console.error(err.message));
    }

    return (
        <Router> 
            <div className="app_container">  
                <div className="app_content">
                    <Header loggedIn={props.loggedIn} handleLogout={handleLogout} cart={props.cart}/>  
                    <Route path={`${basePath}/`} exact component={HomePage}/> 
                    <Route path={`${basePath}/login`} component={Login}/> 
                    <Route path={`${basePath}/register`} component={Register}/>  
                    <Route path={`${basePath}/profile`} /* userId={props.userId}  */component={Profile}/>                                            
                    <Route path={`${basePath}/cart`} component={Cart}/>
                    <Route path={`${basePath}/combos/:id`} render={ ({match}) => {
                        const {id} = match.params;
                        return <ItemDetail page='combos' itemId={id}/>
                    }}/>
                    <Route path={`${basePath}/menuItems/:id`} render={ ({match}) => {
                        const {id} = match.params;
                        return <ItemDetail page='menuItems' itemId={id}/>
                    }}/>
                    <Route path={`${basePath}/giftset/:id`} render={ ({match}) => {
                        const {id} = match.params;
                        return <ItemDetail page='giftset' itemId={id}/>
                    }}/>
                    <Route path={`${basePath}/order`} component={PlaceOrder}/>
                    <Route path={`${basePath}/thank-you`} component={ThankYou}/>
                </div> 
                <Footer/>
            </div> 
        </Router>
    )
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        cart: state.cart,
        userId: state.userId
    }
}

const mapDispatchToProps = {
    setLoginStatus,
    setUserId
}

export default connect(mapStateToProps, mapDispatchToProps)(App);