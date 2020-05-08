import React from 'react';
import firebase from '../../firebase';
import '../Home/Home.css';
import './blocks/customblocks';
import './generator/generator';
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

    keyPress = (event) => {
        if (event.key == 'Enter'){
            function runCode(code){
                try {
                    //alert(event.target.value);
                } catch (e) {}
            }

            const codeStore = firebase.database().ref('Code');
            codeStore.on('value', snapshot => {
                const code = snapshot.val();
                runCode(code);
            });
        }
    }

    render(){
        return(
            <div className="session--container">
                {this.props.user &&
                <div className="allow-chat">
                    <form className="send-chat" onSubmit={this.handleSubmit}>
                        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange} onKeyPress={this.keyPress} placeholder='Leave a message...' />
                    </form>

                    <Chatbox section={this.props.location.state}/>
                </div>
                }
            </div>
        );
    }
}

export default Session;