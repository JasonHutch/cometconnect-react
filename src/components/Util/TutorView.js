import React, { Component } from 'react'
import tutor1 from '../../TestTutor2.jpg'
import tutor2 from'../../TestTutor1.JPG'
import tutor3 from'../../TestTutor3.jpg'

class TutorView extends Component {
    render() {
        return (
            <div className="ui divided items">
                <div className="item">
                    <div className="image">
                        <img src={tutor1}></img>
                    </div>
                    <div className="content">
                        <a className="header">Hani Markos</a>
                        <div className="meta">
                            <span className="cinema">Software Engineering</span>
                        </div>
                        <div className="description">
                            <p></p>
                        </div>
                        <div className="extra">
                            <div className="ui right floated primary button">
                                Book
                                <i className="right chevron icon"></i>

                            </div>
                            <div className="ui label">Java</div>
                            <div className="ui label">C++</div>
                            <div className="ui label">CSS</div>
                            <div className="ui label">HTML</div>
                            <div className="ui star rating" data-rating="4"></div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="image">
                        <img src={tutor2}></img>
                    </div>
                    <div className="content">
                        <a className="header">Gerry Bonko</a>
                        <div className="meta">
                            <span className="cinema">Software Engineering</span>
                        </div>
                        <div className="description">
                            <p>Student at UTD studying software engineering </p>
                        </div>
                        <div className="extra">
                            <div className="ui right floated primary button">
                                Book
                                <i className="right chevron icon"></i>
                            </div>
                            <div className="ui label">Java</div>
                            <div className="ui label">C++</div>
                            <div className="ui label">Data Structures</div>
                            <div className="ui label">Software Architecture</div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="image">
                        <img src={tutor3}></img>
                    </div>
                    <div className="content">
                        <a className="header">Dave Blanch</a>
                        <div className="meta">
                            <span className="cinema">Biology</span>
                        </div>
                        <div className="description">
                            <p></p>
                        </div>
                        <div className="extra">
                            <div className="ui right floated primary button">
                                Book
                                <i className="right chevron icon"></i>
                            </div>
                            <div className="ui label">Pathology</div>
                            <div className="ui label">Chemistry</div>
                            <div className="ui label">Note taking</div>
                            <div className="ui star rating" data-rating="4"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
    export default TutorView