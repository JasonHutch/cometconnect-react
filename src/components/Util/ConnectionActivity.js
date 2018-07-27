import React, { Component } from 'react'
import '../../App.css'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

class ConnectionActivity extends Component {
    render() {
        return (
            <div className='ui card'>
                <div className='content'>
                    <h1>My Classes</h1>
                    <div className="ui divider" style={{paddingTop: 20}}></div>
                    <div className="ui relaxed divided list">
                        <div className="item" style={{paddingBottom: 20}}>
                            <i className="large github middle aligned icon"></i>
                            <div className="content">
                                <a className="header">Computer Science 1</a>
                                <div className="description">CS 1337.001</div>
                            </div>
                        </div>
                        <div className="item" style={{paddingBottom: 20}}>
                            <i className="large github middle aligned icon"></i>
                            <div className="content">
                                <a className="header">Intro to Philosophy</a>
                                <div className="description">PHI 2332.002</div>
                            </div>
                        </div>
                        <div className="item" style={{paddingBottom: 20}}>
                            <i className="large github middle aligned icon"></i>
                            <div className="content">
                                <a className="header">Software Engineering</a>
                                <div className="description">SE 2330.003</div>
                            </div>
                        </div>
                        <div className="item" style={{paddingBottom: 20}}>
                            <i className="large github middle aligned icon"></i>
                            <div className="content">
                                <a className="header">State and local Government</a>
                                <div className="description">GOV 2335.001</div>
                            </div>
                        </div>
                        <div className="item" style={{paddingBottom: 20}}>
                            <i className="large github middle aligned icon"></i>
                            <div className="content">
                                <a className="header">Semantic-Org/Semantic-UI</a>
                                <div className="description">Updated 10 mins ago</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ConnectionActivity
