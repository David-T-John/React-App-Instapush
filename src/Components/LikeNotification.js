import React from 'react';
import postImg from './hero-shapes.png';
import userImage from './resume-picture-large.jpg'
import '../css/likenotification.css';
import { NavLink } from 'react-router-dom';

class LikeNotification extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'david',
            likesTotal:10000,
        }
    }
    render(){
        return(
            <div>
                <div id="todaysActivity">
                    <div className="likeNotification">
                        <NavLink to="/account">
                            <img className="avatar" src={userImage} alt=""></img>
                            <span className="username">{this.state.username}</span>
                        </NavLink>
                        <NavLink to="/account"><span > and {this.state.likesTotal} others </span></NavLink>
                        liked your post 
                        <NavLink to="/post"><img className="postThumbnail"src={postImg} alt=""></img></NavLink>
                    </div>
                </div>
            </div>
        )
    }

}
export default LikeNotification;