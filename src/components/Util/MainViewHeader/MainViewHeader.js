import React, { Component } from 'react';
import styles from '../MainViewHeader.css';
import image from '../../../IMG_1349.JPG';
import Image from "semantic-ui-react/dist/es/elements/Image/Image";

class MainViewHeader extends Component {
    render() {
        return (
            <div className='mainViewHeader' style={{styles}} id='userLabel'>
                <img id='userImage' className="ui small circular image" src={require('../../../IMG_1349.JPG') }/>
                <h2 className="ui header">Jason Hutchinson</h2>
                <div  id='detailsText' className="ui horizontal bulleted list">
                    <h1 className="item">
                        Software Engineering
                    </h1>
                    <h1 className="item">
                        Senior
                    </h1>
                    <h1 className="item">
                        UT Dallas
                    </h1>
                </div>
                <div id='userTags' className="ui orange labels">
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
                <div id='userStats' className="ui statistics">
                    <div className="statistic">
                        <div className="value">
                            22
                        </div>
                        <div className="label">
                            Connections
                        </div>
                    </div>
                    <div className="statistic">
                        <div className="value">
                            400
                        </div>
                        <div className="label">
                            solutions
                        </div>
                    </div>
                    <div className="statistic">
                        <div className="value">
                            4.68
                        </div>
                        <div className="label">
                            Avg. Solution<br/>
                            rating
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default MainViewHeader
