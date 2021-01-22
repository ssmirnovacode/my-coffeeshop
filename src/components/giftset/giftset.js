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

    componentDidMount() {
        this.props.giftsetRequested();

        const requestService = new RequestService();

        requestService.getMenuItems(baseURL+'giftset')
        //.then(res => console.log(res))
        .then(res => this.props.giftsetLoaded(res))
        .catch( () => this.props.giftsetError());
    }

    render() {

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
                    {
                        giftset.map(item => {
                            return (
                                <GiftsetItem key={item.id} item={item} toggleModal={this.props.toggleModal}/>
                            )
                        })
                    }
                    <div className="giftset_tabs">
                        <div className="giftset_tabs_item active">1</div>
                        <div className="giftset_tabs_item">2</div>
                        <div className="giftset_tabs_item">3</div>
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