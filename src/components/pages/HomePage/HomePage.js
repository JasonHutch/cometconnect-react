import { Link } from "react-router-dom";
import React, { Component } from 'react'
import NavigationBar from "../../Util/NavigationBar";
import {image} from '../../../learning.jpg'
import header from '../../../components/Util/MainViewHeader/MainViewHeader'
import TutorCard_Recent from "../../Util/TutorCard_Recent";
import TutorView from "../../Util/TutorView";
import RecentCards from '../../Util/RecentCards';
import styles from '../../../App.css';
import ConnectionActivity from '../../../components/Util/ConnectionActivity'
import MainViewHeader from "../../Util/MainViewHeader/MainViewHeader";
import {InfiniteCalendar} from "react-infinite-calendar/umd/react-infinite-calendar";

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
                <br/>
                <br/>
                <div id='myClasses'>
                    <ConnectionActivity/>
                </div>
                <div id='calendar'>
                    <InfiniteCalendar
                        displayOptions={{
                            layout: 'landscape'
                        }}
                        width={600}
                        height={350}
                    />
                </div>
            </div>
        )
    }
}

export default HomePage
