import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";

const App = () => (
    <div>
        <Route path="/" extract component={HomePage}/>
        <Route path="/login" extract component={LoginPage}/>
    </div>
);
export default App;
