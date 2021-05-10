import React, {useState, useEffect, useMemo} from 'react';
import './combo.scss';
import Heading from '../heading/heading';
import ComboItem from '../combo-item/combo-item';
import {connect} from 'react-redux';
import { combosLoaded, combosError, combosRequested } from '../../redux/actions/combosAC';
import {addToCart} from '../../redux/actions/cartAC';
import Loading from '../loading/loading';
import Error from '../error/error';
import firebase from '../../firebase.config';

const Combo = (props) => {

    const [localState, setLocalState] = useState({
        items: [],
        loading: true,
        error: false
    });

    const itemRef = useMemo( () => firebase.database().ref('combos'), []); // useMemo to add here

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

    /* componentDidMount() {
        this.props.combosRequested();

        const itemRef = firebase.database().ref('combos');
        itemRef.on('value', (snapshot) => {
            const items = snapshot.val();
            if (items) {
                const itemList = [];
                for (let id in items) {
                    itemList.push({ id, ...items[id] });
                };
                this.props.combosLoaded(itemList);
            }
            else {
                this.props.combosError();
                console.log(this.props.error);
            }
        });
    } */

    //const {combos, loading, error} = this.props;

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
            <section>
                <Heading small={'Our artesan pastry'} big={'ORGANIC INGREDIENTS ONLY'} id="combo"/>
                <div className="combo_container">
                    <div className="bg-combo"></div>
                    {
                        localState.items.map(item => {
                            return(
                                <ComboItem key={item.id} item={item} addToCart={() => this.props.addToCart(item)}/>
                            )
                        })
                    }
                    
                </div>
            </section>
        )
    
}

const mapStateToProps = (state) => {
    return {
        combos: state.combos,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = {
    combosLoaded,
    combosRequested,
    combosError,
    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Combo);