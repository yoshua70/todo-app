import React from 'react';
import PropTypes from 'prop-types';

import Todos from './../api/todos';

import TitleBar from './TitleBar';
import TodosList from './TodosList';
import AddTodos from './AddTodos';

export default class App extends React.Component {
  render() {
    return(
      <div>
        <TitleBar title={this.props.title}/>
        <TodosList todos={this.props.todos}/>
        <AddTodos/>
      </div>
    );
  }
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  todos: PropTypes.array.isRequired
}

