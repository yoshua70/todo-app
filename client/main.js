import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import App from './../imports/ui/App';

import {Todos} from './../imports/api/todos';

Meteor.startup(() => {
  Tracker.autorun(() => {
    let title = "Todo App";
    let todos = Todos.find().fetch();
    ReactDOM.render(<App title={title} todos={todos}/>, document.getElementById('app'));
  })
});