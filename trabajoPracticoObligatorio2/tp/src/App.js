import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import Login from './pages/login';
import Registro from './pages/registro';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom"
import Header from './components/header';
import Footer from './components/footer';
import Detalle from './pages/detalles';
import Container from 'react-bootstrap/Container';
import NotFound from './pages/notFound';
import Slider from './components/slider';
import CrearMisCriptos from './pages/ABMcriptos/crearCriptos';
import MisCriptos from './pages/misCriptos';
import AuthProvider from './context/AuthProvider';
import AuthContext from './context/AuthContext';
import context from 'react-bootstrap/esm/AccordionContext';
function App() {
  return (
    <AuthProvider>
      <div>
        <Router>
          <Slider/>
            <Header/>
            <Container>
              <AuthContext.Consumer>
                {
                  context=>
                  <Switch>
                    <Route path="/login">
                       <Login/>
                    </Route>
                
                    <Route path="/registro">
                      <Registro/>
                    </Route>
                
                    <Route path="/producto/:data">
                      <Detalle/>
                    </Route>
                    {
                      context.userLogin &&
                      <Route path="/crearCriptos">
                        <CrearMisCriptos/>
                      </Route>
                    }

                    {
                      context.userLogin &&
                      <Route path="/misCriptos">
                        <MisCriptos/>
                      </Route>
                    }
                
                    <Route path="/">
                      <Home/>
                    </Route>
                
                    <Route path="*">
                      <NotFound/>
                    </Route>
                  </Switch>
                }
              </AuthContext.Consumer>
            </Container>
          <Footer/>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
