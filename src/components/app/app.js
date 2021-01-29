import React from 'react';
import Home from '../home/home';
import Beverages from '../beverages/beverages';
import Menu from '../menu/menu';
import Giftset from '../giftset/giftset';
import Combo from '../combo/combo';
import Footer from '../footer/footer';
import ItemDetail from '../item-detail/item-detail';
import Cart from '../cart/cart';
import {Route, Switch} from 'react-router-dom';


const App = () => {

    return (
        <>
        <Switch>
            <Home/>
            <Route exact path='/' component={Home}/>            
            <Route path='/beverages' component={Beverages}/>
            <Route path='/menu' component={Menu}/>
            <Route path='/giftset' component={Giftset}/>
            <Route path='/combo' component={Combo}/>
            
        </Switch>
        <ItemDetail/>
        <Cart/>
        <Footer/>
        </>
        
    )
}

export default App;