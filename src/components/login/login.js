import React, {useState} from 'react';
import './login.scss';
import firebase from '../../firebase.config';
import {Link} from 'react-router-dom';
import basePath from '../../assets/basePath';
import { connect } from 'react-redux';
import { setLoginStatus } from '../../redux/actions/loginAC';

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
        .then( () => props.setLoginStatus(true))
        .then( () => props.history.push(`${basePath}/`))
        .catch(err => setLoginState(state => ({
            ...state,
            error: err.message
        })));
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
                <div className="errMess">{loginState.error ? loginState.error : null}</div>
                <input type="submit" className="login_btn" />
            </form>
            <div>
                Don´t have an account yet? Register <Link to={`${basePath}/register`}>here</Link>.
            </div>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loginStatus
    }
}

const mapDispatchToProps = {
    setLoginStatus
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);