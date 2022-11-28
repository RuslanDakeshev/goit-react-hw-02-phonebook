import React, { Component } from 'react';
import Form from './Form/Form';
import { Filter } from 'Filter/Filter';
import { ContactList } from 'ContactList/ContactList';
import { customAlphabet } from 'nanoid';

const nanoid = customAlphabet('1234567890', 3);


export class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '',
    
  }
  
  
  formSubmitHandler = data => {
    console.log(data);
    const newContact = {
      id: 'id-' + nanoid(),
      name: data.name,
      number: data.number,
    };

    this.setState(prevState => ({
      contacts:[newContact, ...prevState.contacts]
    }) )

  }

  changeFilter = (e) => {
this.setState({filter: e.currentTarget.value})
  }

  // onFilter = e => {
  //   const { value } = e.currentTarget;
  //   this.setState({ filter: value });
  // };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    // const filteredContacts = contacts.filter(contact =>
    //   contact.name.toLowerCase().includes(filter.toLowerCase())
    // );
    const normalizedFilter = this.state.filter.toLowerCase();
    const filteredContacts = contacts.filter(contact=> contact.name.toLowerCase().includes(normalizedFilter))

    return (
      <>
        <Form onSubmit={this.formSubmitHandler} />
        
        <Filter value={filter} onFilter={this.changeFilter} />
        <ContactList deleteContact={this.deleteContact} contacts={filteredContacts} />
        {/* <input type="text" value={this.state.name} onChange={this.handleInputChange}/> */}
      </>
    )
  }
}


