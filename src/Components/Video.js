import React from 'react';
import '../css/video.css'

class Video extends React.Component{
    constructor(props){
        super(props);
        this.state={
            postRoute:'/post_2',
            videoURL:this.props.videoURL
        }
    }
    render(){
        return(
            
            <div>
                <video id="postVideo" loop autoPlay muted>
                    <source src={this.props.videoURL} type="video/mp4"></source>
                    <source src={this.props.videoURL} type="video/ogg"></source>
                </video>
            </div>
            

        )
    }
}
export default Video;