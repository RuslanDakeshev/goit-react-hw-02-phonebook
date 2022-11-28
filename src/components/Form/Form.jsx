import React, { Component } from 'react';

import { customAlphabet } from 'nanoid';

const nanoid = customAlphabet('1234567890', 3);

class Form extends Component {
  state = {
    contacts: [
   ],
      name: '',
      number: '',
    id: '',
  };
    nanoid = customAlphabet('1234567890abcdef', 10);
    nameInputId = nanoid();
    numberInputId = nanoid();
    
    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };

//   handleNameChange = event => {
//     // console.log(event.currentTarget.value);
//     this.setState({ name: event.currentTarget.value });
//   };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ contacts: [], name: '', number:'' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            type="text"
            name="name"
            id={this.nameInputId}
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label htmlFor={this.numberInputId}>
          Number
          <input
            type="tel"
            name="number"
            id={this.numberInputId}
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Form;
