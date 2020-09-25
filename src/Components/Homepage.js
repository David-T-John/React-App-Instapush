import React from 'react';
import SocialCard from './SocialCard';
import VideoCard from './VideoCard';
import Stories from './Stories';
import '../css/homepage.css';
import avatarImage from './resume-picture-large.jpg'
import post1Media from './hero-shapes.png'
// import data from '..../database/data.json'

class Homepage extends React.Component{
    componentDidMount(e){
        return(console.log('Homepage Compononet Did Mount'));
    }
    componentWillUnmount(e){
        return(console.log('Homepage Compononet Did Unmount.'));
    }
    render(){
        
        return(
            <div className="homepage">
                <Stories />
                <SocialCard username="david" avatarImage={avatarImage} postMedia={post1Media} likesTotal="333666" commentsTotal="3366" postCaption="#prettycool #explore #instapush"/>
                <VideoCard videoURL="http://techslides.com/demos/sample-videos/small.mp4" username="david" avatarImage={avatarImage} postMedia={post1Media} likesTotal="333666" commentsTotal="3366" postCaption="#prettycool #explore #instapush"/>
                <SocialCard username="david" avatarImage={avatarImage} postMedia={post1Media} likesTotal="333666" commentsTotal="3366" postCaption="#prettycool #explore #instapush"/>
                <VideoCard videoURL="http://techslides.com/demos/sample-videos/small.mp4" username="david" avatarImage={avatarImage} postMedia={post1Media} likesTotal="333666" commentsTotal="3366" postCaption="#prettycool #explore #instapush"/>
                <SocialCard username="david" avatarImage={avatarImage} postMedia={post1Media} likesTotal="333666" commentsTotal="3366" postCaption="#prettycool #explore #instapush"/>
                <VideoCard videoURL="http://techslides.com/demos/sample-videos/small.mp4" username="david" avatarImage={avatarImage} postMedia={post1Media} likesTotal="333666" commentsTotal="3366" postCaption="#prettycool #explore #instapush"/>
                <SocialCard username="david" avatarImage={avatarImage} postMedia={post1Media} likesTotal="333666" commentsTotal="3366" postCaption="#prettycool #explore #instapush"/>
                <VideoCard videoURL="http://techslides.com/demos/sample-videos/small.mp4" username="david" avatarImage={avatarImage} postMedia={post1Media} likesTotal="333666" commentsTotal="3366" postCaption="#prettycool #explore #instapush"/>
                <SocialCard username="david" avatarImage={avatarImage} postMedia={post1Media} likesTotal="333666" commentsTotal="3366" postCaption="#prettycool #explore #instapush"/>
                <SocialCard username="david" avatarImage={avatarImage} postMedia={post1Media} likesTotal="333666" commentsTotal="3366" postCaption="#prettycool #explore #instapush"/>
                <VideoCard videoURL="http://techslides.com/demos/sample-videos/small.mp4" username="david" avatarImage={avatarImage} postMedia={post1Media} likesTotal="333666" commentsTotal="3366" postCaption="#prettycool #explore #instapush"/>
                <SocialCard username="david" avatarImage={avatarImage} postMedia={post1Media} likesTotal="333666" commentsTotal="3366" postCaption="#prettycool #explore #instapush"/>

            </div>
        )
    }
}

export default Homepage;