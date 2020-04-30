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
            chats: []
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.name !== '') {
            const sectionRef = firebase.database().ref('Users/' + this.props.user.displayName + '/Section');
            const chat = {
                committee: this.state.committee,
                name: this.state.name,
                availability: 'null',
                time: 'null'
            }

            sectionRef.push(chat);
            this.setState({name: ''});
        }
    }

    componentDidMount() {
        const sectionRef = firebase.database().ref('Users/' + this.props.user.displayName + '/Section');
        sectionRef.on('value', snapshot => {
            const getSections = snapshot.val();
            let sectionList = [];
            for (let section in getSections) {
                if (getSections[section].message !== '') {
                    sectionList.push({
                        id: section,
                        name: getSections[section].name,
                        availability: getSections[section].availability,
                        time: getSections[section].time
                    });
                }
            }
            const sections = sectionList.reverse();
            this.setState({sections});
        });
        const committeeRef = firebase.database().ref('Users/' + this.props.user.displayName + '/Committee');
        committeeRef.on('value', snapshot => {
            const getCommittees = snapshot.val();
            let committeeList = [];
            for (let committee in getCommittees) {
                if (getCommittees[committee].message !== '') {
                    committeeList.push({
                        id: committee,
                        name: getCommittees[committee].name,
                        availability: getCommittees[committee].availability,
                        time: getCommittees[committee].time
                    });
                }
            }
            const committees = committeeList.reverse();
            this.setState({committees});
        });
    }

    render() {
        return (
            <div className="section-container">
                <ul className='chat-list'>
                    {this.state.sections.map(section => {
                        return (
                            <div>
                                <tr>
                                    <td>Name</td>
                                    <td>Available</td>
                                    <td>Uptime</td>
                                </tr>
                                <tr key={section.id}>
                                    <td>{section.name}</td>
                                    <td>{section.availability}</td>
                                    <td>{section.time}</td>
                                </tr>
                            </div>
                        );
                    })}
                    {this.state.committees.map(committee => {
                        return (
                            <form className="new-section" onSubmit={this.handleSubmit}>
                                <label>Choose a committee:</label>
                                <select id="committees">
                                    <option value={this.state.committee}></option>
                                </select>
                                <input type="text" id="name" value={this.state.name}
                                       onChange={this.handleChange} placeholder='Enter a name...'/>
                                <input type="submit"></input>
                            </form>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default Section;