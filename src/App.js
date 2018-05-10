import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <BrowserRouter>
            <Switch>
              <Route path = "/" component={Login} />
            </Switch>
          </BrowserRouter>
         </MuiThemeProvider>

      </div>
    )
  }
}

export default App;
