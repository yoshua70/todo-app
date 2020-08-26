import React from 'react';
import PropTypes from 'prop-types';

import {Todos} from './../api/todos';

export default class Todo extends React.Component {
  render() {
    return (
      <div key={this.props.todo._id} className="todo">
        <h3 className="todo__message">{this.props.todo.name}</h3>
        <div className="todo__actions">
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