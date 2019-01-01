import React, { Component } from 'react';
import { Consumer } from '../../context';
import uuid from 'uuid';

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  }

  onChange = e => this.setState({[e.target.name]: e.target.value});

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    }
    dispatch({ type: 'ADD_CONTACT', payload: newContact });

    //Clear state
    this.setState({
      name: '',
      email: '',
      phone: ''
    });
  };

  render() {
    const { name, email, phone } = this.state;

    return(
      <Consumer>
        {value => {
          const { dispatch } = value;
          return(
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <div className="form-group row">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Name: </label>
                      <div className="col-sm-10">
                        <input 
                          placeholder="Enter name..."
                          name="name"
                          type="text"
                          value={name} 
                          className="form-control"
                          onChange={this.onChange}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="email" className="col-sm-2 col-form-label">Email: </label>
                      <div className="col-sm-10">
                        <input 
                          placeholder="Enter email..."
                          name="email"
                          type="email"
                          value={email} 
                          className="form-control"
                          onChange={this.onChange}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="phone" className="col-sm-2 col-form-label">Phone: </label>
                      <div className="col-sm-10">
                        <input 
                          placeholder="Enter phone number..."
                          name="phone"
                          type="text"
                          value={phone} 
                          className="form-control"
                          onChange={this.onChange}
                        />
                      </div>
                  </div>
                  <input type="submit" value="Add Contact" className="btn  btn-light btn-block" />
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default  AddContact;