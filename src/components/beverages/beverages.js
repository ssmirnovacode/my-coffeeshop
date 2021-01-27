import React, {Component} from 'react';
import './beverages.scss';
import BeverageItem from '../beverage-item/beverage-item';
import Heading from '../heading/heading';
import {connect} from 'react-redux';
import { beveragesLoaded, beveragesError, beveragesRequested } from '../../actions/beveragesAC';
import baseURL from '../../services/baseURL';
import RequestService from '../../services/requestService';
import Loading from '../loading/loading';
import Error from '../error/error';

class Beverages extends Component {

    componentDidMount() {
        this.props.beveragesRequested();

        const getService = new RequestService();

        getService.getMenuItems(baseURL+'beverages')
        .then(res => this.props.beveragesLoaded(res))
        .catch(() => this.props.beveragesError());
    }

    render() {

        const {beverages, loading, error} = this.props;

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

        return (
            <section>
                <Heading small={'Your Personalized Coffee'} big={'COFFEE BUILD YOUR BASE'} id="beverages"/>
                <div className="beverages_container">
                    {
                        beverages.map(item => {
                            return(
                                <BeverageItem key={item.id} item={item}/>
                            )
                        })
                    }
                </div>
            </section>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        beverages: state.beverages,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = {
    beveragesLoaded,
    beveragesRequested,
    beveragesError
}

export default connect(mapStateToProps, mapDispatchToProps)(Beverages);