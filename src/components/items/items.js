import React, {useState, useEffect, useMemo} from 'react';
//import './combo.scss';
import Heading from '../heading/heading';
import ComboItem from '../combo-item/combo-item';
import MenuItem from '../menu-item/menu-item';
import BeverageItem from '../beverage-item/beverage-item';
import {connect} from 'react-redux';
import {addToCart} from '../../redux/actions/cartAC';
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

const Items = (props) => {

    //console.log(props.type);
    const [localState, setLocalState] = useState({
        items: [],
        loading: true,
        error: false
    });

    const itemRef = useMemo( () => firebase.database().ref(props.type), [props.type]); // useMemo to add here

    useEffect( () => {
        itemRef.on('value', (snapshot) => {
            const items = snapshot.val();
            if (items) {
                const itemList = [];
                for (let id in items) {
                    itemList.push({ id, ...items[id] });
                };
                setLocalState({
                    items: itemList,
                    loading: false,
                    error: false
                });
                console.log('Items received from server');
            }
            else {
                setLocalState((localState) => ({
                    items: localState.itemList,
                    loading: false,
                    error: true
                }));
                console.log('Error occured');
            }
        });
    }, [itemRef])

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

        return(
            <ThemeSelector typeOfTheme={props.type}>
            <section>
                <Heading small={'Our artesan pastry'} big={'ORGANIC INGREDIENTS ONLY'} id="combo"/>
                <div className="combo_container">
                    <div className="bg-combo"></div>
                    {
                        localState.items.map((item, i) => {
                            if (props.type === 'menuItems') {
                                return (
                                    <MenuItem key={i} item={item} addToCart={() => this.props.addToCart(item)}/>
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
            </section>
            </ThemeSelector>
        )
    
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = {
    /* combosLoaded,
    combosRequested,
    combosError, */
    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);