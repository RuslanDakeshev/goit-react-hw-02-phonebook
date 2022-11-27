import React, { Component } from 'react';
import { nanoid } from 'nanoid'


export class App extends Component {
  state = {
    contacts: [],
    name: ''
  }
  handleInputChange = event => {
    // console.log(event.currentTarget.value);
    this.setState({name: event.currentTarget.value})
}

  render() {
    return (
      <>
        <input type="text" value={this.state.name} onChange={this.handleInputChange}/>
      </>
    )
  }
}


