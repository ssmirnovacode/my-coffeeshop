import React, {Component} from 'react';
import './giftset.scss';
import Heading from  '../heading/heading';
import GiftsetItem from '../giftset-item/giftset-item';
import {connect} from 'react-redux';
import { giftsetLoaded, giftsetError, giftsetRequested } from '../../actions/giftset';
import {toggleModal} from '../../actions/modal';
import baseURL from '../../services/baseURL';
import RequestService from '../../services/requestService';

class Giftset extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeItem: {
                "id": 0,
                "price": "6.00 $",
                "title": "Chai with espresso",
                "image": "https://png.pngtree.com/png-vector/20190529/ourlarge/pngtree-coffee-cup-icon-png-image_1117239.jpg",
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
        /* .then( items => {
            if (this.state.activeItem === null) {
                this.setState({
                    activeItem: items[0]
                });
            }
        }) */
        .catch( () => this.props.giftsetError());

    }


    showContent(targetId) {
        const targetItem = this.props.giftset.filter(item => item.id === targetId)[0];
        console.log(targetItem);
        this.setState({
            activeItem: targetItem
        });
        //console.log(this.state.activeItem); // somehow previous item here but works ok
    }

    
    render() {
        console.log(this.state.activeItem);
        const {giftset, /* loading, error */} = this.props;

        /* if (loading) {
            return(
                <Loading/>
            )
        }

        else if (error) {
            return {
                <Error/>
            }
        } */

        return(
            <section>
                <Heading small={'Best Gift For Best Friend'} big={'GIFTSET'}/>
                <div className="giftset_container">
                     <GiftsetItem item={this.state.activeItem} toggleModal={this.props.toggleModal}/>
                    <div className="giftset_tabs">
                        <div className="giftset_tabs_item active" onClick={() => this.showContent(0)}>1</div>
                        <div className="giftset_tabs_item" onClick={() =>this.showContent(1)}>2</div>
                        <div className="giftset_tabs_item" onClick={() => this.showContent(2)}>3</div>
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
    toggleModal
}

export default connect(mapStateToProps, mapDispatchToProps)(Giftset);