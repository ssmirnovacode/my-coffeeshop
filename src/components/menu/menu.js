import React, {useState, useEffect} from 'react';
import './menu.scss';
import Heading from '../heading/heading';
import MenuItem from '../menu-item/menu-item';
import {connect} from 'react-redux';
import { menuItemsLoaded, menuItemsError, menuItemsRequested} from '../../redux/actions/menu-itemsAC';
import {addToCart} from '../../redux/actions/cartAC';
import Loading from '../loading/loading';
import Error from '../error/error';
import { db } from '../../firebase.config';
import {firebaseLoop} from '../../services/tools';

const Menu = props => {

    const {menuItems, menuItemsError, menuItemsLoaded, menuItemsRequested, addToCart} = props;

    const [isMoreBtnVisible, setMoreBtnVisible] = useState(true);

    useEffect(() => {
        let mounted = true;
        menuItemsRequested();
        mounted && db.collection('menuItems').limit(4).get()
        .then(snapshot => {
            firebaseLoop(snapshot).length > 0 ? menuItemsLoaded(firebaseLoop(snapshot)) :
            menuItemsError();
        })
        .catch( err => console.error(err.message));
        return () => mounted = false;
    }, [menuItemsRequested, menuItemsError, menuItemsLoaded])

    const showMore = () => {
        db.collection('menuItems').get()
        .then(snapshot => {
            if (firebaseLoop(snapshot).length > 4) {
                menuItemsLoaded(firebaseLoop(snapshot)); // showing all menu items
                setMoreBtnVisible(false);
            }
        })
        .catch( err => console.error(err.message));
    }

    const {items, loading, error} = menuItems;

    return(
        <section className="menu">
            <Heading small={'Choose Your Drink'} big={'ORDER ONLINE AND SKIP THE LINE'} id="menu"/>
            {
                loading ? <Loading /> : error ? <Error /> :
                <>
                    <div className="menu_container">
                        <div className="bg-menu"></div>
                        {
                            items.map((item, i) => {                           
                                return (
                                    <MenuItem key={i} item={item} addToCart={() => addToCart(item)}/>
                                )
                            })
                        }                       
                    </div>
                    {
                        isMoreBtnVisible ? <div className="menu_more" onClick={showMore}>VIEW MORE</div> : null
                    }
                </>
            }
        </section>
    )
       
}

const mapStateToProps = (state) => {
    return {
        menuItems: state.menuItems,
    }
}

const mapDispatchToProps = {
    menuItemsLoaded,
    addToCart, 
    menuItemsError, 
    menuItemsRequested
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);