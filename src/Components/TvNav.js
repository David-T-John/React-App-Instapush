import React from 'react';
import '../css/tvNav.css';
class TvNav extends React.Component{
    constructor(props){
        super(props);
        this.state={
            activeChannel:"Live"
        }
        
    }
    componentDidMount(){
        return(console.log('Tvpage Component Did Mount.'))
    }
    componentWillUnmount(){
        return(console.log('Tvpage Component Did Unmount.'))

    }
    render(){
        return(
            <div id="tvNavWrap">
                <div id="tvNav">
                    <button className="exploreBtn" id="leftArrow"><i className="fa fa-chevron-left"></i></button>
                    <button className="exploreBtn" id="rightArrow"><i className="fa fa-chevron-right"></i></button>
                    <button className="tvBtn">Live</button>    
                    <button className="tvBtn">News</button>
                    <button className="tvBtn">Food</button>
                    <button className="tvBtn">Animals</button>
                    <button className="tvBtn">Food</button>
                    <button className="tvBtn">Sports</button>
                    <button className="tvBtn">Travel</button>
                    <button className="tvBtn">Music</button>
                    <button className="tvBtn">Art</button>
                    <button className="tvBtn">Home</button>
                    <button className="tvBtn">Comedy</button>
                    <button className="tvBtn">Discovery</button>
                    <button className="tvBtn">History</button>
                    <button className="tvBtn">Reality</button>
                    <button className="tvBtn">Games</button>
                </div>
            </div>
            
        )
    }

}
export default TvNav;