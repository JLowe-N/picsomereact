import React from 'react';
import './App.css';
import Header from './components/Header';
import Cart from './pages/Cart';
import Photos from './pages/Photos';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <h1>Home Page</h1>

      <Switch>
        <Route exact path="/">
          <Photos />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>




  );
}

export default App;
