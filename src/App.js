import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './Store/store';

class App extends Component {
  render() {
    return (
     <Provider store={store}>
       <p>This will be the sample app</p>
     </Provider>
    );
  }
}

export default App;
