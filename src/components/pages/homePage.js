import React from 'react';
import Beverages from '../beverages/beverages';
import Menu from '../menu/menu';
import Giftset from '../giftset/giftset';
import Combo from '../combo/combo';
import Items from '../items/items';

const HomePage = () => {
    return (
        <>
            <Items type={'beverages'}/>
            <Menu/>
            <Giftset/>
            <Items type={'combos'}/> 
        </>
    )
}

export default HomePage;