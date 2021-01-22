import React, {Component} from 'react';
import './combo.scss';
import Heading from '../heading/heading';
import ComboItem from '../combo-item/combo-item';
import {connect} from 'react-redux';
import { combosLoaded, combosError, combosRequested } from '../../actions/combosAC';
import {toggleModal} from '../../actions/modal';
import baseURL from '../../services/baseURL';
import RequestService from '../../services/requestService';

class Combo extends Component {

    componentDidMount() {
        this.props.combosRequested();

        const getService = new RequestService();

        getService.getMenuItems(baseURL+'combos')
        .then(res => this.props.combosLoaded(res))
        .catch( () => this.props.combosError);
    }

    render() {

        const {combos, /* loading, error */} = this.props;

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
                <Heading small={'Your Personalized Coffee'} big={'OUR COMBOS'}/>
                <div className="combo_container">
                    {
                        combos.map(item => {
                            return(
                                <ComboItem key={item.id} item={item} toggleModal={this.props.toggleModal}/>
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
    toggleModal
}

export default connect(mapStateToProps, mapDispatchToProps)(Combo);