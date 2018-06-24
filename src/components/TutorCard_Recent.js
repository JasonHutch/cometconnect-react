import React, { Component } from 'react'
import tutor1 from '../TestTutor1.JPG'
import tutor2 from '../TestTutor3.jpg'

class TutorCard_Recent extends Component {
render(){
    return(
    <div className="ui special cards">
        <div className="card">
            <div className="blurring dimmable image">
                <div className="ui dimmer">
                    <div className="content">
                        <div className="center">
                            <div className="ui inverted button">Add Friend</div>
                        </div>
                    </div>
                </div>
                <img src={tutor2}/>
            </div>
            <div className="content">
                <a className="header">Nina Gates</a>
                <div className="meta">
                    <span className="date">Created in Sep 2014</span>
                </div>
            </div>
            <div className="extra content">
                <a>
                    <i className="users icon"></i>
                    2 Members
                </a>
            </div>
        </div>
        <div className="card">
            <div className="blurring dimmable image">
                <div className="ui inverted dimmer">
                    <div className="content">
                        <div className="center">
                            <div className="ui primary button">Add Friend</div>
                        </div>
                    </div>
                </div>
                <img src={tutor1}/>
            </div>
            <div className="content">
                <a className="header">Jason Hutchinson</a>
                <div className="meta">
                    <span className="date">Created in Aug 2014</span>
                </div>
            </div>
            <div className="extra content">
                <a>
                    <i className="users icon"></i>
                    2 Members
                </a>
            </div>
        </div>
    </div>
   )
  }
}
export default TutorCard_Recent