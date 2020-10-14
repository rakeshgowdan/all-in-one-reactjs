import React, { Component } from 'react';

class Example1 extends Component {
  
    //Constructor
    constructor(props){
        super(props);
        this.state={
            name:"Alok"
        }
    }
static getDerivedStateFromProps(props,state){
    return{
            name:props.name1
        };
}

    render() { 
        return ( <div>
        <p>Hello Welcome for todays session!!</p>
            </div>
             );
    }
}
 
export default Example1;