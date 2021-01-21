import React from 'react';
import Home from '../home/home';
import Beverages from '../beverages/beverages';
import Menu from '../menu/menu';
import GiftSet from '../giftset/giftset';
import Combo from '../combo/combo';
import Footer from '../footer/footer';
import ItemDetail from '../item-detail/item-detail';


const App = () => {

    return (
        <>
            <Home/>
            <Beverages/>
            <Menu/>
            <GiftSet/>
            <Combo/>
            <ItemDetail/>
            <Footer/>
        </>
    )
}

export default App;