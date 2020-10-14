import React, { Component } from "react";

class Example2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Arjun",
    };
  }
  componentDidMount(){
      setTimeout(()=>{
          this.setState({name:"ReactJS"})
      },2000)
  }

  render() {
    return (
      <div>
        <h1>My name is {this.state.name}</h1>
      </div>
    );
  }
}

export default Example2;
