import React from "react";
import Header from './Header';
import Navbar from './Navbar';
import Homepage from "./Homepage";
import Explorepage from "./Explorepage";
import Activitypage from "./Activitypage";
import Accountpage from "./Accountpage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username: 'david',
            route: '/'  
        }
    }
    render(){
        return(
            <div className="mainWrap">
                <Header />
                <Homepage />
                {/* <div className="content">
                    <Route path="/" component={Homepage}/>
                    <Route path="/Activitypage" component={Activitypage}/>
                    <Route path="/Accountpage" component={Accountpage}/>
                </div> */}
                <Navbar />
            </div>

        )
    }
}
export default Main;
