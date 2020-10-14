import React, { Component } from 'react';  
import 'bootstrap/dist/css/bootstrap.min.css'; 

// Create a context for the current theme which is "light" as the default.  
const arayData=[1,2,3,4,];
const BtnColorContext = React.createContext(arayData); 

class AppCall extends Component {
    
/* Use a ContextProvider to pass the current theme,
 which allows every component to read it, 
 no matter how deep it is. 
 Here, we are passing the "dark" theme as the current value.*/   
    render() { 
        return ( <BtnColorContext.Provider value="btn btn-danger">  
        <Button />  
        {/*All comp to be accessed by data  */}
        
      </BtnColorContext.Provider>  );
    }
}
// Now, it is not required to pass the theme down explicitly for every component.  
function Button(props) {  
    return (  
    <div className="container">  
        <ThemedButton />      
      </div>  
    );  
  }  
/*The contextType property on a class used to
 assign a Context object which is created by React.createContext().*/  
  class ThemedButton extends React.Component {  
    static contextType = BtnColorContext;  
    render() {
        return(
                <button className={this.context}>Context API</button>
    )}  
  }  
export default AppCall;