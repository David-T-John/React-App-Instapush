import React from 'react';
import '../css/story.css';
import avatar from './resume-picture-large.jpg';
class Story extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    componentDidMount(){}
    componentWillUnmount(){}
    render(){
        return(
            <button><img id="avatar"src={avatar} alt=""></img></button>

        )
    }
}
export default Story;