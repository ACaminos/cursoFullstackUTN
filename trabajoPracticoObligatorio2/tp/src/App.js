import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import Login from './pages/login';
import Registro from './pages/registro';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom"
import Card from './components/crypto';
import Header from './components/header';
import Footer from './components/footer';
function App() {
  return (
    <div>
      <Router>
        <Header/>
        <div className="container">
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/registro">
            <Registro/>
          </Route>
          <Route path="/card">
            <Card/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
