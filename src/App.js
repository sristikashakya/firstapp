import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './components/Header';
import Table from './components/Tables';
class App extends Component {
  
  render() {
    return (
      <div>
        <MuiThemeProvider>
         <Header />
         <Table />
         </MuiThemeProvider>
      </div>
    )
  }
}

export default App;
