import React, { Component } from 'react';


class ReactForms1 extends Component {
    constructor(props) {
        super(props);
        this.state = { userName: "" };
      }
      handleChange=(event)=>{
          this.setState({userName:event.target.value});
      }
      handleFormSubmit=(event)=>{
          event.preventDefault();
          alert("Your about to submit your form "+this.state.userName);
          console.log(this.state.userName);
      }

    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleFormSubmit} >
            <h3>Fill up the deatils</h3>
        <h4>Hello {this.state.userName}</h4>
        <input type="text" onChange={this.handleChange}/>
        <input type="submit"/>
                </form>
            </div>
         );
    }
}
 
export default ReactForms1;