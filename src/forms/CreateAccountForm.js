import * as firebase from 'firebase';
import React from 'react';
import styles from '../forms/FormStyles.css';
import {Form, Button} from 'semantic-ui-react';

class CreateAccountForm extends Component() {
    state = {
        data: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            university:"",
            currentClasses:{},
            previousClasses:{}
        }
    };

    onChange = e => this.setState({
        data: {...this.state.data, [e.target.name]: e.target.value}
    });

    onSubmit = () => {
        //create Firebase user here
    }

    render(){
        const {data} = this.state
        return (
            <div className="createAccountContainer">
                <Form onSubmit={this.onSubmit()}>
                    <Form.Field className='firstNameField'>
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type={"string"}
                            id={"firstName"}
                            name={"FirstName"}
                            placeholder={"First Name"}
                            value={data.firstName}
                            onChange={this.onChange}
                        />
                    </Form.Field>
                    <Form.Field className='lastNameField'>
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type={"string"}
                            id={"lastName"}
                            name={"LastName"}
                            placeholder={"Last Name"}
                            value={data.lastName}
                            onChange={this.onChange}
                        />
                    </Form.Field>
                    <Form.Field className='emailField'>
                        <label htmlFor="email">Last Name</label>
                        <input
                            type={"email"}
                            id={"email"}
                            name={"Email"}
                            placeholder={"John.Doe@example.com"}
                            value={data.email}
                            onChange={this.onChange}
                        />
                    </Form.Field>
                    <Form.Field className='passwordField'>
                        <label htmlFor="password">Last Name</label>
                        <input
                            type={"password"}
                            id={"password"}
                            name={"Password"}
                            placeholder={"password"}
                            value={data.password}
                            onChange={this.onChange}
                        />
                    </Form.Field>
                </Form>
            </div>
        )
    }
}

export default CreateAccountForm