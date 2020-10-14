import React, { Component } from 'react';

class Example3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "Arjun",
        };
      }
      static getDerivedStateFromProps(props,state){
          return{name:props.name1}
      }
      changeName= ()=>{
          this.setState({name:"JavaScript"})
      }
    render() { 
        return ( <div>
            <h1>My name is {this.state.name}</h1>
            <button type="button" onClick={this.changeName}>Update</button>
        </div> );
    }
}
 
export default Example3;