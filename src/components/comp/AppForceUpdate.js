import React, { Component } from 'react';

class AppForceUpdate extends Component {
    constructor() {  
        super();            
        this.forceUpdateState = this.forceUpdateState.bind(this);  
     } 
     forceUpdateState() {  
         //This method allows us to update the component manually.
        this.forceUpdate();  
     };  
     //Each time when you click on ForceUpdate button, it will generate the random number. 
    render() { 
        return ( <div>  
            <h1>Example to generate random number</h1>  
            <h3>Random number: {Math.random()}</h3>  
            <button onClick = {this.forceUpdateState}>ForceUpdate</button>  
        </div>  
         );
    }
}
 
export default AppForceUpdate;