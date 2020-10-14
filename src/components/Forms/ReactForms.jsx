import React, { Component } from "react";

class Reactforms extends Component {
  constructor(props) {
    super(props);
    this.state = { userName: "" };
  }
  handleChange = (event) => {
    this.setState({ userName: event.target.value });
  };
  render() {
      let userData='';
      if(this.state.userName){
      userData=<h4>Welcome {this.state.userName}</h4>
      }else{
          userData='';
      }
    return (
      <div>
        <form>
          <h3>Pls fill up the data below</h3>
         {userData}
          Enter your name:
          <input type="text" onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

export default Reactforms;
