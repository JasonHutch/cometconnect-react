import * as firebase from 'firebase';
import React, {Component} from 'react';
import styles from '../forms/FormStyles.css';
import {Form, Button} from 'semantic-ui-react';
import addImage from '../addImage.png';

class CreateAccountForm extends Component {
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
            <div className="createAccountContainer" style={{styles}}>
                <Form onSubmit={this.onSubmit()}>
                    <div className='profilePicture'>
                        <img className="ui small circular image" src={addImage}/>
                    </div>
                    <div className='generalInfo'>
                        <div className='two fields'>
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
                        </div>
                        <Form.Field className='emailField'>
                            <label htmlFor="email">Email</label>
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
                            <label htmlFor="password">Password</label>
                            <input
                                type={"password"}
                                id={"password"}
                                name={"Password"}
                                placeholder={"password"}
                                value={data.password}
                                onChange={this.onChange}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>University</label>
                            <select className='ui fluid dropdown'>
                                <option value='The University of Texas At Dallas'>Univ. Texas at Dallas</option>
                                <option value='The University of North Texas'>Univ. North Texas</option>
                                <option value='Southern Methodist University'>Southern Methodist University</option>
                            </select>
                        </Form.Field>
                    </div>
                    <div className='addClassesView'>
                        <div className="ui category search">
                            <div className="ui icon input">
                                <input className="prompt" type="text" placeholder="Search animals..."/>
                                    <i className="search icon"/>
                            </div>
                            <div className="results"></div>
                        </div>
                    </div>
                </Form>
            </div>
        )
    }
}

export default CreateAccountForm