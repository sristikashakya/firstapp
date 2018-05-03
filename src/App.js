import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
         <Header />
          <BrowserRouter>
            <Switch>
              <Route path = "/Login" Component={Login} />
              <Route exact path="/" Component={Home} />
              <Route path = "/dashboard" Component={dashboard} />
            </Switch>
          </BrowserRouter>
         </MuiThemeProvider>

      </div>
    )
  }
}

export default App;
