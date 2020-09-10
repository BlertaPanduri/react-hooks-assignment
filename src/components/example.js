

import React,{useState, useEffect} from "react";

function Example(){
    const [count, setCount]= useState(0);

    // componentDidMount, componentDidUpdate
    useEffect(()=>{
        document.title = 'You clicked ' + count + ' times';
    })
    
    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>
                Increment
            </button>
            <br></br>
            <button onClick={()=>{setCount(count-1)}}>
                Decrement
            </button>
        </div>
    )
}

export default Example;