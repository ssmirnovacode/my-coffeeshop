import React, {useEffect} from 'react';
import './beverages.scss';
import BeverageItem from '../beverage-item/beverage-item';
import Heading from '../heading/heading';
import {connect} from 'react-redux';
import { beveragesLoaded, beveragesError, beveragesRequested } from '../../redux/actions/beveragesAC';
import Loading from '../loading/loading';
import Error from '../error/error';
import { db } from '../../firebase.config';
import {firebaseLoop} from '../../services/tools';

const Beverages = props => {

    const {beverages, loading, error, beveragesError, beveragesLoaded, beveragesRequested} = props;

    useEffect( () => {
        let mounted = true;
        beveragesRequested();
        mounted && db.collection('beverages').get()
        .then(snapshot => {
            firebaseLoop(snapshot).length > 0 ? beveragesLoaded(firebaseLoop(snapshot)) :
            beveragesError();
        })
        .catch( err => console.error(err.message));
        return () => mounted = false;
    }, [beveragesRequested, beveragesError, beveragesLoaded]);

    return (
        <section>
            <Heading small={'Your Personalized Coffee'} big={'COFFEE BUILD YOUR BASE'} id="beverages"/>
            {
                loading ? <Loading /> : error ? <Error text='The database does not respond. Please try again later' /> :
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