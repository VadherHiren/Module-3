import React from "react"

class Test1 extends React.Component
{
    test = ()=>{
        document.getElementById('b1').style.background = 'lightblue'
    }
    render()
    {
        return(
            <>
                <button id="b1" onClick={this.test}>Btn 1</button>
                <Test2/>
            </>
        )
    }
}
function Test2(){
    const test2 = () => {
        document.getElementById('b2').style.background = 'lightgreen'
    }
    return(
        <>
            <button id="b2" onClick={test2}>Btn 222</button>
        </>
    )
}

export default Test1;