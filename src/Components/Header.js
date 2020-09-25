import React from 'react';
import '../css/header.css';
import { NavLink } from "react-router-dom";
class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            iconLeft:{className:"fa fa-camera"},
            iconRight:{className:"far fa-paper-plane"},
            iconRight2:{className:"fa fa-desktop"},
            username:this.props.username,
            canonical:'http://localhost:3000/',
            heading:'Instapush'
        }

    }
    componentDidMount(){
        this.setState({
            canonical:window.location.href
        })

    }
    render(){

        if(this.state.canonical === "http://localhost:3000/"){
            return(
                <div id="headerWrap">
                <div ><h1 id="headerSapacer">Instapush</h1></div>
                <header id="header">
                    <NavLink exact to="/camera"><i id="iconLeft" className={this.state.iconLeft.className}></i></NavLink>
                    <h1>Instapush</h1>
                    <NavLink exact to="/tv" ><i id="iconRight2" className={this.state.iconRight2.className}></i></NavLink>
                    <NavLink exact to="/messages" ><i id="iconRight" className={this.state.iconRight.className}></i></NavLink>
                </header>
            </div>
            )
        }else if (this.state.canonical === "http://localhost:3000/account"){
            return(
                <div id="headerWrap">
                    <div ><h1 id="headerSapacer">Instapush</h1></div>
                    <header id="header">
                        <NavLink exact to="/camera"><i id="iconLeft" className={this.state.iconLeft.className}></i></NavLink>
                        <h1>{this.state.username + " "}<i className="fa fa-chevron-down"></i></h1>
                        <NavLink exact to="/tv" ><i id="iconRight2" className={this.state.iconRight2.className}></i></NavLink>
                        <NavLink exact to="/messages" ><i id="iconRight" className={this.state.iconRight.className}></i></NavLink>
                    </header>
                </div>
    
            )
        }else if (this.state.canonical === "http://localhost:3000/activity"){
            return(
                <div id="headerWrap">
                    <div ><h1 id="headerSapacer">Instapush</h1></div>
                    <header id="header">
                        <NavLink exact to="/camera"><i id="iconLeft" className={this.state.iconLeft.className}></i></NavLink>
                        <h1>Activity</h1>
                        <NavLink exact to="/tv" ><i id="iconRight2" className={this.state.iconRight2.className}></i></NavLink>
                        <NavLink exact to="/messages" ><i id="iconRight" className={this.state.iconRight.className}></i></NavLink>
                    </header>
                </div>
    
            )
        }
        else if (this.state.canonical === "http://localhost:3000/explore"){
            return(
                <div id="headerWrap">
                    <div ><h1 id="headerSapacer">Instapush</h1></div>
                    <header id="header">
                        <NavLink exact to="/camera"><i id="iconLeft" className={this.state.iconLeft.className}></i></NavLink>
                        <h1>Explore</h1>
                        <NavLink exact to="/tv" ><i id="iconRight2" className={this.state.iconRight2.className}></i></NavLink>
                        <NavLink exact to="/messages" ><i id="iconRight" className={this.state.iconRight.className}></i></NavLink>
                    </header>
                </div>
    
            )
        }

        else {
            return(
                <div id="headerWrap">
                    <div ><h1 id="headerSapacer">Instapush</h1></div>
                    <header id="header">
                        <NavLink exact to="/camera"><i id="iconLeft" className={this.state.iconLeft.className}></i></NavLink>
                        <h1>Instapush</h1>
                        <NavLink exact to="/tv" ><i id="iconRight2" className={this.state.iconRight2.className}></i></NavLink>
                        <NavLink exact to="/messages" ><i id="iconRight" className={this.state.iconRight.className}></i></NavLink>
                    </header>
                </div>
    
            )

        }
    }
}
export default Header;