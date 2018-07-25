import React, { Component } from 'react';
import styles from '../MainViewHeader.css';
import image from '../../../IMG_0410.JPG';
import Image from "semantic-ui-react/dist/es/elements/Image/Image";

class MainViewHeader extends Component {

    render() {
        return (
            <div className='mainViewHeader' style={{styles}} id='userLabel'>
                <img id='userImage' className="ui small circular image" src={require('../../../IMG_0410.JPG') }/>
                <h2 className="ui header">Jason Hutchinson</h2>
                <h5 id='detailsText' className="ui header">Software Engineer, Senior, UT Dallas</h5>
                <div className="ui blue labels">
                    <a className="ui label">
                        Java
                    </a>
                    <a className="ui label">
                        Discrete Math
                    </a>
                    <a className="ui label">
                        Calculus
                    </a>
                    <a className="ui label">
                        State Gov
                    </a>
                    <a className="ui label">
                        Digital Systems
                    </a>
                </div>

            </div>
        )
    }
}

export default MainViewHeader
