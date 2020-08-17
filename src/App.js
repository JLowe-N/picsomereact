import React from 'react';
import './App.css';
import Header from './components/Header';
import Cart from './pages/Cart';
import Photos from './pages/Photos';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Redirect exact from="/" to="/picsomereact" />
        <Route exact path="/picsomereact">
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
