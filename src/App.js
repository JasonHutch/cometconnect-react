import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from "./components/pages/HomePage/HomePage";
import LoginPage from "./components/pages/LoginPage";
import styles from "../src/App.css"

const App = () => (
        <div className='uicontainer' style={{styles}}>
            <Route path="/" extract component={HomePage}/>
            <Route path="/login" extract component={LoginPage}/>
        </div>

);
export default App;
