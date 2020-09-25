import React from 'react';
import avatar from './resume-picture-large.jpg';
import '../css/profile.css'
import Stories from './Stories'
class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username: 'david ',
            userImage: {src:avatar},
            editMode:false

        }
        this.handleEditMode = this.handleEditMode.bind(this);
    }
    handleEditMode = () => {
        console.log("Edit Mode")
        this.setState({
            editMode:true
        })
    }
    render(){
        if(this.state.editMode){
            return(
                <div className="profileWrap">
                    <table>
                        <tbody id="profileDataTable">
                            <tr>
                                <td className="profileData">
                                    <h2>100</h2>
                                    
                                    <h5>Posts</h5>
                                </td>
                                <td className="profileData">
                                    <h2>3.4M</h2>
                                    
                                    <h5>Followers</h5>
                                </td>
                                <td className="profileData">
                                    <h2>1000</h2>
                                    
                                    <h5>Following</h5>
                                </td>

                            </tr>
                        </tbody>
                    </table>
                    <img id="profileImage" src={this.state.userImage.src} alt=""></img><i id="plusIcon" className="fa fa-plus"></i><br></br><a id="profileName" href="/account">{this.state.username}</a>
                    <input type="text"id="bio">This is your profile section where you can write a little something about yourself and add your own links.</input>
                    <input id="profileLink" href="/">www.YourOwnWebpage.com</input>
                    <br></br><br></br>
                    <button id="editProfile">Save Changes</button>
                    <h6 id="highlights">Highlights</h6>
                    <Stories />
                </div>
            )
        }
        return(
            <div className="profileWrap">
                <table>
                    <tbody id="profileDataTable">
                        <tr>
                            <td className="profileData">
                                <h2>100</h2>
                                
                                <h5>Posts</h5>
                            </td>
                            <td className="profileData">
                                <h2>3.4M</h2>
                                
                                <h5>Followers</h5>
                            </td>
                            <td className="profileData">
                                <h2>1000</h2>
                                
                                <h5>Following</h5>
                            </td>

                        </tr>
                    </tbody>
                </table>
                <img id="profileImage" src={this.state.userImage.src} alt=""></img><i id="plusIcon" className="fa fa-plus"></i><br></br><a id="profileName" href="/account">{this.state.username}</a>
                <p id="bio">This is your profile section where you can write a little something about yourself and add your own links.</p>
                <a id="profileLink" href="/">www.YourOwnWebpage.com</a>
                <br></br><br></br>
                <button id="editProfile" onClick={(event) => this.handleEditMode()}>Edit profile</button>
                <h6 id="highlights">Highlights</h6>
                <Stories />
            </div>
        )
    }
}
export default Profile;