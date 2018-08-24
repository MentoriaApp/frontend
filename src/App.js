import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reducers from './reducers';
import promise from 'redux-promise';

import Home from './components/Home';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
        </div>
      </BrowserRouter>
    </Provider>
    );
  }
}

export default App;
