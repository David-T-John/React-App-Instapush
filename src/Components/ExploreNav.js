import React from 'react';
import '../css/exploreNav.css';
class ExploreNav extends React.Component{
    constructor(props){
        super(props);
        this.state={}
        
    }
    componentDidMount(){
        return(console.log('ExploreNav Component Did Mount.'))
    }
    componentWillUnmount(){
        return(console.log('ExploreNav Component Did Unmount.'))

    }
    render(){
        return(
            <div id="exploreNavWrap">
                <form id="searchForm">
                    <input id="searchInput"type="text" placeholder="Explore"></input><button id="searchBtn"><i className="fa fa-search"></i></button>
                </form>
                <div id="exploreNav">
                    <button className="exploreBtn" id="leftArrowEx"><i className="fa fa-chevron-left"></i></button>
                    <button className="exploreBtn" id="rightArrowEx"><i className="fa fa-chevron-right"></i></button>
                    <button className="exploreBtn">Live</button>
                    <button className="exploreBtn">News</button>
                    <button className="exploreBtn">Food</button>
                    <button className="exploreBtn">Animals</button>
                    <button className="exploreBtn">Food</button>
                    <button className="exploreBtn">Sports</button>
                    <button className="exploreBtn">Travel</button>
                    <button className="exploreBtn">Music</button>
                    <button className="exploreBtn">Art</button>
                    <button className="exploreBtn">Home</button>
                    <button className="exploreBtn">Comedy</button>
                    <button className="exploreBtn">Discovery</button>
                    <button className="exploreBtn">History</button>
                    <button className="exploreBtn">Reality</button>
                    <button className="exploreBtn">Games</button>
                </div>

            </div>
        )
    }

}
export default ExploreNav;