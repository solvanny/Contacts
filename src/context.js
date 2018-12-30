import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {    
        id: 1,
        name: 'Joe Doe',
        email: 'joe@gmail.com',
        phone: '555-555-555'
      },
      {    
        id: 2,
        name: 'Hlopcic Dobrii',
        email: 'hlopcic@gmail.com',
        phone: '222-222-222'
      },
      {    
        id: 3,
        name: 'Budi Lasca',
        email: 'lasca@gmail.com',
        phone: '777-777-777'
      }
    ]
  }
  render() {
    return(
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
} 

export const Consumer = Context.Consumer;