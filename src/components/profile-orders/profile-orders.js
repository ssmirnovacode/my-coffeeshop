import React, {useState, useEffect} from 'react';
import './profile-orders.scss';
import firebase, {db} from '../../firebase.config';
import {firebaseLoop, formatDate} from '../../services/tools';
import Loading from '../loading/loading';
import Error from '../error/error';

const ProfileOrders = (props) => {

    console.log(firebase.auth().currentUser.uid);

    const [ordersState, setOrdersState] = useState({
        orders: [],
        loading: true,
        error: false
    });

    useEffect( () => {
        db.collection('orders')
        .where('userId', '==', firebase.auth().currentUser.uid)
        .get()
        .then(snapshot => {
            firebaseLoop(snapshot).length > 0 ? setOrdersState(ordersState => ({
                ...ordersState,
                orders: firebaseLoop(snapshot),
                loading: false
            })) : setOrdersState(ordersState => ({
                ...ordersState,
                loading: false,
                error: true
            }))
        })
        .catch(err => setOrdersState(ordersState => ({
            ...ordersState,
            loading: false,
            error: true
        })))
    }, [])

    return(
        <div className="profile_info container">
                <h3 className="profile_info title">Orders history:</h3>
                
                <div className="profile_info content">
                    {
                        ordersState.loading ? <Loading /> : ordersState.error ? <Error /> :
                        ordersState.orders.map(item => {
                            return(
                                <div key={item.id} className="profile_info content-item"> 
                                    <div > Order ID: {item.id}</div>
                                    <div>Submitted: {formatDate(item.timestamp)}</div>
                                </div>
                            )
                        })
                    }
                </div>
        </div>
    )
}

export default ProfileOrders;