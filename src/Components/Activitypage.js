import React from 'react';
import LikeNotification from './LikeNotification';
import '../css/activitypage.css';
class Activitypage extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(e){
        return(console.log('Activitypage Compononet Did Mount'));
    }
    componentWillUnmount(e){
        return(console.log('Activitypage Compononet Did Unmount.'));
    }
    render(){
        return(
            <div id="activityPageWrap">
                <h5 className="activityLabel">Today</h5>
                <div id="todaysActivity">
                    <LikeNotification />
                    <LikeNotification />
                </div>

                <h5 className="activityLabel">This Week</h5>
                <div id="weeksActivity">
                    <LikeNotification />
                    <LikeNotification />
                    <LikeNotification />
                    <LikeNotification />
                </div>
                <h5 className="activityLabel">This Month</h5>
                <div id="monthsActivity">
                    <LikeNotification />
                    <LikeNotification />
                    <LikeNotification />
                    <LikeNotification />
                    <LikeNotification />
                    <LikeNotification />
                    <LikeNotification />
                    <LikeNotification />
                    <LikeNotification />
                    <LikeNotification />
                    <LikeNotification />
                    <LikeNotification />
                    <LikeNotification />
                    <LikeNotification />
                    <LikeNotification />
                    <LikeNotification />
                    <LikeNotification />
                    <LikeNotification />
                    <LikeNotification />
                    <LikeNotification />
                    <LikeNotification />
                    <LikeNotification />
                    <LikeNotification />
                    <LikeNotification />
                    <LikeNotification />
                    <LikeNotification />
                    <LikeNotification />
                    <LikeNotification />

                </div>
            </div>


        )
    }
}

export default Activitypage;