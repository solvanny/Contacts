import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Contact extends Component {
  state = {
    showContactInfo: false
  }

  render() {
    const { name, phone, email } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <div className="card card-body mb-3" >
        <h4>{name}{' '}
          <i 
            onClick={() => this.setState({showContactInfo: !this.state.showContactInfo})} 
            className="fas fa-sort-down"
            style={{cursor:'pointer'}}
            />
          <i 
            onClick={() => {this.props.deleteHandler()}}
            className="far fa-trash-alt" 
            style={{cursor:'pointer', float:'right', color:'red'}} 
          />
        </h4>
        {showContactInfo ? (
          <ul className="list-group" >
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
        ): null}
        
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
