import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/Header';
import Login from './components/Login';
class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
         <Header />
          <Login />
         </MuiThemeProvider>

      </div>
    )
  }
}

export default App;
