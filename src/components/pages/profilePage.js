import React from 'react';
import ProfileInfo from '../profile-info/profile-info';
import ProfileOrders from '../profile-orders/profile-orders';

const Profile = () => {

    return(
        <section>
            <ProfileInfo />
            <ProfileOrders />
        </section>
    )
}

export default Profile;