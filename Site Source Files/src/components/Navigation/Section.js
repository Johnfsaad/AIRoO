import React from 'react';
import firebase from '../../firebase';
import {Link} from 'react-router-dom';

import '../../css/boilerplate.css';
import '../../css/Untitled-2.css';
import '../../css/bootstrap.css';
import '../../css/style.css';
import '../../css/styles_co.css'
import '../../css/SpryAccordion.css';
import Chatbox from "../Home/Chatbox";

class Section extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            sections: {}
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.name !== '') {
            const sectionRef = firebase.database().ref('Users/' + firebase.auth().currentUser.displayName + '/Section');
            const chat = {
                name: this.state.name,
                availability: 'null',
                time: 'null'
            }

            sectionRef.push(chat);
            this.state.name = '';
        }
    }

    componentDidMount() {
        const sectionRef = firebase.database().ref('Users/' + firebase.auth().currentUser.displayName + '/Section');
        sectionRef.on('value', snapshot => {
            const getSections = snapshot.val();
            let sectionList = [];
            for (let section in getSections) {
                if (getSections[section].name !== '') {
                    sectionList.push({
                        name: getSections[section].name,
                        availability: getSections[section].availability,
                        time: getSections[section].time
                    });
                }
            }
            this.setState({sections: this.state.sections.concat(sectionList.reverse)});
        });
    }

    render() {
        var section = this.state.sections.map(section => {
            return (
                <tr key={section.id}>
                    <td>{section.name}</td>
                    <td>{section.availability}</td>
                    <td>{section.time}</td>
                </tr>
            );
        });
        return (
            <div className="section-container">
                <ul className='chat-list'>
                    <div>
                        <tr>
                            <td>Name</td>
                            <td>Available</td>
                            <td>Uptime</td>
                        </tr>
                        {section.length ? section : <></>}
                    </div>
                    <form className="create-section" onSubmit={this.handleSubmit}>
                        <input type="text" name="sectionName" id="message" value={this.state.name} onChange={this.handleChange} placeholder='Leave a message...' />
                    </form>
                </ul>
            </div>
        );
    }
}

export default Section;