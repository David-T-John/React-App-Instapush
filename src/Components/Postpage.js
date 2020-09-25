import React from 'react';
import SocialCard from './SocialCard';
import '../css/postpage.css'
import avatarImage from './resume-picture-large.jpg'
import post1Media from './hero-shapes.png'
class Postpage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            postMedia:this.props.postMedia

        };
    }
    componentDidMount(e){
        return(console.log('Postpage Compononet Did Mount.'));
    }
    componentWillUnmount(e){
        return(console.log('Postpage Compononet Did Unmount.'));
    }
    render(){
        return(
            <div id="postpage">
                <SocialCard username="david" avatarImage={avatarImage} postMedia={post1Media} likesTotal="333666" commentsTotal="3366" postCaption="#prettycool #explore #instapush"/>
                {/* <VideoCard username="david" avatarImage={avatarImage} postMedia={post1Media} likesTotal="333666" commentsTotal="3366" postCaption="#prettycool #explore #instapush"/> */}
            
            </div>
            
        )
    }
}
export default Postpage;