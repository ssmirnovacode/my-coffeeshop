import React, {Component} from 'react';
import './giftset.scss';
import Heading from  '../heading/heading';
import GiftsetItem from '../giftset-item/giftset-item';
import {connect} from 'react-redux';
import { giftsetLoaded, giftsetError, giftsetRequested } from '../../actions/giftset';
import {addToCart} from '../../actions/cartAC';
import {toggleModal} from '../../actions/modal';
import baseURL from '../../services/baseURL';
import RequestService from '../../services/requestService';
import Loading from '../loading/loading';
import Error from '../error/error';

class Giftset extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeItem: {
                "id": 7,
                "price": "6.00",
                "title": "Chai with espresso",
                "image": "https://d.radikal.ru/d16/2101/11/a47b4e47661d.png",
                "content": "Two packs of tea and a mug. Two packs of tea and a mug.Two packs of tea and a mug."
            }
        }
        this.showContent = this.showContent.bind(this);
    }

    componentDidMount() {
        this.props.giftsetRequested();

        const requestService = new RequestService();
        requestService.getMenuItems(baseURL+'giftset')
        .then(res => this.props.giftsetLoaded(res))
        .catch( () => this.props.giftsetError());

    }


    showContent(e, targetId) {
        const targetItem = this.props.giftset.filter(item => item.id === targetId)[0];
        this.setState({
            activeItem: targetItem
        });
        e.target.parentNode.childNodes.forEach(item => item.classList.remove('active'));
        e.target.classList.add('active');
        //console.log(this.state.activeItem); // somehow previous item here but works ok
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
                     <GiftsetItem item={this.state.activeItem} toggleModal={this.props.toggleModal}
                        addToCart={() => this.props.addToCart(this.state.activeItem)}/>
                    <div className="giftset_tabs">
                        {
                            this.props.giftset.map((item,i )=> {
                                if (item.id === this.state.activeItem.id) {
                                    return(
                                        <div className="giftset_tabs_item active" onClick={(e,id) =>this.showContent(e, item.id)}>{i}</div>
                                    ) 
                                }
                                else return(
                                    <div className="giftset_tabs_item" onClick={(e,id) =>this.showContent(e, item.id)}>{i}</div>
                                )
                            })
                        }
                        {/* <div className="giftset_tabs_item active" onClick={(e, id) => this.showContent(e,7)}>1</div>
                        <div className="giftset_tabs_item" onClick={(e, id) =>this.showContent(e, 8)}>2</div>
                        <div className="giftset_tabs_item" onClick={(e, id) => this.showContent(e, 9)}>3</div> */}
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
    toggleModal,
    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Giftset);