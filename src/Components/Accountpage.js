import React from 'react';
import Profile from './Profile';
import GridPost from './GridPost';
import '../css/accountpage.css';
import post1Media from './hero-shapes.png'
import GridPostVideo from './GridPostVideo';
class Accountpage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            postMedia:{post1Media},
            videoURL:'http://techslides.com/demos/sample-videos/small.mp4'
        }
    }
    componentDidMount(e){
        return(console.log('Accountpage Compononet Did Mount'));
    }
    componentWillUnmount(){
        return(console.log('Accountpage Compononet Did Unmount.'));
    }
    render(){
        return(
            <div>
                <Profile />
                <div id="grid">
                <GridPost postMedia={this.state.postMedia} />
                <GridPostVideo  />
                <GridPost postMedia={post1Media} />
                <GridPost postMedia={post1Media} />
                <GridPost postMedia={post1Media} />
                <GridPost postMedia={post1Media} />
                <GridPost postMedia={post1Media} />
                <GridPost postMedia={post1Media} />
                <GridPost postMedia={post1Media} />
                <GridPost postMedia={post1Media} />
                <GridPost postMedia={post1Media} />
                <GridPost postMedia={post1Media} />
                <GridPost postMedia={post1Media} />
                <GridPost postMedia={post1Media} />
                <GridPost postMedia={post1Media} />
                <GridPost postMedia={post1Media} />
                <GridPost postMedia={post1Media} />
                <GridPost postMedia={post1Media} />
                <GridPost postMedia={post1Media} />
                <GridPost postMedia={post1Media} />
                <GridPost postMedia={post1Media} />
                <GridPost postMedia={post1Media} />
                <GridPost postMedia={post1Media} />
                <GridPost postMedia={post1Media} />
                <GridPost postMedia={post1Media} />
                <GridPost postMedia={post1Media} />
                <GridPost postMedia={post1Media} />
                <GridPost postMedia={post1Media} />
                <GridPost postMedia={post1Media} />
                <GridPost postMedia={post1Media} />
                <GridPost postMedia={post1Media} />
                <GridPost postMedia={post1Media} />
                <GridPost postMedia={post1Media} />
                <GridPost postMedia={post1Media} />
                <GridPost postMedia={post1Media} />
                <GridPost postMedia={post1Media} />
                <GridPost postMedia={post1Media} />
                <GridPost postMedia={post1Media} />
                <GridPost postMedia={post1Media} />
                <GridPost postMedia={post1Media} />
                <GridPost postMedia={post1Media} />
                <GridPost postMedia={post1Media} />
                <GridPost postMedia={post1Media} />
                <GridPost postMedia={post1Media} />
                <GridPost postMedia={post1Media} />
                <GridPost postMedia={post1Media} />
                <GridPost postMedia={post1Media} />
                <GridPost postMedia={post1Media} />
                </div>


            </div>

        )
    }
}
export default Accountpage;