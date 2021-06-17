import React, {useState} from 'react';
import './register.scss';
import firebase, {db} from '../../firebase.config';
import {Link} from 'react-router-dom';
import basePath from '../../assets/basePath';

const Register = props => {

    const [regState, setRegState] = useState({
        name: '',
        email: '',
        tel: '',
        password: '',
        password2: '',
        error: '',
        success: ''
    });

    const handleChange = e => {
        setRegState(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    };

    const handleSubmit = e => {
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(regState.email, regState.password)  
        .then( () =>  firebase.auth().currentUser.sendEmailVerification()
                        .then(() => setRegState(state => ({
                            ...state,
                            success: 'Please check your email and confirm your registration'
                        })))
                        .catch(err => setRegState(state => ({
                            ...state,
                            error: err.message
                        })))) 
        .then( () => setRegState(state => ({
            ...state,
            name: '',
            email: '',
            password: '',
            password2: '',
            tel: ''
        })))
        .then( () => console.log('mail sent!'))
        .then(() => firebase.auth().currentUser.updateProfile({
            displayName: regState.name
        }))
        .then( () => console.log('Name updated!'))
        .then( () => db.collection('users').doc(firebase.auth().currentUser.uid).set({
            name: regState.name,
            tel: regState.tel,
            email: regState.email
        }))
        .then( () => console.log('User doc created!'))
        .catch(err => setRegState(state => ({
            ...state,
            error: err.message
        })));
    }

    return(
        <section className="reg wrapper">
            <form className="reg form" onSubmit={handleSubmit}>
                <h2 className="reg_title">Enter your data to register:</h2>
                <div className="successMess">{regState.success ? regState.success : null}</div>
                <div className="reg form-field">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" placeholder="Enter your name" value={regState.name} onChange={e => handleChange(e)} />
                </div>
                <div className="reg form-field">
                    <label htmlFor="tel">Name: </label>
                    <input type="text" name="tel" placeholder="+34xxxxxxxxx" value={regState.tel} onChange={e => handleChange(e)} />
                </div>
                <div className="reg form-field">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" placeholder="Enter your email" value={regState.email} onChange={e => handleChange(e)} />
                </div>
                <div className="reg form-field">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" placeholder="Enter your password" value={regState.password} onChange={e => handleChange(e)} /> 
                </div>
                <div className="reg form-field repeat">
                    <label htmlFor="password2">Repeat password: </label>
                    <input type="password" name="password2" placeholder="Repeat your password" value={regState.password2} onChange={e => handleChange(e)} /> 
                </div>
                <div className="errMess">{regState.error ? regState.error : null}</div>
                
                <input type="submit" className="login_btn" />
            </form>
            <div>
                Already have an account? Sign in <Link to={`${basePath}/login`}>here</Link>.
            </div>
        </section>
    )
}

export default Register;