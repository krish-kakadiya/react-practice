import { Component } from "react";

class Message extends Component{
    constructor(){
        super();
        this.state = {
            message : "Hello krish kakadiya"
        }
    }
    changeMessage = (newMessage) => {
        this.setState({
            message: newMessage
        })
    }
    render(){
        return (
            <div>
                <h1>Welcome,{this.state.message}</h1>
                <button onClick={()=>this.changeMessage("nice to meet you!")}>Click</button>
            </div>
        )
    }
}

export default Message;