import React, {useEffect} from 'react';
import './combo.scss';
import Heading from '../heading/heading';
import ComboItem from '../combo-item/combo-item';
import {connect, useDispatch} from 'react-redux';
import { combosRequested  } from '../../redux/actions/combosAC';
import {addToCart} from '../../redux/actions/cartAC';
import Loading from '../loading/loading';
import Error from '../error/error';

const Combo = props => {

    const {combos, combosRequested, addToCart} = props;
    const dispatch = useDispatch();

    /* useEffect(() => {
        dispatch(combosRequested());
    }, [combosRequested, dispatch]); */

    const {items, loading, error} = combos;

    return(
        <section>
            <Heading small={'Our artesan pastry'} big={'ORGANIC INGREDIENTS ONLY'} id="combo"/>
            {
                loading ? <Loading /> : error ? <Error text='The database does not respond. Please try again later' /> :
                    <div className="combo_container">
                        <div className="bg-combo"></div>
                        {
                            items.map(item => {
                                return(
                                    <ComboItem key={item.id} item={item} addToCart={() => addToCart(item)}/>
                                )
                            })
                        }
                    </div>
                } 
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        combos: state.combos
    }
}

const mapDispatchToProps = {
    combosRequested,
    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Combo);