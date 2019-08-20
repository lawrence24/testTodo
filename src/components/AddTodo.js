import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {

  render() {
    return (
      <form onSubmit={ this.props.handleSubmit } style={{ display: 'flex'}}>
        <input
          type="text"
          style={{flex: '8', padding: '5px'}}
          placeholder="Add Todo ..."
          value = { this.props.todo }
          onChange = { this.props.handleChange }
        />
        <input
          type="submit"
          value={this.props.edited ? 'Edit Todo' : "Add Todo"}
          className={this.props.edited ? 'btn-success' : "btn-primary"}
          style={{flex: '1'}}
        />
      </form>
    );
  }

}



export default AddTodo;
