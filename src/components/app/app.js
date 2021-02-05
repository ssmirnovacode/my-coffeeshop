import React from 'react';
import Home from '../home/home';
import HomePage from '../pages/homePage';
import Footer from '../footer/footer';
import ItemDetail from '../item-detail/item-detail';
import Cart from '../cart/cart';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import basePath from '../../services/basePath';
import './app.scss';

const App = () => {

    return (
        <Router> 
            <div className="app_container">      
                <Home/>  
                <Route path={`${basePath}/`} exact component={HomePage}/>                                               
                <Route path={`${basePath}/cart`} component={Cart}/>
                <Route path={`${basePath}/item-detail/:id`} render={ ({match}) => {
                    const {id} = match.params;
                    return <ItemDetail itemId={id}/>
                }}/>
                
                <Footer/>
            </div> 
        </Router>
    )
}

export default App;