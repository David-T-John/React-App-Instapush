import React from 'react';
import '../css/camerapage.css';
import { NavLink } from 'react-router-dom';
class Camerapage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            file:null,
            step_two:false,
            filter:null
        }
        this.handleFileChange = this.handleFileChange.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }    
    handleFileChange = (event) => {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
    }
    handleNextClick = () => {
        this.setState({
            step_two:true
        })
    }
    handleFilterChange = (event) => {
        this.setState({
            filter:event.target.innerHTML
        })
    }
    handleBackBtn = () => {
        this.setState({
            file:null
        })
    }
    handleBack_2 = () => {
        this.setState({
            step_two:false
        })
    }
    componentDidMount(e){
        return(console.log('Camerapage Compononet Did Mount.'));
    };
    componentWillUnmount(e){
        return(console.log('Camerapage Compononet Did Unmount.'));
    };
    render(){
        if(this.state.filter){

            console.log(`Add ${this.state.filter} filter`)
        }
        if(this.state.step_two){
            return(
                <div>
                    <div id="blackBackground">
                        <button id="backBtn" onClick={this.handleBack_2}>Back</button>
                        <img src={this.state.file} id="previewUpload" alt=""></img>
                        <div id="chooseMediaWrap">
                            <ul id="addContentOptions">
                                <li className="optionItem"><div className="addContent"><h5 id="captionHeading">Caption<textarea id="addCaption" placeholder="Write a caption" rows="9"></textarea></h5></div></li>
                                <li className="optionItem"><NavLink to="/account"><button className="addContent" id="postNextBtn" >POST</button></NavLink></li>
                            </ul>
                        </div>

                    </div>
                </div>
            )
        }
        if(this.state.file){
            return(
                <div>
                    <div id="blackBackground">
                        <button id="backBtn" onClick={this.handleBackBtn}>Back</button>
                        <img src={this.state.file} id="previewUpload" alt=""></img>
                        <div id="chooseMediaWrap">
                            <ul id="addContentOptions">
                                <li className="optionItem">
                                    <div className="addContent" id="filterWrap">
                                        <h5 id="filterHeading">Filter</h5><br></br>  
                                        <button className="filterBtn" onClick={(event) => this.handleFilterChange(event)}>1970s</button>
                                        <button className="filterBtn" onClick={(event) => this.handleFilterChange(event)}>B/W</button>
                                        <button className="filterBtn" onClick={(event) => this.handleFilterChange(event)}>Bright</button>
                                        <button className="filterBtn" onClick={(event) => this.handleFilterChange(event)}>Tokyo</button>
                                        <button className="filterBtn" onClick={(event) => this.handleFilterChange(event)}>Warm</button>
                                    </div>
                                </li>
                                <li className="optionItem"><button className="addContent" id="postNextBtn" onClick={ (event) => this.handleNextClick()}>Next  </button></li>

                            </ul>
                        </div>

                    </div>
                </div>
            )
        }
        return(
            <div>
                <div id="blackBackground">
                    <img src={this.state.file} id="previewUpload" alt=""></img>
                    <div id="chooseMediaWrap">
                        <ul id="addContentOptions">
                            <li className="optionItem"><button className="addContent" id="takePhotoBtn"> Take Photo or Video</button></li>
                            <li className="optionItem"><label><input onChange={ (event) => this.handleFileChange(event) } id="uploadPhotoBtn" type="file" className="upload"></input></label></li>
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
}
export default Camerapage;