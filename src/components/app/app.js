import React from 'react';
import Home from '../home/home';
import Beverages from '../beverages/beverages';
import Menu from '../menu/menu';
import Giftset from '../giftset/giftset';
import Combo from '../combo/combo';
import Footer from '../footer/footer';
import ItemDetail from '../item-detail/item-detail';
import Cart from '../cart/cart';


const App = () => {

    return (
        <>
            <Home/>
            <Cart/>
            <Beverages/>
            <Menu/>
            <Giftset/>
            <Combo/>
            <ItemDetail/>
            <Footer/>
        </>
    )
}

export default App;