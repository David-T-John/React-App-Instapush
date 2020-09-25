import React from 'react';
import Message from './Message';
import '../css/messagespage.css';
class Messagespage extends React.Component{
    componentDidMount(e){
        return(console.log('Messagespage Compononet Did Mount.'));
    }
    componentWillUnmount(e){
        return(console.log('Messagepage Compononet Did Unmount.'));
    }
    render(){
        return(
            <div id="messagesWrap">
                <div id="messages">
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                </div>
            </div>
        )
    }
}
export default Messagespage;