import React from 'react';
import Header from '../header/header';
import HomePage from '../pages/homePage';
import Footer from '../footer/footer';
import ItemDetail from '../item-detail/item-detail';
import Cart from '../cart/cart';
import PlaceOrder from '../place-order/place-order';
import ThankYou from '../thank-you/thank-you';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import basePath from '../../assets/basePath';
import './app.scss';


const App = () => {

    return (
        <Router> 
            <div className="app_container">  
                <div className="app_content">
                    <Header/>  
                    <Route path={`${basePath}/`} exact component={HomePage}/>                                               
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

export default App;