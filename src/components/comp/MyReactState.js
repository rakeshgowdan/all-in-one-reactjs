import React from 'react';
import ReactDOM from 'react-dom';

class MyReactState extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name:"ReactJS",
            version:"v17.0",
            release:"August 2020",
            User:"Rakesh"

        };
    }
    changeUser=()=>{
        this.setState({User:"Rakesh Gowda"})
    }
    render() { 
        return ( <div>
            <h1>React Info</h1>
            <p>
                Name:{this.state.name},
                version:{this.state.version},
                Released on:{this.state.release}...
               User :{this.state.User}

            </p>
            <button type="button" onClick={this.changeUser}>Try now to change State</button>
        </div> );
    }
}
 
export default MyReactState;