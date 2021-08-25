import React, {useEffect} from 'react';
import './combo.scss';
import Heading from '../heading/heading';
import ComboItem from '../combo-item/combo-item';
import {connect, useDispatch} from 'react-redux';
import { combosLoaded, combosError, combosRequested  } from '../../redux/actions/combosAC';
import {addToCart} from '../../redux/actions/cartAC';
import Loading from '../loading/loading';
import Error from '../error/error';
import { getItems, baseApiUrl } from '../../services/service';

const Combo = props => {

    const {combos, combosLoaded, combosRequested, combosError, addToCart} = props;
    const dispatch = useDispatch();

    useEffect(() => {
        /* let mounted = true;
        combosRequested();
        mounted && getItems(`${baseApiUrl}/combos`)
        .then(res => {
            res.length > 0 ? combosLoaded(res) : combosError();
        })
        .catch( err => console.error(err.message));
        return () => mounted = false; */
        dispatch(combosRequested());
    }, []);

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
    combosLoaded,
    combosError,
    combosRequested,
    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Combo);