import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import Header from './components/Header';

function App() {
  return (
    <div>
      Hello, TrybeWallet!
      <Header />
      <Switch>
        <Route exact path="/"><Login /></Route>
        <Route exact path="/carteira"><Wallet /></Route>
      </Switch>
    </div>);
}

export default App;
