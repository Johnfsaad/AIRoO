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
            var message = this.state.message;
            var username = this.props.user.displayName;
            const chatRef = firebase.database().ref('Section/' + this.props.location.state + '/Chat');
            const chat = {
                message: message,
                user: username,
                timestamp: new Date().getTime()
            }
            chatRef.push(chat);

            if (message.indexOf("Motion ") == 0) {
                function print() {
                    if (message.indexOf("Motion Print ") == 0) {
                        const print = {
                            message: message.substring(message.indexOf("Motion Print ") + 13),
                            user: username,
                            timestamp: new Date().getTime()
                        }
                        chatRef.push(print);
                    }
                }

                function runCode(code) {
                    try {
                        print();
                    } catch (e) {
                        console.log(e);
                    }
                }

                const codeStore = firebase.database().ref('Code');
                codeStore.on('value', snapshot => {
                    const code = snapshot.val();
                    console.log(code);
                    runCode(code);
                });
            }

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