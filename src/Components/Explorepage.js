import React from 'react';
import '../css/explorepage.css'
import GridPost from './GridPost';

import Video from './Video';
import { NavLink } from 'react-router-dom'
import post1Media from './hero-shapes.png'
import ExploreNav from './ExploreNav';

class Explorepage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            videoURL:'http://techslides.com/demos/sample-videos/small.mp4'
        }
    }
    componentDidMount(e){
        return(console.log('Explorepage Compononet Did Mount'));
    }
    componentWillUnmount(e){
        return(console.log('Explorepage Compononet Did Unmount.'));
    }
    render(){
        return(
            <div id="explorepage">
                <ExploreNav />
                <GridPost postMedia={post1Media}/>
                <GridPost postMedia={post1Media}/>
                <GridPost postMedia={post1Media}/>
                <GridPost postMedia={post1Media}/>
                <GridPost postMedia={post1Media}/>
                <GridPost postMedia={post1Media}/>
                <NavLink to="/post_2"><Video videoURL="http://techslides.com/demos/sample-videos/small.mp4" /></NavLink>
                <GridPost postMedia={post1Media}/>
                <GridPost postMedia={post1Media}/>
                <GridPost postMedia={post1Media}/>
                <GridPost postMedia={post1Media}/>
                <GridPost postMedia={post1Media}/>
                <GridPost postMedia={post1Media}/>
                <NavLink to="/post_2"><Video videoURL="http://techslides.com/demos/sample-videos/small.mp4"  /></NavLink>
                <GridPost postMedia={post1Media}/>
                <GridPost postMedia={post1Media}/>
                <GridPost postMedia={post1Media}/>
                <GridPost postMedia={post1Media}/>
                <GridPost postMedia={post1Media}/>
                <GridPost postMedia={post1Media}/>
                <NavLink to="/post_2"><Video videoURL="http://techslides.com/demos/sample-videos/small.mp4" /></NavLink>
                <GridPost postMedia={post1Media}/>
                <GridPost postMedia={post1Media}/>
                <GridPost postMedia={post1Media}/>
                <GridPost postMedia={post1Media}/>
                <GridPost postMedia={post1Media}/>
                <GridPost postMedia={post1Media}/>
                <NavLink to="/post_2"><Video videoURL="http://techslides.com/demos/sample-videos/small.mp4" /></NavLink>
                <GridPost postMedia={post1Media}/>
                <GridPost postMedia={post1Media}/>
                <GridPost postMedia={post1Media}/>
                <GridPost postMedia={post1Media}/>
                <GridPost postMedia={post1Media}/>
                <GridPost postMedia={post1Media}/>
                <NavLink to="/post_2"><Video videoURL="http://techslides.com/demos/sample-videos/small.mp4" /></NavLink>
                <GridPost postMedia={post1Media}/>
                <GridPost postMedia={post1Media}/>
                <GridPost postMedia={post1Media}/>
                <GridPost postMedia={post1Media}/>
                <GridPost postMedia={post1Media}/>
                <GridPost postMedia={post1Media}/>
                <NavLink to="/post_2"><Video videoURL="http://techslides.com/demos/sample-videos/small.mp4" /></NavLink>
                <GridPost postMedia={post1Media}/>
                <GridPost postMedia={post1Media}/>
                <GridPost postMedia={post1Media}/>
                <GridPost postMedia={post1Media}/>
                <GridPost postMedia={post1Media}/>
                <GridPost postMedia={post1Media}/>
                <NavLink to="/post_2"><Video videoURL="http://techslides.com/demos/sample-videos/small.mp4" /></NavLink>
                <GridPost postMedia={post1Media}/>
                <GridPost postMedia={post1Media}/>
                <GridPost postMedia={post1Media}/>
                <GridPost postMedia={post1Media}/>
                <GridPost postMedia={post1Media}/>
                <GridPost postMedia={post1Media}/>
                <NavLink to="/post_2"><Video videoURL="http://techslides.com/demos/sample-videos/small.mp4" /></NavLink>
            </div>
        )
    }
}

export default Explorepage;