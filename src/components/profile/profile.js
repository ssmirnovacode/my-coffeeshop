import React, {useState, useEffect} from 'react';
import './profile.scss';
import firebase, {db} from '../../firebase.config';

const Profile = props => {

    const user = firebase.auth().currentUser;

    const [userData, setUserData] = useState({
        name: '',
        tel: '',
        email: ''
    });

    const [message, setMessage] = useState({
        error: '',
        success: ''
    });

    const updateMessage = (type, msg) => {
        type === 'error' ? setMessage({
            success: '',
            error: msg
        }) : setMessage({
            error: '',
            success: msg
        })
    }

    useEffect( () => {
        db.collection('users').doc(user.uid).get()
        .then(snapshot => snapshot.exists ? setUserData({
            name: snapshot.data().name,
            tel: snapshot.data().tel,
            email: snapshot.data().email
        }) : updateMessage('error', 'User does not exist!'))
        .then( () => console.log('Data fetch done'))
        .then( () => console.log(userData))
        .catch(err => updateMessage('error', err.message))
    }, [user.uid]);

    useEffect( () => {
        const timerIdErr = message.error && setTimeout(() => updateMessage('error', ''), 4000);
        const timerIdSuc = message.success && setTimeout(() => updateMessage('success', ''), 4000);
        return () => clearInterval(timerIdErr ? timerIdErr : timerIdSuc);
    }, [message.error, message.success]);

    const updateEmail = () => {
        const newEmail = prompt('Enter new email. You will have to sign in again with the email indicated.');
        newEmail && user.updateEmail(newEmail)
        .then( () => firebase.auth().signOut())
        .then( () => updateMessage('success', 'Email updated successfully. Please log in again.'))
        .catch(err => updateMessage('error', err.message));
    }

    const updatePassword = () => {
        const newPassword = prompt('Enter new password. You will have to sign in again with new password.');
        newPassword && user.updatePassword(newPassword)
        .then( () => firebase.auth().signOut()) 
        .then( () => updateMessage('success', 'Password updated successfully. Please log in again.'))
        .catch(err => updateMessage('error', err.message));
    }

    const updatePhone = () => {
        const newPhone = prompt('Enter your phone number');
        newPhone && db.collection('users').doc(user.uid).set({
            tel: newPhone
        })
        .then( () => updateMessage('success', 'Phone number updated successfully'))
        .catch(err => updateMessage('error', err.message));
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
                        <div className="profile_info content-item_label" >Phone number: </div>
                        <div className="profile_info content-item_value" >{userData.tel ? userData.tel : 'unknown'}</div>
                        
                    </div>
                    <div className="profile_info content-item"> 
                        <div className="profile_info content-item_btn" onClick={updatePassword} >Update password</div>
                        <div className="profile_info content-item_btn" onClick={updateEmail} >Update email</div>
                        <div className="profile_info content-item_btn" onClick={updatePhone} >Update phone number</div>
                    </div>
                </div>
                <div className="profile_info errMess">{message.error}</div>
                <div className="profile_info successMess">{message.success}</div>
            </div>

            <div className="profile_orders">Orders</div>

        </section>
        
    )
}

export default Profile;