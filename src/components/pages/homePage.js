import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Beverages from '../beverages/beverages';
import Menu from '../menu/menu';
import Giftset from '../giftset/giftset';
import Combo from '../combo/combo';

const HomePage = () => {

    const dispatch = useDispatch();
    
    const state = useSelector(state => state);

    useEffect(() => {
        if (!state.beverages.items.length || !state.combos.items.length || !state.giftset.items.length || !state.menuItems.items.length) {
            dispatch({ type: 'FETCH_ALL_DATA' });
            console.log('fetchAll dispatched')
        }
    }, [])

    return (
        <>
            <Beverages/>
            <Menu/>
            <Giftset/>
            <Combo/> 
        </>
    )
}

export default HomePage;