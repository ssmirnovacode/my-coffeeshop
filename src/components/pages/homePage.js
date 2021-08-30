import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import Beverages from '../beverages/beverages';
import Menu from '../menu/menu';
import Giftset from '../giftset/giftset';
import Combo from '../combo/combo';

const HomePage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: 'FETCH_ALL_DATA'})
    }, [dispatch])

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