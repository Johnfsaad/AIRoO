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
            sections: [{id: 1, name: 1, availability: 1, time: 1}],
            committees: [{id: 1, name: 1, availability: 1, time: 1}],
            chats: [],
            name: ''
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
                committee: this.state.committee,
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
                        id: section,
                        name: getSections[section].name,
                        availability: getSections[section].availability,
                        time: getSections[section].time
                    });
                }
            }
            this.setState({sections: this.state.sections.concat(sectionList.reverse)});
        });
        const committeeRef = firebase.database().ref('Users/' + firebase.auth().currentUser.displayName + '/Committee');
        committeeRef.on('value', snapshot => {
            const getCommittees = snapshot.val();
            let committeeList = [];
            for (let committee in getCommittees) {
                if (getCommittees[committee].name !== '') {
                    committeeList.push({
                        id: committee,
                        name: getCommittees[committee].name,
                        availability: getCommittees[committee].availability,
                        time: getCommittees[committee].time
                    });
                }
            }
            this.setState({committees: this.state.committees.concat(committeeList.reverse)});
        });
    }

    render() {
        return (
            <div className="section-container">
                <ul className='chat-list'>
                    <div>
                        <tr>
                            <td>Name</td>
                            <td>Available</td>
                            <td>Uptime</td>
                        </tr>
                        {this.state.sections.map(section => {
                            return (
                                <tr key={section.id}>
                                    <td>{section.name}</td>
                                    <td>{section.availability}</td>
                                    <td>{section.time}</td>
                                </tr>
                            );
                        })}
                    </div>
                    <form className="new-section" onSubmit={this.handleSubmit}>
                        <label>Choose a committee:</label>
                        {this.state.committees.map(committee => {
                            return (
                                <select id="committees">
                                    <option value={committee.name}></option>
                                </select>
                            );
                        })}
                        <input type="text" id="name" value={this.state.name}
                               onChange={this.handleChange} placeholder='Enter a name...'/>
                        <input type="submit"></input>
                    </form>
                </ul>
            </div>
        );
    }
}

export default Section;