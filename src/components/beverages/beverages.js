import React, {useEffect} from 'react';
import './beverages.scss';
import BeverageItem from '../beverage-item/beverage-item';
import Heading from '../heading/heading';
import {connect, useDispatch} from 'react-redux';
import { beveragesLoaded, beveragesError, beveragesRequested } from '../../redux/actions/beveragesAC';
import Loading from '../loading/loading';
import Error from '../error/error';
import { getItems, baseApiUrl } from '../../services/service';


const Beverages = props => {

    const {beverages, loading, error, beveragesError, beveragesLoaded, beveragesRequested} = props;

    const dispatch = useDispatch();

    useEffect( () => {
        //let mounted = true;
        dispatch(beveragesRequested());
        //return () => mounted = false;
    }, []);

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
    beveragesLoaded,
    beveragesRequested,
    beveragesError
}

export default connect(mapStateToProps, mapDispatchToProps)(Beverages);