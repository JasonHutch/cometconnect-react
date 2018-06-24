import React, { Component } from 'react'
import '../../App.css'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

class NavigationBar extends Component {
    state = { visible: false }

    toggleVisibility = () => this.setState({ visible: !this.state.visible })

    render() {
        const { visible } = this.state
        return (
            <div className="ui large horizontal divided list" style={{paddingTop: 20}}>
                <div className="item" style={{paddingRight: 50}}>
                    <div className="content">
                        <div className="header">Home</div>
                    </div>
                </div>
                <div className="item" style={{paddingRight: 50,paddingLeft: 50}}>
                    <div className="content">
                        <div className="header">My Sessions</div>
                    </div>
                </div>
                <div className="item" style={{paddingRight: 50,paddingLeft:50}}>
                    <div className="content">
                        <div className="header">Discover</div>
                    </div>
                </div>
                <div className="item" style={{paddingRight: 50,paddingLeft:50}}>
                    <div className="content">
                        <div className="header">Calendar</div>
                    </div>
                </div>
            </div>

        )
    }
}

export default NavigationBar
