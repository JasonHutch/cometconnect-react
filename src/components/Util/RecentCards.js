import React, { Component } from 'react';
import styles from './MainViewHeader.css';
import image from '../../IMG_0410.JPG';
import Image from "semantic-ui-react/dist/es/elements/Image/Image";

class RecentCards extends Component {
    render() {
        return (
            <div className='ui horizontal list'>
                <div className='item'>
                    <div className="ui card">
                        <div className="content">
                            <div className="header">Study Study Study</div>
                            <div className="meta">
                                <a>July 24th, 2018</a>
                            </div>
                            <div className='description'>
                                Study session of CS 1336
                            </div>
                            <br/>
                            <br/>
                            <div>
                                <a className="ui image label">
                                    <img src={image}/>
                                    Joe
                                </a>
                                <a className="ui image label">
                                    <img src={image}/>
                                    Elliot
                                </a>
                                <a className="ui image label">
                                    <img src={image}/>
                                    Stevie
                                </a>
                            </div>
                            <a>+3 Others</a>
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <div className="ui card">
                        <div className="content">
                            <img className="right floated mini ui image" src="/images/avatar/large/elliot.jpg"/>
                            <div className="header">
                                Elliot Fu
                            </div>
                            <div className="meta">
                                Pending Request
                            </div>
                            <div className="description">
                                Elliot requested permission to view your contact details
                            </div>
                        </div>
                        <div className="extra content">
                            <div className="ui two buttons">
                                <div className="ui basic green button">Approve</div>
                                <div className="ui basic red button">Decline</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <div className="ui card">
                        <div className="content">
                            <div className="header">Dan Jackson</div>
                            <div className="meta">
                                <a>Suggested Connection</a>
                                <br/>
                                <div id='userTags' className="small ui orange labels">
                                    <a className="ui label">
                                        Java
                                    </a>
                                    <a className="ui label">
                                        Discrete Math
                                    </a>
                                    <a className="ui label">
                                        Calculus
                                    </a>
                                </div>
                                <a>+4 Others</a>
                                <br/>
                                <div className="ui bottom attached button">
                                    <i className="add icon"/>
                                    Add Friend
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RecentCards
