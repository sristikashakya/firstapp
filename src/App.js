import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './components/Header';
class App extends Component {
  
  render() {
    return (
      <div>
        <MuiThemeProvider>
         <Header />
         </MuiThemeProvider>
      </div>
    )
  }
}

export default App;
