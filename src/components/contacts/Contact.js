import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';

export default class Contact extends Component {
  state = {
    showContactInfo: false
  }

  oneDeliteClick = (id, dispatch) => {
    dispatch({type: 'DELETE_CONTACT', payload: id})
  }

  render() {

    const {id, name, phone, email } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return(
            <div className="card card-body mb-3" >
            <h4>{name}{' '}
              <i 
                onClick={() => this.setState({showContactInfo: !this.state.showContactInfo})} 
                className="fas fa-sort-down"
                style={{cursor:'pointer'}}
                />
              <i 
                onClick={this.oneDeliteClick.bind(this, id, dispatch)}
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
          )
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
