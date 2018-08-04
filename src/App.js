import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from "./components/pages/HomePage/HomePage";
import LoginPage from "./components/pages/LoginPage";
import styles from "../src/App.css"
import CreateAccountForm from "./forms/CreateAccountForm";

const App = () => (
        <div className='uicontainer' style={{styles}}>
            <Route path="/" exact component={HomePage}/>
            <Route path="/login" exact component={LoginPage}/>
            <Route path="/create" exact component={CreateAccountForm}/>
        </div>

);
export default App;
