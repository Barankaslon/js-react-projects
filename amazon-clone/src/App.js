import logo from './logo.svg';
import Header from './Header'
import Cart from './Cart'
import Home from './Home'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>

          <Route path="/cart">
            <Cart />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
