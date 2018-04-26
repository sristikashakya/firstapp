import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './components/Header';
import Table from './components/Tables';
import Login from './components/Login';
class App extends Component {
  person = {
    email: 'enter you email',
    API: 'API'
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
         <Header />
         <Table />
          <Login detail = {this.person} />
         </MuiThemeProvider>

      </div>
    )
  }
}

export default App;
