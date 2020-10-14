import React, {Component} from 'react';
//Here HOC accepts HocComponent as arg"
export default function Hoc(HocComponent){  
    return class extends Component{  
        render(){  
            console.log("HOC");
            return (  
                <div>  
                    {/*can describe parent/hoc comp */}
                    <h1>Hoc is being invoked </h1>

                    {/*Call Wrapped comp */}
                    <HocComponent data="">

                        </HocComponent>  
                </div>  
  
            );  
        }  
    }   
} 