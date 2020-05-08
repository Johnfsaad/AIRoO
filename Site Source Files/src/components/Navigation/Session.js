import React from 'react';
import firebase from '../../firebase';
import '../Home/Home.css';
import './blocks/customblocks';
import './generator/generator';
import Chatbox from '../Home/Chatbox';

class Session extends React.Component {
    constructor(props) {
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
        if (this.state.message !== '') {
            var temp = this.state.message;
            const chatRef = firebase.database().ref('Section/' + this.props.location.state + '/Chat');
            const chat = {
                message: temp,
                user: this.props.user.displayName,
                timestamp: new Date().getTime()
            }
            chatRef.push(chat);

            function print(str) {
                const chatRef = firebase.database().ref('Section/' + this.props.location.state + '/Chat');
                setTimeout(function (str) {
                    alert(str);
                    const chat = {
                        message: str.substring(str.indexOf("Motion Print") + 12),
                        user: this.props.user.displayName,
                        timestamp: new Date().getTime()
                    }
                    chatRef.push(chat);
                }, 1000);
            }

            function runCode(code) {
                print(temp);
            }

            const codeStore = firebase.database().ref('Code');
            codeStore.on('value', snapshot => {
                const code = snapshot.val();
                runCode(code);
            });

            this.setState({message: ''});
        }
    }

    render() {
        return (
            <div className="session--container">
                {this.props.user &&
                <div className="allow-chat">
                    <form className="send-chat" onSubmit={this.handleSubmit}>
                        <input type="text" name="message" id="message" value={this.state.message}
                               onChange={this.handleChange} onKeyPress={this.keyPress}
                               placeholder='Leave a message...'/>
                    </form>

                    <Chatbox section={this.props.location.state}/>
                </div>
                }
            </div>
        );
    }
}

export default Session;