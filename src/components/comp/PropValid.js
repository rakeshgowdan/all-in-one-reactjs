import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import App from '../../App';

class PropValid extends Component {
    state = {  }
    render() { 
        return ( <div>
            <h3>Array: {this.props.propArray}</h3>
            <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
            <h3>Func: {this.props.propFunc(3)}</h3>
            <h3>Number: {this.props.propNumber}</h3>
            <h3>String: {this.props.propString}</h3>
            <h3>Object: {this.props.propObject.objectName1}</h3>
            <h3>Object: {this.props.propObject.objectName2}</h3>
            <h3>Object: {this.props.propObject.objectName3}</h3>

        </div>);
    }
}
PropValid.propTypes = {
    propArray: PropTypes.array.isRequired,
    propBool: PropTypes.bool.isRequired,
    propFunc: PropTypes.func,
    propNumber: PropTypes.number,
    propString: PropTypes.string,
    propObject: PropTypes.object
 }
 // You can chain any of the above with `isRequired` to make sure a warning
  // is shown if the prop isn't provided.
 PropValid.defaultProps = {
    propArray: 1,
    propBool: true,
    propFunc: function(e){return e},
    propNumber: 1,
    propString: "String value...",
    
    propObject: {
       objectName1:"objectValue1",
       objectName2: "objectValue2",
       objectName3: "objectValue3"
    }
 }
export default PropValid;