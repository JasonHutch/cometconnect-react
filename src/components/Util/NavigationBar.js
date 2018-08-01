import React, { Component } from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

class NavigationBar extends Component {
    state = { visible: false }

    toggleVisibility = () => this.setState({ visible: !this.state.visible })

    render() {
        const { visible } = this.state
        return (
            <div className="ui secondary  menu">
                <a className="active item">
                    Home
                </a>
                <a className="item">
                    Messages
                </a>
                <a className="item">
                    Friends
                </a>
                <div className="right menu">
                    <div className="item">
                        <div className="ui icon input">
                            <input type="text" placeholder="Search..."></input>
                        </div>
                    </div>
                    <a className="ui item">
                        <Link to="/login"> Login </Link>
                    </a>
                </div>
            </div>
        )
    }
}

export default NavigationBar
