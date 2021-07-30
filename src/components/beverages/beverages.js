import React, {useEffect} from 'react';
import './beverages.scss';
import BeverageItem from '../beverage-item/beverage-item';
import Heading from '../heading/heading';
import {connect} from 'react-redux';
import { beveragesLoaded, beveragesError, beveragesRequested } from '../../redux/actions/beveragesAC';
import Loading from '../loading/loading';
import Error from '../error/error';
import { getItems } from '../../services/service';


const Beverages = props => {

    const {beverages, loading, error, beveragesError, beveragesLoaded, beveragesRequested} = props;

    useEffect( () => {
        let mounted = true;
        beveragesRequested();
        mounted && getItems('http://localhost:3001/beverages')
        .then(res => {
            res.length > 0 ? beveragesLoaded(res) : beveragesError();
        })
        .catch( err => console.error(err.message));
        return () => mounted = false;
    }, [beveragesRequested, beveragesError, beveragesLoaded]);

    return (
        <section>
            <Heading small={'Your Personalized Coffee'} big={'COFFEE BUILD YOUR BASE'} id="beverages"/>
            {
                loading ? <Loading /> : error ? <Error /> :
                <div className="beverages_container">
                    {
                        beverages.items.map(item => {
                            return(
                                <BeverageItem key={item.id} item={item}/>
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
        beverages: state.beverages
    }
}

const mapDispatchToProps = {
    beveragesLoaded,
    beveragesRequested,
    beveragesError
}

export default connect(mapStateToProps, mapDispatchToProps)(Beverages);