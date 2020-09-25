import React from 'react';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Homepage from "./Components/Homepage";
import Explorepage from "./Components/Explorepage";
import Activitypage from "./Components/Activitypage";
import Accountpage from "./Components/Accountpage";
import Camerapage from './Components/Camerapage';
import Tvpage from './Components/Tvpage';
import Messagespage from './Components/Messagespage';
import Postpage from './Components/Postpage';
import PostpageVid from './Components/PostpageVid';
import Authpage from './Components/Authpage'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import avatarImg from './Components/resume-picture-large.jpg';
class App extends React.Component {
  constructor(){
    super();
    this.state={
      isLoggedIn:false,
      redirect_path:'',
      username:"david",
      avatarImg:avatarImg,
      picPosts:[{}],
      vidPosts:[{}],

    }
  }
  getResponse = async() => {
    const response = await this.fetch(5000, '/api/hello');
    const body = await response.json();
    console.log(body);
    return body;
  }
  componentDidMount(){
    if (this.state.isLoggedIn===false){
      this.setState({ redirect_path:'/login' })}
  }

  render(){
    if(this.state.redirect_path){
      return(
        <Router>
            <Redirect push to={this.state.redirect_path} />
            <Route exact path="/login" component={Authpage} activeClassName="active"/>
            <Header username={this.state.username} /><Navbar avatarImg={this.state.avatarImg} />
            <Switch>
              <Route exact path="/" component={Homepage} activeClassName="active" />
              <Route exact path="/explore" component={Explorepage} activeClassName="active"/>
              <Route exact path="/camera" component={Camerapage} activeClassName="active"/>
              <Route exact path="/activity" component={Activitypage} activeClassName="active"/>
              <Route exact path="/account" component={Accountpage} activeClassName="active"/>
              <Route exact path="/messages" component={Messagespage} activeClassName="active"/>
              <Route exact path="/tv" component={Tvpage} activeClassName="active"/>
              <Route exact path="/post" component={Postpage} activeClassName="active"/>
              <Route exact path="/post_2" component={PostpageVid} activeClassName="active"/>
            </Switch>
            

        </Router>
      )
    }
    return(
      <Router>
        <div className="App">
          <Header username="david" />
          <Switch>
            <Route exact path="/" component={Homepage} activeClassName="active" />
            <Route exact path="/explore" component={Explorepage} activeClassName="active"/>
            <Route exact path="/camera" component={Camerapage} activeClassName="active"/>
            <Route exact path="/activity" component={Activitypage} activeClassName="active"/>
            <Route exact path="/account" component={Accountpage} activeClassName="active"/>
            <Route exact path="/messages" component={Messagespage} activeClassName="active"/>
            <Route exact path="/tv" component={Tvpage} activeClassName="active"/>
            <Route exact path="/post" component={Postpage} activeClassName="active"/>
            <Route exact path="/post_2" component={PostpageVid} activeClassName="active"/>
            <Route exact path="/login" component={Authpage} activeClassName="active"/>
          </Switch>
          <Navbar />
        </div>
      </Router>
    )
    
  }
}


export default App;
