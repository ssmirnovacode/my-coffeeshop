import React, {useState} from 'react';
import './profile.scss';
import firebase from '../../firebase.config';

const Profile = props => {

    const user = firebase.auth().currentUser;

    const [message, setMessage] = useState('');

    const updateEmail = () => {
        const newEmail = prompt('Enter new email. You will have to sign in again with the email indicated.');
        newEmail && user.updateEmail(newEmail)
        .then( () => firebase.auth().signOut())
        .catch(err => console.error(err.message));
    }

    const updatePassword = () => {
        const newPassword = prompt('Enter new password. You will have to sign in again with new password.');
        newPassword && user.updatePassword(newPassword)
        .then( () => firebase.auth().signOut())
        .catch(err => console.error(err.message));
    }

    return(
        <section>

            <div className="profile_info container">
                <h3 className="profile_info title">Profile information:</h3>
                <div className="profile_info content">
                    <div className="profile_info content-item"> 
                        <div className="profile_info content-item_label" >Name: </div>
                        <div className="profile_info content-item_value" >{user.displayName}</div>
                    </div>
                    <div className="profile_info content-item"> 
                        <div className="profile_info content-item_label" >Email: </div>
                        <div className="profile_info content-item_value" >{user.email}</div>
                        <span className={user.emailVerified ? "verified" : "not-verified"}>{user.emailVerified ? 'verified' : 'not verified'}</span>
                    </div>
                    <div className="profile_info content-item"> 
                        {/* <div className="profile_info content-item_label" >Password: </div> */}
                        <div className="profile_info content-item_btn" onClick={updatePassword} >Update password</div>
                        <div className="profile_info content-item_btn" onClick={updateEmail} >Update email</div>
                    </div>
                </div>
                <div className="profile_info messages">{message}</div>
            </div>

            <div className="profile_orders">Orders</div>

        </section>
        
    )
}

export default Profile;