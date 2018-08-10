import React, {Compnent} from 'react';
import styles from '../src/App.css';
import infoHeader from '../src/infoHeader.jpg';
import aboutPhoto from '../src/edwin-andrade-153753-unsplash.jpg'

class InfoPage extends React.Component {
    render() {
        return (
            <div className='InfoPageContainer' style={{styles}}>
                <div className='infoHeader'>
                    <img className="ui fluid image" src={infoHeader}/>
                </div>
                <div className='infoAbout'>
                    <img className="ui fluid image" src={aboutPhoto}/>
                    <div className='aboutContent'>
                        <p id='aboutUsText'>Comet Connect is a way for students
                        to come together to learn, plan, and succeed more efficiently. As well as
                        create a collaborative university environment that promotes collective problem solving</p>

                    </div>
                </div>
            </div>

        )
    }
}

export default InfoPage