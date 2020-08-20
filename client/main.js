import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

import App from './../imports/client/ui/App';

Meteor.startup(() => {
  let title = "Todo App"
  ReactDOM.render(<App title={title} />, document.getElementById('app'));
});