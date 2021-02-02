import React from 'react';
import Home from '../home/home';
import Beverages from '../beverages/beverages';
import Menu from '../menu/menu';
import Giftset from '../giftset/giftset';
import Combo from '../combo/combo';
import Footer from '../footer/footer';
import ItemDetail from '../item-detail/item-detail';
import Cart from '../cart/cart';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import basePath from '../../services/basePath';

const App = () => {

    return (
        <Router>        
            <Home/>           
            <Route path={`${basePath}/beverages`} component={Beverages}/>
            <Route path={`${basePath}/menu`} component={(Menu)}/>
            <Route path={`${basePath}/giftset`} component={Giftset}/>
            <Route path={`${basePath}/combo`} component={Combo}/>                                          
            <Route path={`${basePath}/cart`} component={Cart}/>
            <ItemDetail/>
            <Footer/>
        </Router>
    )
}

export default App;