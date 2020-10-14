import React, {Component} from 'react';
import Hoc from './Hoc';
 


class MyHocComp extends Component {
    
    render() { 
        return ( <div>  
              <h1>Hoc is being invoked </h1>
            <h2>HOC Example</h2>  
            Higher Order Component Working Flow!!
            <p>The MyHocComp component wrapped inside another React component so that we can modify it. 
                Thus, it becomes the primary application of the Higher-Order Components</p>
          </div>   );
    }
}
//Do not use HOCs inside the render method of a component.
//HOCs does not work for refs as 'Refs' does not pass through as a parameter or argument.
MyHocComp=Hoc(MyHocComp);

export default MyHocComp;