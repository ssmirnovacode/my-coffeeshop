import React, {useEffect} from 'react';
import './giftset.scss';
import Heading from  '../heading/heading';
import GiftsetItem from '../giftset-item/giftset-item';
import {connect, useDispatch} from 'react-redux';
import { giftsetLoaded, giftsetTabClick, giftsetError, giftsetRequested } from '../../redux/actions/giftset';
import {addToCart} from '../../redux/actions/cartAC';
import Loading from '../loading/loading';
import Error from '../error/error';
//import { getItems, baseApiUrl } from '../../services/service';

const Giftset = props => {

    const {giftset, /* giftsetError, giftsetLoaded, */ giftsetRequested, addToCart, giftsetTabClick} = props;

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(giftsetRequested())
        /* let mounted = true;
        giftsetRequested();
        mounted && getItems(`${baseApiUrl}/giftset`)
        .then(res => {
            res.length > 0 ? giftsetLoaded(res) : giftsetError();
        })
        .catch( err => console.error(err.message));
        return () => mounted = false; */
    }, [giftsetRequested, dispatch]);
    
    const {items, loading, error, activeItemId} = giftset;
    console.log(items);

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
    giftsetLoaded,
    giftsetTabClick,
    addToCart, 
    giftsetError, 
    giftsetRequested 
}

export default connect(mapStateToProps, mapDispatchToProps)(Giftset);