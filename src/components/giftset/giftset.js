import React, {useEffect} from 'react';
import './giftset.scss';
import Heading from  '../heading/heading';
import GiftsetItem from '../giftset-item/giftset-item';
import {connect} from 'react-redux';
import { giftsetLoaded, giftsetTabClick, giftsetError, giftsetRequested } from '../../redux/actions/giftset';
import {addToCart} from '../../redux/actions/cartAC';
import Loading from '../loading/loading';
import Error from '../error/error';
import { db } from '../../firebase.config';
import {firebaseLoop} from '../../services/tools';

const Giftset = props => {

    const {giftset, giftsetError, giftsetLoaded, giftsetRequested, addToCart, giftsetTabClick} = props;

    useEffect( () => {
        let mounted = true;
        giftsetRequested();
        mounted && db.collection('giftset').get()
        .then(snapshot => {
            firebaseLoop(snapshot).length > 0 ? giftsetLoaded(firebaseLoop(snapshot)) :
            giftsetError();
        })
        .catch( err => console.error(err.message));
        return () => mounted = false;
    }, [giftsetRequested, giftsetLoaded, giftsetError]);
    
    const {items, loading, error, activeItemId} = giftset;

    return(
        <section>
            <Heading small={'Best Gift For Best Friend'} big={'GIFTSET'} id="giftset"/>
            {
                loading ? <Loading /> : error ? <Error /> :
                <div className="giftset_container">
                    <div className="bg-giftset"></div>
                    {
                        items.map(item => {

                            if (item.id === activeItemId) {
                                return(
                                    <GiftsetItem key={item.id} item={item} addToCart={() => addToCart(item)}/>
                                )         
                            }
                            else return null;
                        })
                    }
                    <div className="giftset_tabs">
                        {
                            items.map((item,i ) => {
                                return (
                                <div className={activeItemId === item.id ? "giftset_tabs_item active" : "giftset_tabs_item"} key={item.id} 
                                        onClick={(e) =>{
                                            giftsetTabClick(item.id);
                                        }}>{i+1}</div>
                                )
                            })
                        }
                    </div>
                </div>
            }
        </section>
    )
     
}

const mapStateToProps = (state) => {
    return {
        giftset: state.giftset
    }
}

const mapDispatchToProps = {
    giftsetLoaded,
    giftsetTabClick,
    addToCart, 
    giftsetError, 
    giftsetRequested 
}

export default connect(mapStateToProps, mapDispatchToProps)(Giftset);