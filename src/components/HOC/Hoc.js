import React, {Component} from 'react';
//Here HOC accepts HocComponent as arg"
export default function Hoc(HocComponent){  
    return class extends Component{  
        render(){  
            return (  
                <div>  
                    <HocComponent></HocComponent>  
                </div>  
  
            );  
        }  
    }   
} 