import avatar from './resume-picture-large.jpg';
import React from 'react';
import '../css/message.css';
import { NavLink } from "react-router-dom";
class Message extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:"david",
            messageContent:"Hello world. This is a direct message from David.😃🖖",
            timestamp:Date()
        }
    }
    render(){
        return(
            <div id="messageWrap">
                <NavLink to="/account">
                    <div className="friend">
                        <img src={avatar} className="avatar" alt=""></img>
                        <h6 className="username">{this.state.username}</h6>
                        
                    </div>
                </NavLink>
                <h6>{this.state.timestamp}</h6>
                <p className="messageContent">{this.state.messageContent}</p>
            </div>
        )
    }
}
export default Message;