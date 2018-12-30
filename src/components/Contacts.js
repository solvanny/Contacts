import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../context';

class Contacts extends Component {
  
deleteHandler(id) {
  let { contacts } = this.state;

  let newContacts = contacts.filter(contact => contact.id !== id);
  this.setState({
    contacts: newContacts
  })
}

  render() {
    return(
      <Consumer>
        {value => {
           const { contacts } = value;
          return(
          <React.Fragment>
            {contacts.map(contact => (
              <Contact deleteHandler={this.deleteHandler.bind(this, contact.id)} key={contact.id} contact={contact} />
            ))}
          </React.Fragment>
        )}}
      </Consumer>
    )
  }
}

export default Contacts;