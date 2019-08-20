import React, { Component } from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';


class Todos extends Component {

  render() {
    return(
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th/>
              <th/>
            </tr>
          </thead>
          <tbody>
          {this.props.todos.map(todo => (
              <Todoitem
                key={todo.id}
                todo={todo}
                delTodo={this.props.delTodo}
                editTodo={ this.props.editTodo }
              />
          ))}
          </tbody>
        </table>
      </div>
    )
  }

}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  delTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired
}

export default Todos;
