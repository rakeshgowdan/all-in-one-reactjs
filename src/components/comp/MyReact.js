import React from 'react';
import ReactDOM from 'react-dom';

class MyReact extends React.Component {
  render() {
    return <h2>ReactJS is  {this.props.val}!</h2>
  }
}
class FrameworkEx extends React.Component {
    constructor(props) {
        super(props);
      }
    render() { 
        return ( <div>
            <h1>it is a framework of {this.props.name}</h1>
        </div> );
    }
}
 

class PropExample extends React.Component {
  
    render() { 
        const value="user friendly!!";
        return ( <div>
            <h1>ReactJs is ??</h1>
           {/*  <MyReact val="Cool!!"/>*/}
           <MyReact val={value}/>
           {/*If your component has a constructor function, the props should always
            be passed to the constructor and also to the React.
            Component via the super() method. */}
           <FrameworkEx name="JavaScript"/>
        </div> );
    }
}
 
export default PropExample;