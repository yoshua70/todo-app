import React from 'react';
import PropTypes from 'prop-types';

import {Todos} from './../api/todos';

export default class Todo extends React.Component {
  render() {
    return (
      <div key={this.props.todo._id}>
        <div>
          <h3>{this.props.todo.name}</h3>
        </div>
        <div>
          <button>Done</button>
          <button onClick={() => {
            Todos.remove(this.props.todo._id)
          }}>X</button>
        </div>
      </div>
    )
  }
};

Todo.propTypes = {
  todo: PropTypes.object.isRequired
}