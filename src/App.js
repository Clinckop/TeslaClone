import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Account from './components/Account/account-page';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/account">
            <Account/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;