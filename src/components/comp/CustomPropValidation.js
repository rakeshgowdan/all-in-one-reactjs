import isEmail from 'isemail';
class CustomPropValidation extends Component {
    constructor(props){
        super(props);
        this.state={
                mail:''
        }
    }
    render() { 
        return ( <div>
            <form>
                <input type="text" value={this.state.mail}>
                </input>
            </form>
        </div> );
    }
}
 

const requiredEmailPropType = (props, propName, CustomPropValidation) => {
  const value = props[propName];

  if (value == null || typeof value !== 'string' || !isEmail.validate(value)) {
    return new TypeError(`Invalid Email Prop Value: ${value} for ${propName} in ${CustomPropValidation}`);
  }

  return null;
};

const emailPropType = (props, propName, CustomPropValidation) => {
  if (props[propName] == null) {
    return null;
  }

  return requiredEmailPropType(props, propName, CustomPropValidation);
};

emailPropType.isRequired = requiredEmailPropType;

export default emailPropType;