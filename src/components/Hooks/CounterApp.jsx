import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function CounterApp(){

    //Declare a new state variable 
    //useState

    const[count,setCount]=useState(0);
    //Const,Super,this.state
    //bind the method
    //this.state
    useEffect(()=>{
        document.title=`you have clicked ${count} times`
    });


    return(<div>
        <p>Button clicked {count} times</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>);


}

export default  CounterApp;