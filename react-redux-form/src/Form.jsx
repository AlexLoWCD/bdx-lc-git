import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import Geoloc from './Geoloc';

class Form extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="Form" onSubmit={handleSubmit}>
        <Field
          id="name"
          name="name"
          component="input"
          type="text"
          placeholder="Enter your name"
        />
        <Field
          id="lastname"
          name="lastname"
          component="input"
          type="text"
          placeholder="Enter your lastname"
        />
        <Geoloc />
        <button type="submit">Envoyer</button>
      </form>
    )
  }
}

Form = reduxForm({
  form: 'sample',
})(Form);

const mstp = state => ({
  initialValues: {
    name: 'test',
    lastname: 'coucou',
  },
});

Form = connect(mstp)(Form)

export default Form;