JSX-Java script extension
Example 1
JSX:

const myelement = <h1>With JSX!</h1>; 
//JSX allows us to write HTML directly within the JavaScript code.

ReactDOM.render(myelement, document.getElementById('root'));

Example 2
Without JSX:

const myelement = React.createElement('h1', {}, 'Without JSX!');

ReactDOM.render(myelement, document.getElementById('root'));

//JSX is an extension of the JavaScript language based on ES6,
// and is translated into regular JavaScript at runtime.