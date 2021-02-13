import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './home';
import Login from './login';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <Link to='/'><li>home</li></Link>
          <Link to='/login'><li>login</li></Link>
        </ul>
      </nav>
      <Switch>
        <Route path={["/", "/home"]} exact>
          <Home/>
        </Route>
        
        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;