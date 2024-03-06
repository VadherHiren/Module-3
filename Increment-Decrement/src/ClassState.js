import React from "react"

class StateTest extends React.Component
{

    state = { x:0 };

    increment = () => {
        console.log(this.state.x)
        this.setState({x:this.state.x+1})
    }

    dec = () => {
        this.setState({x:this.state.x-1})
    }

    render ()
    {
        return(
            <>
            <button onClick={this.increment}>Increment</button>
            <h2>{this.state.x}</h2>
            <button onClick={this.dec}>Decrement</button>
            </>
        )
    }
}

export default StateTest;