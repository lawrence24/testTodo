import React, { Component } from 'react';
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import uuid from 'uuid'

class App extends Component {
  constructor(){
    super()
    this.state = {
      todos: [],
      todo: '',
      id: uuid(),
      edited: false
    }
  }

  //Add Todo
  handleChange = e => {
    this.setState({
      todo: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    const newTodo = {
      id: this.state.id,
      title: this.state.todo
    }
    this.setState({
      todos: [...this.state.todos, newTodo],
      todo: '',
      id: uuid(),
      edited: false
    })
  }

  //Edit Todo
  editTodo = id => {
    const filteredTodos = this.state.todos.filter(todo =>
      todo.id !== id)
    const selectedTodos = this.state.todos.find(todo =>
      todo.id === id)
    console.log(selectedTodos)
    this.setState({
      todos: filteredTodos,
      todo: selectedTodos.title,
      edited: true,
      id:id
    })
  };

  //Delete Todo
  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo =>
      todo.id !== id)]
    })
  };


  render() {
    return (
      <div className="container">
        <AddTodo
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          todo={this.state.todo}
          edited={ this.state.edited }
        />
        <Todos
        todos={this.state.todos}
        delTodo={ this.delTodo }
        editTodo={ this.editTodo }
        />
      </div>
    );
  }

}

export default App;
