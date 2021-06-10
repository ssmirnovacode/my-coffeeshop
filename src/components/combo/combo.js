import React, {Component} from 'react';
import './combo.scss';
import Heading from '../heading/heading';
import ComboItem from '../combo-item/combo-item';
import {connect} from 'react-redux';
import { combosLoaded  } from '../../redux/actions/combosAC';
import {addToCart} from '../../redux/actions/cartAC';
import Loading from '../loading/loading';
import Error from '../error/error';
import { db } from '../../firebase.config';
import {firebaseLoop} from '../../services/tools';

class Combo extends Component {

    state = {
        items: this.props.combos,
        loading: true,
        error: false
    }

    componentDidMount() {
        db.collection('combos').get()
        .then(snapshot => {
            this.props.combosLoaded(firebaseLoop(snapshot));
            this.setState(state => ({
                items: firebaseLoop(snapshot),
                loading: false,
                error: state.error
            }));
        })
        .catch( err => console.error(err.message));
    }

    render() {

        const {combos} = this.props;

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
    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Combo);