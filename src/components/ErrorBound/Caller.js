import React, { Component } from 'react';
import ErrorBoundary from './ErrorBouandry';
import User from './User';


class Caller extends Component {
    state = {  }
    render() { 
        return ( 
        <ErrorBoundary>
            <User/>
         </ErrorBoundary> );
    }
}
/*Please note that this error boundary approach only works in production mode of build.
 In development mode it simply displays the actual error on browser instead of these 
 custom errors.

Use of Error Boundary on production helps to show user meaningful error
 message on screen instead of displaying some technical code errors.*/ 
export default Caller;