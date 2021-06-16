import React, {useState} from 'react';
import './login.scss';
import firebase from '../../firebase.config';
import {Link} from 'react-router-dom';
import basePath from '../../assets/basePath';

const Login = props => {

    const [loginState, setLoginState] = useState({
        email: '',
        password: '',
        error: ''
    });

    const handleChange = e => {
        setLoginState(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    };

    const handleSubmit = e => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(loginState.email, loginState.password)
        .then( () => console.log('singed in!'))
        .catch(err => console.error(err.message));
    }

    return(
        <section className="login wrapper">
            <form className="login form" onSubmit={handleSubmit}>
                <h2 className="login_title">Please log in:</h2>
                <div className="login form-field">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" placeholder="Enter your email" value={loginState.email} onChange={e => handleChange(e)} />
                </div>
                <div className="login form-field">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" placeholder="Enter your email" value={loginState.password} onChange={e => handleChange(e)} /> 
                </div>
                
                <input type="submit" className="login_btn" />
            </form>
            <div>
                Don´t have an account yet? Register <Link to={`${basePath}/register`}>here</Link>.
            </div>
        </section>
    )
}

export default Login;