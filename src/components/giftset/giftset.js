import React, {useEffect} from 'react';
import './giftset.scss';
import Heading from  '../heading/heading';
import GiftsetItem from '../giftset-item/giftset-item';
import {connect, useDispatch} from 'react-redux';
import { giftsetTabClick, giftsetRequested } from '../../redux/actions/giftset';
import {addToCart} from '../../redux/actions/cartAC';
import Loading from '../loading/loading';
import Error from '../error/error';

const Giftset = props => {

    const {giftset, giftsetRequested, addToCart, giftsetTabClick} = props;

    /* const dispatch = useDispatch();

    useEffect( () => {
        dispatch(giftsetRequested())
    }, [giftsetRequested, dispatch]); */
    
    const {items, loading, error, activeItemId} = giftset;

    return(
        <section>
            <Heading small={'Best Gift For Best Friend'} big={'GIFTSET'} id="giftset"/>
            {
                loading ? <Loading /> : error ? <Error text='The database does not respond. Please try again later' /> :
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
    giftsetTabClick,
    addToCart, 
    giftsetRequested 
}

export default connect(mapStateToProps, mapDispatchToProps)(Giftset);