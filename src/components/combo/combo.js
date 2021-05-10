import React, {useState, useEffect, useMemo} from 'react';
import './combo.scss';
import Heading from '../heading/heading';
import ComboItem from '../combo-item/combo-item';
import {connect} from 'react-redux';
import {addToCart} from '../../redux/actions/cartAC';
import Loading from '../loading/loading';
import Error from '../error/error';
import firebase from '../../firebase.config';

const Combo = (props) => {

    //console.log(props.type);
    const [localState, setLocalState] = useState({
        items: [],
        loading: true,
        error: false
    });

    const itemRef = useMemo( () => firebase.database().ref(props.type), [props.type]); // useMemo makes the difference

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
            <section>
                <Heading small={'Our artesan pastry'} big={'ORGANIC INGREDIENTS ONLY'} id="combo"/>
                <div className="combo_container">
                    <div className="bg-combo"></div>
                    {
                        localState.items.map(item => {
                            return(
                                <ComboItem key={item.id} item={item} addToCart={() => props.addToCart(item)}/>
                            )
                        })
                    }   
                </div>
            </section>
        )
    
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = {

    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Combo);