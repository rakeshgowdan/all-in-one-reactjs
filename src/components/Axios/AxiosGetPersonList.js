import React from 'react';

import axios from 'axios';

export default class AxiosGetPersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        <p>list of persons name</p>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
    )
  }
}