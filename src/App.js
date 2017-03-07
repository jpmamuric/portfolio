import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

const App = ({children}) => {
  return (
    <MuiThemeProvider>
      <div className="App">
        {children}
      </div>
    </MuiThemeProvider>
  );
}

export default App;
