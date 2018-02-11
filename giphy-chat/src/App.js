import React, { Component } from 'react';
import ChatArea from './components/ChatArea'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import './App.css'

import rootReducer from './reducers';
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));



class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <div className="App">
        <ChatArea/>
      </div>
    </Provider>

    );
  }
}

export default App;
