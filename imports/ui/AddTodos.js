import React from 'react';
import PropTypes from 'prop-types';

import {Todos} from './../api/todos';

export default class AddTodos extends React.Component {
  handleSubmit(e) {
    let todoName = e.target.todoName.value;
    e.preventDefault();
    
    if(todoName) {
      e.target.todoName.value = '';
      Todos.insert({
        name: todoName
      })
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" name="todoName" placeholder="Todo name"/>
          <button>Add Todo</button>
        </form>
      </div>
    )
  }
};