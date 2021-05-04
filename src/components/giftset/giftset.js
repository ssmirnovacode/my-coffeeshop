import React, {Component} from 'react';
import './giftset.scss';
import Heading from  '../heading/heading';
import GiftsetItem from '../giftset-item/giftset-item';
import {connect} from 'react-redux';
import { giftsetLoaded, giftsetError, giftsetRequested, giftsetTabClick } from '../../redux/actions/giftset';
import {addToCart} from '../../redux/actions/cartAC';
import Loading from '../loading/loading';
import Error from '../error/error';
import firebase from '../../firebase.config';

class Giftset extends Component {

    componentDidMount() {
        this.props.giftsetRequested();

        const itemRef = firebase.database().ref('giftset');
        itemRef.on('value', (snapshot) => {
        const items = snapshot.val();
        const itemList = [];
        for (let id in items) {
            itemList.push({ id, ...items[id] });
        }
        this.props.giftsetLoaded(itemList);
        }, (err) => {this.props.giftsetError(err)});

    }
    
    render() {
        const {giftset, loading, error} = this.props;

        if (loading) {
            return(
                <Loading/>
            )
        }

        else if (error) {
            return (
                <Error/>
            )
        }

        return(
            <section>
                <Heading small={'Best Gift For Best Friend'} big={'GIFTSET'} id="giftset"/>
                <div className="giftset_container">
                    <div className="bg-giftset"></div>
                    {
                        giftset.items.map(item => {

                            if (item.id === giftset.activeItemId) {
                                return(
                                    <GiftsetItem key={item.id} item={item} addToCart={() => this.props.addToCart(item)}/>
                                )         
                            }
                            else return null;
                                             
                        })
                    }
                    <div className="giftset_tabs">
                        {
                            giftset.items.map((item,i ) => {
                                return (
                                <div className={giftset.activeItemId === item.id ? "giftset_tabs_item active" : "giftset_tabs_item"} key={item.id} 
                                        onClick={(e) =>{
                                            this.props.giftsetTabClick(item.id);
                                        }}>{i+1}</div>
                                        )
                            })
                        }
                        
                    </div>
                </div>
            </section>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        giftset: state.giftset,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = {
    giftsetLoaded,
    giftsetRequested,
    giftsetError,
    giftsetTabClick,
    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Giftset);