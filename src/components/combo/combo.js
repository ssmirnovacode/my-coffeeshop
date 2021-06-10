import React, {Component} from 'react';
import './combo.scss';
import Heading from '../heading/heading';
import ComboItem from '../combo-item/combo-item';
import {connect} from 'react-redux';
import { combosLoaded, combosError, combosRequested  } from '../../redux/actions/combosAC';
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
            firebaseLoop(snapshot).length > 0 ? this.props.combosLoaded(firebaseLoop(snapshot)) :
            this.props.combosError();
        })
        .catch( err => console.error(err.message));
    }

    render() {

        const {items} = this.props.combos;

        return(
            <section>
                <Heading small={'Our artesan pastry'} big={'ORGANIC INGREDIENTS ONLY'} id="combo"/>
                {
                    this.state.loading ? <Loading /> : this.state.error ? <Error /> :
                        <div className="combo_container">
                            <div className="bg-combo"></div>
                            {
                                items.map(item => {
                                    return(
                                        <ComboItem key={item.id} item={item} addToCart={() => this.props.addToCart(item)}/>
                                    )
                                })
                            }
                        </div>
                    } 
            </section>
        )
    }  
}

const mapStateToProps = (state) => {
    return {
        combos: state.combos
    }
}

const mapDispatchToProps = {
    combosLoaded,
    combosError,
    combosRequested,
    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Combo);