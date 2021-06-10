import React, {Component} from 'react';
import './giftset.scss';
import Heading from  '../heading/heading';
import GiftsetItem from '../giftset-item/giftset-item';
import {connect} from 'react-redux';
import { giftsetLoaded, giftsetTabClick } from '../../redux/actions/giftset';
import {addToCart} from '../../redux/actions/cartAC';
import Loading from '../loading/loading';
import Error from '../error/error';
import { db } from '../../firebase.config';
import {firebaseLoop} from '../../services/tools';

class Giftset extends Component {

    state = {
        items: this.props.combos,
        loading: true,
        error: false
    }

    componentDidMount() {
        db.collection('giftset').get()
        .then(snapshot => {
            this.props.giftsetLoaded(firebaseLoop(snapshot));
            this.setState(state => ({
                items: firebaseLoop(snapshot),
                loading: false,
                error: state.error
            }));
        })
        .catch( err => console.error(err.message));

    }
    
    render() {
        const {giftset} = this.props;

        if (this.state.loading) {
            return(
                <Loading/>
            )
        }

        else if (this.state.error) {
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
    giftsetTabClick,
    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Giftset);