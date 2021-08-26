import React, {useEffect} from 'react';
import './beverages.scss';
import BeverageItem from '../beverage-item/beverage-item';
import Heading from '../heading/heading';
import {connect, useDispatch} from 'react-redux';
import { beveragesRequested } from '../../redux/actions/beveragesAC';
import Loading from '../loading/loading';
import Error from '../error/error';

const Beverages = props => {

    const {beverages, loading, error, beveragesRequested} = props;

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(beveragesRequested());
    }, [beveragesRequested, dispatch]);

    return (
        <section>
            <Heading small={'Your Personalized Coffee'} big={'COFFEE BUILD YOUR BASE'} id="beverages"/>
            {
                loading ? <Loading /> : error ? <Error /> :
                beverages ?
                <div className="beverages_container">
                    {
                        beverages.items.map(item => {
                            return(
                                <BeverageItem key={item.id} item={item}/>
                            )
                        })
                    }
                </div>
                : null
            } 
        </section>
    ) 
}

const mapStateToProps = (state) => {
    return {
        beverages: state.beverages
    }
}

const mapDispatchToProps = {
    beveragesRequested
}

export default connect(mapStateToProps, mapDispatchToProps)(Beverages);