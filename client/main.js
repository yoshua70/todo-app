import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import App from './../imports/ui/App';

import {Todos} from './../imports/api/todos';

Meteor.startup(() => {
  let title = "Todo App"
  ReactDOM.render(<App title={title} todos={Todos}/>, document.getElementById('app'));
});