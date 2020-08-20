import React from 'react';
import PropTypes from 'prop-types';

import TitleBar from './TitleBar';
import Todos from './Todos';
import AddTodos from './AddTodos';

export default class App extends React.Component {
  render() {
    return(
      <div>
        <TitleBar title={this.props.title}/>
        <Todos/>
        <AddTodos/>
      </div>
    );
  }
};

App.propTypes = {
  title: PropTypes.string.isRequired
}

