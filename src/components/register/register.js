import React, {useState} from 'react';
import './register.scss';
import firebase from '../../firebase.config';
import {Link} from 'react-router-dom';
import basePath from '../../assets/basePath';

const Register = props => {

    const [regState, setRegState] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
        error: 'some shit'
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
        .then( () => console.log('registered!'))
        .then(() => firebase.auth().currentUser.updateProfile({
            displayName: regState.name
        }))
        .then( () => console.log('Name updated!'))
        .catch(err => setRegState(state => ({
            ...state,
            error: err.message
        })));
    }

    return(
        <section className="reg wrapper">
            <form className="reg form" onSubmit={handleSubmit}>
                <h2 className="reg_title">Enter your data to register:</h2>
                <div className="errMess">{regState.error ? regState.error : null}</div>
                
                <div className="reg form-field">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" placeholder="Enter your name" value={regState.name} onChange={e => handleChange(e)} />
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
                
                <input type="submit" className="login_btn" />
            </form>
            <div>
                Already have an account? Sign in <Link to={`${basePath}/login`}>here</Link>.
            </div>
        </section>
    )
}

export default Register;