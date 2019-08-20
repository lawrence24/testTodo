import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todoitem extends Component {

  render() {
    const { todo, editTodo, delTodo } = this.props;
    return (
      <tr>
        <td>{todo.title}</td>
        <td style={{textAlign: "right"}}>
        <button onClick={() => editTodo(todo.id)} className="btn-success">Edit </button>
        <button onClick={() => delTodo(todo.id)} style={{margin: 10}} className="btn-danger">Delete</button>
        </td>
      </tr>
    );
  }

}

Todoitem.propTypes = {
  todo: PropTypes.object.isRequired
}


export default Todoitem;
