import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
  render() {
    const {handleSubmit, handleChange, todo, edited} = this.props;
    return (
      <form onSubmit={handleSubmit} style={{ display: 'flex'}}>
        <input
          type="text"
          style={{flex: '8', padding: '5px'}}
          placeholder="Add Todo ..."
          value= {todo}
          onChange= {handleChange}
        />
        <input
          type="submit"
          value={edited ? 'Edit Todo' : "Add Todo"}
          className={edited ? 'btn-success' : "btn-primary"}
          style={{flex: '1'}}
        />
      </form>
    );
  }

}

AddTodo.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  todo: PropTypes.string,
  edited: PropTypes.bool.isRequired,
}


export default AddTodo;
