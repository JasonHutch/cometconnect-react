import React from "react";
import LoginForm from "../../forms/LoginForm";
import styles from '../../forms/FormStyles.css';

class LoginPage extends React.Component{
    submit = () => {
    };

    render(){
        return(
            <div className='loginPage' style={styles}>
                <LoginForm submit={this.submit}/>
            </div>
        );
    }
}


export default LoginPage;