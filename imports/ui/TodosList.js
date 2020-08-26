import React from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

import Todo from './Todo';

export default class TodosList extends React.Component {
  renderTodos() {
    if(this.props.todos.length === 0) {
      return (
        <div className="item">
          <p className="item__message">Nothing here!</p>
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
        <FlipMove maintainContainerHeight={true}>
          {this.renderTodos()}
        </FlipMove>
      </div>
    );
  }
};

TodosList.propTypes = {
  todos: PropTypes.array.isRequired
}