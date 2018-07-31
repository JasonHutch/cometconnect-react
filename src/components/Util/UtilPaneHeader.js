import React from 'react';
import Calendar from 'rc-calendar';
import {Component} from 'react';
import { ResponsiveBubble } from '@nivo/circle-packing'
import data from '../Util/exampleGraphData'

class UtilPaneHeader extends Component {
    render(){
        return(
            <div>
                <div className="ui orange three item inverted menu">
                    <a className="active item">
                        My Connections
                    </a>
                    <a className="item">
                        Calender
                    </a>
                    <a className="item">
                        Messages
                    </a>
                </div>
                <div className='ui card' style={{width: 600, height: 350}}>
                    <ResponsiveBubble
                        root={data}
                        margin={{
                            "top": 20,
                            "right": 20,
                            "bottom": 20,
                            "left": 20
                        }}
                        identity="name"
                        value="loc"
                        colors="nivo"
                        colorBy="depth"
                        padding={6}
                        labelTextColor="inherit:darker(0.8)"
                        borderWidth={2}
                        defs={[
                            {
                                "id": "lines",
                                "type": "patternLines",
                                "background": "none",
                                "color": "inherit",
                                "rotation": -45,
                                "lineWidth": 5,
                                "spacing": 8
                            }
                        ]}
                        fill={[
                            {
                                "match": {
                                    "depth": 1
                                },
                                "id": "lines"
                            }
                        ]}
                        animate={true}
                        motionStiffness={90}
                        motionDamping={12}
                    />
                </div>
            </div>
        )
    }
}

export default UtilPaneHeader