import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Welcome from './Welcome';
import About from './About';
import PortFolio from './PortFolio';
import Blog from './Blog';
import Contact from './Contact';

function App() {
  return(
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Welcome} />
      <Route path='/about' component={About} />
      <Route path='/portFolio' component={PortFolio} />
      <Route path='/blog' component={Blog} />
      <Route path='/contact' component={Contact} />
    </Switch>
  
  </BrowserRouter>
  );
}



export default App;
