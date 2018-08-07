import React from 'react';
import PropTypes from 'prop-types';
import {Form, Button} from 'semantic-ui-react';
import validator from "validator";
import InlineError from '../messages/InlineError'
import HomePage from '../components/pages/HomePage/HomePage';
import LoginPage from "../components/pages/LoginPage";
import styles from "../forms/FormStyles.css";
import * as firebase from 'firebase';
import firebaseConfig from '../forms/firebaseConfig.js'

firebaseConfig.auth().onAuthStateChanged(function (user) {
    if (user) {
        <HomePage/>.style.display = 'block';
        <LoginPage/>.style.display = "none";
    } else {
        <LoginPage/>.style.display = "block";
        <HomePage/>.style.display = 'none';
    }
});


class LoginForm extends React.Component {
    state = {
        data: {
            email: "",
            password: ""
        },
        loading: false,
        errors: {}
    };

    onChange = e => this.setState({
        data: {...this.state.data, [e.target.name]: e.target.value}
    });
    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({errors});
        this.props.submit(this.state.data);
        firebase.auth().createUserWithEmailAndPassword(this.state.data.email, this.state.data.password).catch(function (error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;

            window.display(errorMessage, errorCode);
        });
    }

    validate = (data) => {
        const errors = {};
        if (!validator.isEmail(data.email)) errors.email = "invalid email";
        if (!data.password) errors.password = "Can't be blank";
        return errors;
    }

    render() {
        const {data, errors} = this.state;
        return (
           <div className='loginContainer' style={{styles}}>
               <div className='addImage View'>
                   add an image
               </div>
               <div className='formFields'>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Field error={!!errors.email}>
                            <label htmlFor="email">Email</label>
                            <input
                                type={"email"}
                                id={"email"}
                                name={"email"}
                                placeholder={"example@example.com"}
                                value={data.email}
                                onChange={this.onChange}
                            />
                            {errors.email && <InlineError text={errors.email}/>}
                        </Form.Field>
                        <Form.Field error={!!errors.password}>
                            <label htmlFor="password">Password</label>
                            <input
                                type={"password"}
                                id={"password"}
                                name={"password"}
                                placeholder={"Make it secure"}
                                value={data.password}
                                onChange={this.onChange}
                            />
                            {errors.password && <InlineError text={errors.password}/>}
                        </Form.Field>
                        <Button primary>Login</Button>
                    </Form>
               </div>
               <div className='classSelectionSection'>
                   put your classes here
               </div>
           </div>
        );
    }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
}


export default LoginForm