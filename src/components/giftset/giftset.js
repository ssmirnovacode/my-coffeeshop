import React, {Component} from 'react';
import './giftset.scss';
import Heading from  '../heading/heading';
import GiftsetItem from '../giftset-item/giftset-item';
import {connect} from 'react-redux';
import { giftsetLoaded, giftsetError, giftsetRequested, giftsetTabClick } from '../../actions/giftset';
import {addToCart, toggleCart} from '../../actions/cartAC';
import {toggleModal} from '../../actions/modal';
import baseURL from '../../services/baseURL';
import RequestService from '../../services/requestService';
import Loading from '../loading/loading';
import Error from '../error/error';

class Giftset extends Component {

    constructor(props) {
        super(props);
        this.showContent = this.showContent.bind(this);
    }

    componentDidMount() {
        this.props.giftsetRequested();

        const requestService = new RequestService();
        requestService.getMenuItems(baseURL+'giftset')
        .then(res => this.props.giftsetLoaded(res))
        .catch( () => this.props.giftsetError());

    }


    showContent(e) {
        //const targetItem = this.props.giftset.filter(item => item.id === targetId)[0];

        //styling active tab
        e.target.parentNode.childNodes.forEach(item => item.classList.remove('active'));
        e.target.classList.add('active');

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
                                    <GiftsetItem key={item.id} item={item} 
                                    toggleModal={this.props.toggleModal}
                                    addToCart={() => this.props.addToCart(item)}
                                    toggleCart={() => this.props.toggleCart()}/>
                                )         
                            }
                                             
                        })
                    }
                    <div className="giftset_tabs">
                        {
                            giftset.items.map((item,i )=> {

                                if (giftset.activeItemId === item.id) {
                                    return (
                                        <div className="giftset_tabs_item active" key={item.id} 
                                        onClick={(e) =>{
                                            this.props.giftsetTabClick(item.id);
                                            this.showContent(e);
                                        }}>{i}</div>
                                    )
                                }
                                else return(
                                    <div className="giftset_tabs_item" key={item.id} 
                                        onClick={(e) =>{
                                            this.props.giftsetTabClick(item.id);
                                            console.log(giftset.activeItemId);
                                            //console.log(item.id);
                                            this.showContent(e);
                                        }}>{i}</div>
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
        error: state.error,
        modal: state.modal
    }
}

const mapDispatchToProps = {
    giftsetLoaded,
    giftsetRequested,
    giftsetError,
    giftsetTabClick,
    toggleModal,
    addToCart,
    toggleCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Giftset);