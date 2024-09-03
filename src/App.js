import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import AppRoute from './components/routes/rout.jsx';
import { Provider } from 'react-redux';
import store from './store/store.js'
import themeContext from '../src/context/themcontext';
import languageContext from '../src/context/langcontext.js';
import { useState } from 'react';
function App() {

   const [darkMode, setDarkMode] = useState(false)
  const [language, setLanguage] = useState("en")


  return (
    <div className="App">
      <Provider store={store}>
                <themeContext.Provider value={{darkMode, setDarkMode}}>
                <languageContext.Provider value={{language, setLanguage}}>
            <AppRoute />
                </languageContext.Provider>
                </themeContext.Provider>
      </Provider>

    </div>
  );
}

export default App;
