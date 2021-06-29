import React, {useState, useEffect} from 'react';
import './profile-orders.scss';
import firebase, {db} from '../../firebase.config';

const ProfileOrders = () => {

    const [orders, setOrders] = useState([]);

    useEffect( () => {
        db.collection('orders').get()
    }, [])

    return(
        <div className="profile_info container">
                <h3 className="profile_info title">Orders history:</h3>
                
                <div className="profile_info content">

                </div>
        </div>
    )
}

export default ProfileOrders;