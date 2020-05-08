import React from 'react';
import firebase from '../../firebase';
import {Link} from 'react-router-dom';

import '../../css/boilerplate.css';
import '../../css/Untitled-2.css';
import '../../css/bootstrap.css';
import '../../css/style.css';
import '../../css/styles_co.css'
import '../../css/SpryAccordion.css';
import '../Home/Home.css';

class Section extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            sections: []
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.name !== '') {
            const sectionRef = firebase.database().ref('Users/' + firebase.auth().currentUser.displayName + '/Section');
            const section = {
                name: this.state.name,
                availability: 'null',
                time: 'null'
            }

            sectionRef.push(section);
            this.setState({name: ''});
        }
    }

    componentDidMount() {
        const sectionRef = firebase.database().ref('Users');///' + firebase.auth().currentUser.displayName + '/Section');
        sectionRef.on('value', snapshot => {
            const getUsers = snapshot.val();
            let sectionList = [];

            for (let user in getUsers) {
                for (let section in getUsers[user]) {
                    for (let sectionID in getUsers[user][section]) {
                        console.log(getUsers[user][section][sectionID]);
                        if (getUsers[user][section][sectionID].name !== '') {
                            sectionList.push({
                                name: getUsers[user][section][sectionID].name,
                                availability: getUsers[user][section][sectionID].availability,
                                time: getUsers[user][section][sectionID].time
                            });
                        }
                    }
                }
            }

            this.setState({sections: sectionList.reverse()});
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
                        {section}
                    </div>
                    <form className="create-section" onSubmit={this.handleSubmit}>
                        <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange}
                               placeholder='Leave a message...'/>
                    </form>
                </ul>
            </div>
        );
    }
}

export default Section;