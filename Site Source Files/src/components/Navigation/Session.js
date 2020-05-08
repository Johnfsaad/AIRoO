import React from 'react';
import firebase from '../../firebase';
import {Link} from 'react-router-dom';
import '../Home/Home.css';
import BlocklyJS from 'blockly/javascript';

import Chatbox from '../Home/Chatbox';

class Session extends React.Component{
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
            const chatRef = firebase.database().ref('Section/' + this.props.location.state + '/Chat');
            const chat = {
                message: this.state.message,
                user: this.props.user.displayName,
                timestamp: new Date().getTime()
            }

            chatRef.push(chat);
            this.setState({message: ''});
        }
    }

    componentDidMount() {
        function runCode(code){
            window.loopTRAP=1000;
            BlocklyJS.JavaScript.INFINITE_LOOP_TRAP = 'if(--window.LoopTrap == 0) throw "Infinite loop.";\n';
            try {
                eval(code);
            } catch (e) {}
        }

        const codeStore = firebase.database().ref('Code');
        codeStore.on('value', snapshot => {
            const code = snapshot.val();
            runCode(code);
        });
    }

    render(){
        return(
            <div className="session--container">
                {this.props.user &&
                <div className="allow-chat">
                    <form className="send-chat" onSubmit={this.handleSubmit}>
                        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange} placeholder='Leave a message...' />
                    </form>

                    <Chatbox section={this.props.location.state}/>
                </div>
                }
            </div>
        );
    }
}

export default Session;