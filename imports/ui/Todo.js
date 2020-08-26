import React from 'react';
import PropTypes from 'prop-types';

import {Todos} from './../api/todos';

export default class Todo extends React.Component {
  render() {
    return (
      <div key={this.props.todo._id} class="todo">
        <div>
          <h3 class="todo__message">{this.props.todo.name}</h3>
        </div>
        <div class="todo__actions">
          <button className="button">Done</button>
          <button onClick={() => {
            Todos.remove(this.props.todo._id)
          }} className="button">X</button>
        </div>
      </div>
    )
  }
};

Todo.propTypes = {
  todo: PropTypes.object.isRequired
}