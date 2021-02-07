import React, {Component} from 'react';
import './combo.scss';
import Heading from '../heading/heading';
import ComboItem from '../combo-item/combo-item';
import {connect} from 'react-redux';
import { combosLoaded, combosError, combosRequested } from '../../actions/combosAC';
import {addToCart} from '../../actions/cartAC';
import baseURL from '../../services/baseURL';
import RequestService from '../../services/requestService';
import Loading from '../loading/loading';
import Error from '../error/error';

class Combo extends Component {

    componentDidMount() {
        this.props.combosRequested();

        const getService = new RequestService();

        getService.getMenuItems(baseURL+'combos')
        .then(res => this.props.combosLoaded(res))
        .catch( () => this.props.combosError);
    }

    render() {

        const {combos, loading, error} = this.props;

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
                <Heading small={'Your Personalized Coffee'} big={'OUR COMBOS'} id="combo"/>
                <div className="combo_container">
                    <div className="bg-combo"></div>
                    {
                        combos.map(item => {
                            return(
                                <ComboItem key={item.id} item={item} addToCart={() => this.props.addToCart(item)}/>
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
        combos: state.combos,
        loading: state.loading,
        error: state.error,
        modal: state.modal
    }
}

const mapDispatchToProps = {
    combosLoaded,
    combosRequested,
    combosError,
    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Combo);