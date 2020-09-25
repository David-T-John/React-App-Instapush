import React from 'react';
import '../css/gridPost.css';
import { NavLink } from 'react-router-dom';
class GridPost extends React.Component{
    constructor(props){
        super(props);
        this.state={
            postMedia:this.props.postMedia
        }
    }
    render(){
        return(
            <NavLink to="/post"><img className="gridPost" src={this.state.postMedia} alt=""></img></NavLink>
        )
    }
}

export default GridPost;