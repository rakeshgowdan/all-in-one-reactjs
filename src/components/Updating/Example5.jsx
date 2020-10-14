import React, { Component } from 'react';

class Example5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "Arjun",
        };
      }
      componentDidMount(){
        setTimeout(()=>{
            this.setState({name:"Murugan"})
        },2000)
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        document.getElementById("one").innerHTML="Before "+prevState.name;
    }
    componentDidUpdate(){
        document.getElementById("two").innerHTML="After "+this.state.name;
    }
     
    render() { 
        return ( <div>
            <h1>My name is {this.state.name}</h1>
            <div id="one"></div>
            <div id="two"></div>
        </div> );
    }
}
 
export default Example5;