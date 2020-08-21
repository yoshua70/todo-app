import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';

export default class TodosList extends React.Component {
  renderTodos() {
    if(this.props.todos.length === 0) {
      return (
        <div>
          <p>Nothing here!</p>
        </div>
      );
    } else {
      return this.props.todos.map((todo) => {
        return <Todo key={todo._id} todo={todo}/>
      });
    }
  }
  render() {
    return (
      <div>
        {this.renderTodos()}
      </div>
    );
  }
};

TodosList.propTypes = {
  todos: PropTypes.array.isRequired
}