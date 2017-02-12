import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

const App = ({children}) => {
  return (
    <MuiThemeProvider>
      <div className="App">
        { /*<Header title='Mobile'/> */}
        {children}
      </div>
    </MuiThemeProvider>
  );
}

export default App;

// Food graphic by <a href="http://www.flaticon.com/authors/freepik">Freepik</a> from <a href="http://www.flaticon.com/">Flaticon</a> is licensed under <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC BY 3.0</a>. Made with <a href="http://logomakr.com" title="Logo Maker">Logo Maker</a>
