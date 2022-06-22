import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { Login, Wallet } from './pages/Login'

function App() {
  return <div>Hello, TrybeWallet!
  <Switch>
    <Route exact path = '/'><Login /></Route>
    <Route exact path = '/carteira'><Wallet/></Route>
  </Switch>
  </div>;
}

export default App;
