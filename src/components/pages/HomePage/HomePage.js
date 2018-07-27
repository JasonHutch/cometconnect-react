import { Link } from "react-router-dom";
import React, { Component } from 'react'
import NavigationBar from "../../Util/NavigationBar";
import {image} from '../../../learning.jpg'
import header from '../../../components/Util/MainViewHeader/MainViewHeader'
import TutorCard_Recent from "../../Util/TutorCard_Recent";
import TutorView from "../../Util/TutorView";
import RecentCards from '../../Util/RecentCards';
import styles from '../../../App.css';
import MainViewHeader from "../../Util/MainViewHeader/MainViewHeader";

class HomePage extends Component {
    state = { visible: false }

    render() {
        const { visible } = this.state
        return (
            <div className='homecontainer' style={{styles}}>
                <div id='navBar'>
                    <NavigationBar/>
                </div>
                <div className="ui divider" style={{paddingTop: 20}}></div>
                <MainViewHeader/>
                <div id='bottomDiv' className="ui divider"></div>
                <div id='recentCards'>
                    <RecentCards/>
                </div>
            </div>
        )
    }
}

export default HomePage
