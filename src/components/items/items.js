import React, {useState, useEffect, useMemo} from 'react';
//import './combo.scss';
import Heading from '../heading/heading';
import ComboItem from '../combo-item/combo-item';
import MenuItem from '../menu-item/menu-item';
import BeverageItem from '../beverage-item/beverage-item';
import {connect} from 'react-redux';
import {addToCart, addToAllItems} from '../../redux/actions/cartAC';
import Loading from '../loading/loading';
import Error from '../error/error';
import firebase from '../../firebase.config';

const ComboTheme = React.lazy(() => import('./combo.scss'));
const MenuTheme = React.lazy(() => import('./menu.scss'));
const BeveragesTheme = React.lazy(() => import('./beverages.scss'));

const ThemeSelector = ({ children }, typeOfTheme) => {
    //const CHOSEN_THEME = localStorage.getItem('TYPE_OF_THEME') || TYPE_OF_THEME.DEFAULT;
    return (
      <>
        <React.Suspense fallback={<></>}>
          {(typeOfTheme === 'combos') && <ComboTheme />}
          {(typeOfTheme === 'menu') && <MenuTheme />}
          {(typeOfTheme === 'beverages') && <BeveragesTheme />}
        </React.Suspense>
        {children}
      </>
    )
}

const comboHeadingProps = {
    id: 'combo',
    small: 'Our artesan pastry',
    big: 'ORGANIC INGREDIENTS ONLY'
};

const menuHeadingProps = {
    id: 'menu',
    small: 'Choose Your Drink',
    big: 'ORDER ONLINE AND SKIP THE LINE'
};

const beveragesHeadingProps = {
    id: 'beverages',
    small: 'Your Personalized Coffee',
    big: 'COFFEE BUILD YOUR BASE'
};

const Items = (props) => {
    console.log(props.allItems)
    //console.log(props.type);
    const [localState, setLocalState] = useState({
        items: [],
        loading: true,
        error: false
    });

    const [isMoreBtnVisible, setMoreBtnVisible] = useState(true);

    const showMore = () => {
        setMoreBtnVisible(false);
    }

    const itemRef = useMemo( () => firebase.database().ref(props.type), [props.type]); // useMemo to add here

    useEffect( () => {
        itemRef.on('value', (snapshot) => {
            const items = snapshot.val();
            if (items) {
                const itemList = [];
                for (let id in items) {
                    itemList.push({ id, ...items[id] });
                };
                props.addToAllItems(itemList);
                setLocalState({
                    items: props.type === 'menuItems' && isMoreBtnVisible ? itemList.slice(0,4) : itemList,
                    loading: false,
                    error: false
                });
                console.log(`${props.type} items received from server`);
            }
            else {
                setLocalState((localState) => ({
                    items: localState.itemList,
                    loading: false,
                    error: true
                }));
                console.log(`${props.type} - ERROR in fetching`);
            }
        });
    }, [itemRef, isMoreBtnVisible])

        if (localState.loading) {
            return(
                <Loading/>
            )
        }

        else if (localState.error) {
            return (
                <Error/>
            )
        }

        const headingProps = props.type === 'combos' ? comboHeadingProps : 
            props.type === 'menuItems' ? menuHeadingProps : beveragesHeadingProps;

        return(
            <ThemeSelector typeOfTheme={props.type}>
            <section>
                <Heading small={headingProps.small} big={headingProps.big} id={headingProps.id}/>
                <div className={`${headingProps.id}_container`}>
                    {
                      props.type === 'combos' ? <div className="bg-combo"></div> :
                      props.type === 'menuItems' ? <div className="bg-menu"></div> : null
                    }
                    
                    {
                        localState.items.map((item) => {
                            if (props.type === 'menuItems') {
                                return (
                                    <MenuItem key={item.id} item={item} addToCart={() => props.addToCart(item)}/>
                                )
                            }
                            else if (props.type === 'beverages') {
                                return(
                                    <BeverageItem key={item.id} item={item}/>
                                )
                            }
                            else return(
                                <ComboItem key={item.id} item={item} addToCart={() => props.addToCart(item)}/>
                            )
                        })
                    }   
                </div>
                {
                   props.type === 'menuItems' && isMoreBtnVisible ? <div className="menu_more" onClick={showMore}>VIEW MORE</div> : null
                }
            </section>
            </ThemeSelector>
        )
    
}

const mapStateToProps = (state) => {
    return {
        allItems: state.allItems
    }
}

const mapDispatchToProps = {
    /* combosLoaded,
    combosRequested,
    combosError, */
    addToCart,
    addToAllItems
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);