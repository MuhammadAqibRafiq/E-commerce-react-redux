import React from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Cart from './components/Cart';
import {Provider} from 'react-redux'
import store from './store/index'
import Details from './components/Details'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Router>
      <Nav/>
      <Route path='/' exact component={Home} />
      <Route path='/cart' exact component={Cart} />
      <Route path='/detail/:id' exact component={Details} />
      </Router>
      </Provider>
    </div>
  );
}

export default App;
