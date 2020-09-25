import React from 'react';
import '../css/gridPostVideo.css';
import { NavLink } from 'react-router-dom';
class GridPostVideo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            videoURL:'http://techslides.com/demos/sample-videos/small.mp4'
        }
    }
    render(){
        return(
            <NavLink to="/post_2">
                <i className="fa fa-video" id="videoIcon"></i>
                <video className="gridPost video" src={this.state.videoURL} alt="">
                    <source typ="video/mp4" autoPlay loop></source>
                </video>
            </NavLink>
        )
    }
}

export default GridPostVideo;