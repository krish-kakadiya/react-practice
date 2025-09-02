import { Component } from "react";

class Counter extends Component {
    constructor(){
        super();
        this.state = {
            count: 0,
        }
    }
    decrement = () => {
        if(this.state.count>0)
        {
            this.setState({
                count: this.state.count-1
            })
        }
    }
    increment = ()  =>{
        this.setState((pre)=>{
        return { count: pre.count+1};
        })
    }
    reset  = () =>{
        this.setState({
            count: 0
        })
    }
    incrementfive = ()=>{
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render() {
        return (
            <div>
                <h1>Count:{this.state.count}</h1>
                <button onClick={()=>this.increment()}>Increment</button>
                <button onClick={()=>this.decrement()}>Decrement</button>
                <button onClick={()=>this.reset()}>reset</button>
            </div>
        )
    }
}

export default  Counter;