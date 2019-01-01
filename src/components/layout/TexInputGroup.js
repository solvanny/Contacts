import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInputGroup = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
  error
}) => {
  return(
    <div className="form-group row">
      <label htmlFor={name} className="col-sm-2 col-form-label">{label} </label>
      <div className="col-sm-10">
        <input
          placeholder={placeholder}
          name={name}
          type={type}
          value={value}
          className={classnames('form-control form-control-lg', {
            'is-invalid': error
          } )}
          onChange={onChange}
        />
        {error && <div className="invalid-feedback ">{error}</div>}
      </div>
    </div>
  )
}

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
}

TextInputGroup.defaultProps = {
  type: 'text'
}

export default TextInputGroup;