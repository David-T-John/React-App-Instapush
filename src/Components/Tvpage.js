import React from 'react';
import '../css/tvpage.css';
import Video from './Video';
import { NavLink } from 'react-router-dom';
import TvNav from './TvNav'
class Tvpage extends React.Component{
    constructor(props){
        super(props);
        this.state={}
        
    }
    componentDidMount(){
        return(console.log('Tvpage Component Did Mount.'))
    }
    componentWillUnmount(){
        return(console.log('Tvpage Component Did Unmount.'))

    }
    render(){
        return(
            <div id="tvWrap">
                <TvNav />
                <NavLink to="/post_2"><Video videoURL="http://techslides.com/demos/sample-videos/small.mp4" /></NavLink>
                <NavLink to="/post_2"><Video videoURL="http://techslides.com/demos/sample-videos/small.mp4" /></NavLink>
                <NavLink to="/post_2"><Video videoURL="http://techslides.com/demos/sample-videos/small.mp4" /></NavLink>
                <NavLink to="/post_2"><Video videoURL="http://techslides.com/demos/sample-videos/small.mp4" /></NavLink>
                <NavLink to="/post_2"><Video videoURL="http://techslides.com/demos/sample-videos/small.mp4" /></NavLink>
                <NavLink to="/post_2"><Video videoURL="http://techslides.com/demos/sample-videos/small.mp4" /></NavLink>
                <NavLink to="/post_2"><Video videoURL="http://techslides.com/demos/sample-videos/small.mp4" /></NavLink>
                <NavLink to="/post_2"><Video videoURL="http://techslides.com/demos/sample-videos/small.mp4" /></NavLink>
                <NavLink to="/post_2"><Video videoURL="http://techslides.com/demos/sample-videos/small.mp4" /></NavLink>
                <NavLink to="/post_2"><Video videoURL="http://techslides.com/demos/sample-videos/small.mp4" /></NavLink>
                

                
            </div>
        )
    }

}
export default Tvpage;