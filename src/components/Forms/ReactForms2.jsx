import React, { Component } from 'react';


class ReactForms2 extends Component {
   constructor(props){
       super(props);
       this.state={
           userName:'',
           mobile:null,
       }
   }
   handleChange=(event) =>{
       let n=event.target.name;
       let v=event.target.value;
       if(n==="mobile"){
           if(!Number(v)){
               alert("Mobile number field should be a Numeric data");
           }
       }
       this.setState({[n]:v});
       console.log(this.state.userName);
       console.log(this.state.mobile);
   }
    render() { 
        return ( <div>
            <form  >
        <h3>Fill up the deatils</h3>
        <h4>Hello {this.state.userName} , {this.state.mobile}</h4>
    Name <input type="text" name="userName" onChange={this.handleChange} />
    Mobile<input type="phone" name="mobile" onChange={this.handleChange}/>
    <input type="submit"/>
            </form>
        </div> );
    }
}
 
export default ReactForms2;