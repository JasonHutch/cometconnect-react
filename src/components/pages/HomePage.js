import { Link } from "react-router-dom";
import React, { Component } from 'react'
import NavigationBar from "../Util/NavigationBar";
import TutorCard_Recent from "../TutorCard_Recent";

class HomePage extends Component {
    state = { visible: false }

    render() {
        const { visible } = this.state
        return (
            <div>
                <NavigationBar style={{paddingBottom: 0}}/>
                <div class="ui divider" style={{paddingTop: 0}}></div>
                <TutorCard_Recent/>
            </div>
        )
    }
}

export default HomePage
