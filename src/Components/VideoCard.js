import React from 'react';
import avatarImage from './resume-picture-large.jpg';
import '../css/socialCard.css';
import { NavLink } from 'react-router-dom';
import Video from './Video'
class VideoCard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:this.props.username,
            userImage:this.props.avatarImage,
            postMedia:this.props.postMedia,
            videoURL:'http://techslides.com/demos/sample-videos/small.mp4',
            isLiked:false,
            isBookmarked:false,
            bookmarkClass:"far fa-bookmark",
            likeBtnClass:"fa fa-heart-o",
            commentText:"",
            likes:[],
            postCaption:this.props.postCaption,
            commentsTotal:this.props.commentsTotal,
            likesTotal:this.props.likesTotal,
            comments:[
                {
                    username:"", 
                    comment:"", 
                    likes:"",
                    date:Date(), 
                    replies:[{username:"", comment:"", date:Date(), likes:[]}], 
                }
            ],

        }
        this.handleLikeChange = this.handleLikeChange.bind(this);
        this.handleBookmarkChange = this.handleBookmarkChange.bind(this);
        this.handleCommentChange = this.handleCommentChange.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);

    };
    
    // handleChange = (event) => this.setState({isLiked:true});
    handleLikeChange = (event) => {
        console.log("Handle like change");
        if(this.state.isLiked===false){
            this.setState({
                isLiked:true,
                likeBtnClass:"fa fa-heart",
                likesTotal:333667

            })
        }else{
            this.setState({
                isLiked:false,
                likeBtnClass:"fa fa-heart-o",
                likesTotal:333666

            })
        }

    }
    handleBookmarkChange = (event) => {
        console.log("Handle bookmark change");
        if(this.state.isBookmarked===false){
            this.setState({
                isBookmarked:true,
                bookmarkClass:"fa fa-bookmark",
            })
        }else{
            this.setState({
                isBookmarked:false,
                bookmarkClass:"far fa-bookmark",

            })
        }

    }
    handleCommentChange = (event) => {
        this.setState({
            commentText:event.target.value
        })
        console.log(this.state.commentText);
    }
    handleCommentSubmit = (event) => {
        return(
            <div className="comment">
                <h6>{this.state.username}</h6><p>{event.target.value}</p>
            </div>
            , document.getElementById('commentsContainer'))
    }
    render(){

        return(
            <div id="cardWrapper">
                <table>
                    <tbody>
                        <tr >
                            <td className="postHeader">
                                <NavLink to="/account">
                                    <button id="user"><img src={this.state.userImage} id="avatarMed" alt=""></img>{this.state.username}</button><button className="postDots"><i className="fa fa-ellipsis-h"></i></button>  
                                </NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td><button className="postMedia" id="videoContainer" onClick={ (event) => this.handleLikeChange(event)}><Video videoURL={this.props.videoURL} /></button></td>
                        </tr>
                        <tr>
                            <td>
                                <button className="interactBtn" onClick={ (event) => this.handleLikeChange(event)}><i id="likeIcon" className={this.state.likeBtnClass}></i></button>
                                <button className="interactBtn"><i className="far fa-comment-dots"></i></button>
                                <button className="interactBtn"><i className="far fa-paper-plane"></i></button>
                                <button className="interactBtn"><i onClick={ (event) => this.handleBookmarkChange(event)} className={this.state.bookmarkClass}></i></button>

                            </td>
                        </tr>
                        <tr>
                            <td><button id="likesCount">{this.state.likesTotal + " Likes"}</button></td>
                        </tr>
                        <tr>

                            <td>
                                <div id="postCaption"><NavLink to="/account"><span><h6 className="username">{this.state.username + ' '}</h6></span></NavLink>{this.state.postCaption}<button id="readMore" >Read more</button></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <NavLink to="/post_2"><button id="viewAllComments" >{"View all " + this.state.commentsTotal + " comments"}</button></NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td id="commentsContainer"></td>
                        </tr>
                        <tr>
                            <td><p id="date">{Date().toUpperCase()}</p></td>
                        </tr>
                        
                    </tbody>    
                        
                </table>
                <form id="commentForm" name="commentForm">
                    <div className="postHeader">
                        <NavLink to="/account"><img src={avatarImage} id="avatarMicro"  alt=""></img></NavLink>  
                        <input type="text"placeholder="Leave a comment" id="commentInput" onChange={(event) => this.handleCommentChange(event)}></input><button form="commentForm" type="submit" id="commentPost" onClick={(event) => this.handleCommentSubmit(event)}>Post</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default VideoCard;