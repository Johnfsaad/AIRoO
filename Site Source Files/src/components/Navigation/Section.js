import React from 'react';
import firebase, {auth, provider} from '../../firebase';
import {BrowserRouter as Router, Route, Link, Switch, withRouter, Redirect} from 'react-router-dom';

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
            const sectionRef = firebase.database().ref('Section');
            const section = {
                name: this.state.name,
                availability: 'N/A',
                time: 'N/A'
            }

            sectionRef.push(section);
            this.setState({name: ''});
        }
    }

    componentDidMount() {
        const sectionRef = firebase.database().ref('Section');///' + firebase.auth().currentUser.displayName + '/Section');
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

            this.setState({sections: sectionList});
        });
    }

    render() {
        var section = this.state.sections.map(section => {
            return (
                <tr key={section.id}>
                    <td>{section.name}</td>
                    <td>{section.availability}</td>
                    <td>{section.time}</td>
                    {console.log(section.id)}
                    <Link
                        to={{
                            pathname: "/session",
                            state: section.id
                        }}>
                        Join Session
                    </Link>
                </tr>
            );
        });
        return (
            <div className="section-container">
                {this.props.user ?
                    <ul className='section-list'>
                        <div>
                            <tr>
                                <td>Name</td>
                                <td>Available</td>
                                <td>Uptime</td>
                            </tr>
                            {section}
                        </div>
                        <form className="create-section" onSubmit={this.handleSubmit}>
                            <input type="text" name="name" id="name" value={this.state.name}
                                   onChange={this.handleChange}
                                   placeholder='New section name'/>
                        </form>
                    </ul>
                    : <Route
                        render={props => <Redirect to={{pathname: '/'}}/>}
                    />
                }
            </div>
        );
    }
}

export default Section;