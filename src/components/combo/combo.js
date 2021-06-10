import React, {Component} from 'react';
import './combo.scss';
import Heading from '../heading/heading';
import ComboItem from '../combo-item/combo-item';
import {connect} from 'react-redux';
import { combosLoaded, combosError, combosRequested } from '../../redux/actions/combosAC';
import {addToCart} from '../../redux/actions/cartAC';
import Loading from '../loading/loading';
import Error from '../error/error';
import { db } from '../../firebase.config';
import {firebaseLoop} from '../../services/tools';

class Combo extends Component {

    componentDidMount() {
        this.props.combosRequested();

        db.collection('combos').get()
        .then(snapshot => {
            this.props.combosLoaded(firebaseLoop(snapshot));
        })
        .catch( () => this.props.combosError());
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
                <Heading small={'Our artesan pastry'} big={'ORGANIC INGREDIENTS ONLY'} id="combo"/>
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
        error: state.error
    }
}

const mapDispatchToProps = {
    combosLoaded,
    combosRequested,
    combosError,
    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Combo);