import * as firebase from 'firebase';
import React from 'react';
import {Button, Form} from 'semantic-ui-react';
import {DataSnapshot as ref} from "firebase";

let database = firebase.database();
var admin = require("firebase-admin");
//var childDB = admin.database();
var childRef = database.ref('users');

class CreateAccountForm extends React.Component {
   state = {
       data: {
           userID: "null",
           firstName: "null",
           lastName: "null",
           email: "null",
           password: "null",
           major: "null",
           classification: "null"
       },
       loading: false,
       errors: {}
   }

   onChange = e => this.setState({ data: {...this.state.data, [e.target.name]: e.target.value}})

    onSubmit=()=> {

        firebase.auth().createUserWithEmailAndPassword(this.state.data.email, this.state.data.password).catch(function(error) {

        });

        firebase.auth().signInAndRetrieveDataWithEmailAndPassword(this.state.data.email, this.state.data.password).catch(function(error){

        });

        function getUserID(user) {
            if (user != null) {
                console.log("get User ID called");
                return user.uid;
            }else {
                return null;
            }
        }

        function writeUserData(userID, firstName,lastName, email, password, major, classification) {
            childRef.child('users').set({
                userID: {
                    name: firstName + " " + lastName,
                    email: email,
                    password: password,
                    major: major,
                    classification: classification
                }
            });
        }

        console.log(database.currentUser);

        writeUserData(getUserID(firebase.auth().currentUser), this.state.data.firstName, this.state.data.lastName, this.state.data.email, this.state.data.password, this.state.data.major, this.state.data.classification)
    }


    render() {
        return (
            <div className='createAccountContainer'>
                <div className='generalInfo'>
                    <Form onSubmit={this.onSubmit()}>
                        <div class="two fields">
                            <Form.Field>
                                <label htmlFor="firstName">First Name</label>
                                <input type='text' id='firstName' name='firstName' placeholder='example'
                                       value={this.state.firstName} onChange={this.onChange}/>
                            </Form.Field>
                            <Form.Field>
                                <label htmlFor="lastName">Last Name</label>
                                <input type='text' id='lastName' name='lastName' placeholder='example'
                                       value={this.state.lastName} onChange={this.onChange}/>
                            </Form.Field>
                        </div>
                        <div className="two fields">
                            <Form.Field>
                                <label htmlFor="major">Major</label>
                                <input type='text' id='major' name='major' placeholder='example'
                                       value={this.state.major} onChange={this.onChange}/>
                            </Form.Field>
                            <Form.Field>
                                <label htmlFor="class">Classification</label>
                                <input type='text' id='class' name='class' placeholder='class'
                                       value={this.state.class} onChange={this.onChange}/>
                            </Form.Field>
                        </div>
                <Form.Field>
                    <label htmlFor="email">Email</label>
                    <input type='email' id='email' name='email' placeholder='example' value={this.state.email}
                           onChange={this.onChange}/>
                </Form.Field>
                <Form.Field>
                    <label htmlFor="password">Password</label>
                    <input type='password' id='password' name='password' placeholder='example'
                           value={this.state.password} onChange={this.onChange}/>
                </Form.Field>
                <Form.Field>
                    <label>University</label>
                    <select className='ui fluid dropdown'>
                        <option value='The University of Texas At Dallas'>Univ. Texas at Dallas</option>
                        <option value='The University of North Texas'>Univ. North Texas</option>
                        <option value='Southern Methodist University'>Southern Methodist University</option>
                    </select>
                </Form.Field>
                <Button primary>Create Account</Button>
                    </Form>
                </div>
            </div>
        );
    }
}



export default CreateAccountForm