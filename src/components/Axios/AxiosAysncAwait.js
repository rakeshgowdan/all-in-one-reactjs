import React from 'react';
import axios from 'axios';

export default class AxiosAsyncAwait extends React.Component {
  state = {
    id: '',
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = async event => {
    event.preventDefault();
  
    //The await keyword resolves the promise and returns the value.
    // The value can then be assigned to a variable.
    const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`);
  
    console.log(response);
    console.log(response.data);
 //The await keyword resolves the promise and returns the value.
 // The value can then be assigned to a variable.   
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person ID:
            <input type="text" name="id" onChange={this.handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
    )
  }
}