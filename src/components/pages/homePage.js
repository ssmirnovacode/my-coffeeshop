import React from 'react';
import Beverages from '../beverages/beverages';
import Menu from '../menu/menu';
import Giftset from '../giftset/giftset';
import Combo from '../combo/combo';

const HomePage = () => {
    return (
        <>
            <Beverages/>
            <Menu/>
            <Giftset/>
            <Combo type={'combos'}/> 
        </>
    )
}

export default HomePage;