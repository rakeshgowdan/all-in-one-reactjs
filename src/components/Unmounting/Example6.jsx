import React, { Component } from 'react';

class Example6 extends Component {
    constructor(props){
        super(props);
        
            this.state={
                flag: true 
            };
        
    }
    deleteContent= ()=>{
        this.setState({flag:false})
    }
    render() { 
        let myHeader;
        if(this.state.flag){
            myHeader=<Comp/>
        };
        return ( <div>
                {myHeader}
                <button type="button" onClick={this.deleteContent}>Delete the Comp</button>
        </div> );
    }
}
class Comp extends Component{
    componentWillUnmount(){
        alert("Component :: is about to be unmounted");
    }
    render(){
        return(
            <h1>Welcome user!!</h1>
        )
    }
}
 
export default Example6;