import React from 'react';
import '../css/gridPostLarge.css';
import { NavLink } from 'react-router-dom';
class GridPostLargeVid extends React.Component{
    constructor(props){
        super(props);
        this.state={
            postMedia:this.props.postMedia
        }
    }
    render(){
        return(
            <NavLink to="/post">
                <video className="gridPostLarge" id="gridPostVid" loop autoplay>
                    <source src={this.state.postMedia} type="video/mp4"></source>
                </video>
            </NavLink>
        )
    }
}

export default GridPostLargeVid;