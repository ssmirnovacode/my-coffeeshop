import React, {Component} from 'react';
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

class Giftset extends Component {

    componentDidMount() {
        this.props.giftsetRequested();
        db.collection('giftset').get()
        .then(snapshot => {
            firebaseLoop(snapshot).length > 0 ? this.props.giftsetLoaded(firebaseLoop(snapshot)) :
            this.props.giftsetError();
        })
        .catch( err => console.error(err.message));

    }
    
    render() {
        const {giftset, loading, error} = this.props;

        return(
            <section>
                <Heading small={'Best Gift For Best Friend'} big={'GIFTSET'} id="giftset"/>
                {
                    loading ? <Loading /> : error ? <Error /> :
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
                }
            </section>
        )
    }  
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