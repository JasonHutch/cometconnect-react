import { Link } from "react-router-dom";
import React, { Component } from 'react'
import NavigationBar from "../../Util/NavigationBar";
import {image} from '../../../learning.jpg'
import header from '../../../components/Util/MainViewHeader/MainViewHeader'
import TutorCard_Recent from "../../Util/TutorCard_Recent";
import TutorView from "../../Util/TutorView";
import styles from '../../../App.css'
import MainViewHeader from "../../Util/MainViewHeader/MainViewHeader";

class HomePage extends Component {
    state = { visible: false }

    render() {
        const { visible } = this.state
        return (
            <div className='homecontainer' style={{styles}}>
                <NavigationBar/>
                <div className="ui divider" style={{paddingTop: 20}}></div>
                <MainViewHeader/>
                <div class="ui divider" style={{paddingTop: 20}}></div>
            </div>
        )
    }
}

export default HomePage
