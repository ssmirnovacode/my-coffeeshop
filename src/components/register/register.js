import React, {useState} from 'react';
import './register.scss';
import firebase, {db} from '../../firebase.config';
import {Link} from 'react-router-dom';
import basePath from '../../assets/basePath';
import { useFormik } from 'formik';
import validate from '../../services/validate';

const Register = props => {

    const [regState, setRegState] = useState({
        error: '',
        success: ''
    });

    const updateRegState = (type, msg) => {
        type === 'error' ? setRegState({
            success: '',
            error: msg
        }) : setRegState({
            error: '',
            success: msg
        })
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            password2: '',
            tel: ''
        },
        validate,
        onSubmit: (values, { resetForm }) => {
                if (values.password !== values.password2) {
                    updateRegState('error', "Passwords don't match!");
                    return;
                }
                firebase.auth().createUserWithEmailAndPassword(values.email, values.password)  
                .then( () =>  firebase.auth().currentUser.sendEmailVerification() 
                                .then(() => updateRegState('success', 'Please check your email and confirm your registration'))
                                .catch(err => updateRegState('error', err.message))) 
                .then( () => resetForm())
                .then(() => firebase.auth().currentUser.updateProfile({
                    displayName: values.name
                }))
                .then( () => db.collection('users').doc(firebase.auth().currentUser.uid).set({
                    name: values.name,
                    tel: values.tel,
                    email: values.email
                }))
                .then( () => props.history.push(`${basePath}/profile`))
                .catch(err => updateRegState('error', err.message));        
        },
      });

    return(
        <section className="reg wrapper">
            <form className="reg form" onSubmit={formik.handleSubmit}>
                <h2 className="reg_title">Enter your data to register:</h2>
                
                <div className="reg form-field">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" placeholder="Enter your name" value={formik.values.name} onChange={formik.handleChange} />
                </div>
                <div className="errMess mt-0">{formik.errors && formik.errors.name ? formik.errors.name : null}</div>
                <div className="reg form-field repeat">
                    <label htmlFor="tel">Phone number: </label>
                    <input type="text" name="tel" placeholder="+34xxxxxxxxx" value={formik.values.tel} onChange={formik.handleChange} />
                </div>
                <div className="errMess mt-0">{formik.errors && formik.errors.tel ? formik.errors.tel : null}</div>
                <div className="reg form-field">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" placeholder="Enter your email" value={formik.values.email} onChange={formik.handleChange} />
                </div>
                <div className="reg form-field">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" placeholder="Enter your password" value={formik.values.password} onChange={formik.handleChange} /> 
                </div>
                <div className="reg form-field repeat">
                    <label htmlFor="password2">Repeat password: </label>
                    <input type="password" name="password2" placeholder="Repeat your password" value={formik.values.password2} onChange={formik.handleChange} /> 
                </div>
                <div className="errMess">{regState.error ? regState.error : null}</div>
                <div className="successMess">{regState.success ? regState.success : null}</div>
                <input type="submit" className="login_btn" />
            </form>
            <div>
                Already have an account? Sign in <Link to={`${basePath}/login`}>here</Link>.
            </div>
        </section>
    )
}

export default Register;