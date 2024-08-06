import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import AppRoute from './components/routes/rout.jsx';
import { Provider } from 'react-redux';
import store from './store/store.js'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
     
      <AppRoute />

      </Provider>

    </div>
  );
}

export default App;
