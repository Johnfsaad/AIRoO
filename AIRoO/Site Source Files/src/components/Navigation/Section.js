import React from 'react';
import firebase from '../../firebase';
import {Link} from 'react-router-dom';

class Section extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message: ''
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();
        if(this.state.message !== ''){
            const chatRef = firebase.database().ref('general');
            const chat = {
                message: this.state.message,
                user: this.props.user.displayName,
                timestamp: new Date().getTime()
            }

            chatRef.push(chat);
            this.setState({message: ''});
        }
    }

    render(){
        return(
            <div className="section-container">
            </div>
        );
    }
}

export default Section;