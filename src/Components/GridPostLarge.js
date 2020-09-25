import React from 'react';
import '../css/gridPostLarge.css';
import { NavLink } from 'react-router-dom';
class GridPostLarge extends React.Component{
    constructor(props){
        super(props);
        this.state={
            postMedia:this.props.postMedia
        }
    }
    render(){
        return(
            <NavLink to="/post"><img className="gridPostLarge" src={this.state.postMedia} alt=""></img></NavLink>
        )
    }
}

export default GridPostLarge;