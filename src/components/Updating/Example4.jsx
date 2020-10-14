import React, { Component } from 'react';

class Example3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "Arjun",
        };
      }
      shouldComponentUpdate(){
          return true;
      }
      changeName= ()=>{
          console.log("ChangeName called");
          this.setState({name:"JavaScript"});
      }
    render() { 
        return ( <div>
            <h1>My name is {this.state.name}</h1>
            <button type="button" onClick={this.changeName}>Update</button>
        </div> );
    }
}
 
export default Example3;