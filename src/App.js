import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch,NavLink,withRouter} from 'react-router-dom';
import Welcome from './Welcome';
import FirstPage from './FirstPage';
import About from './About';
import PortFolio from './PortFolio';
import Blog from './Blog';
import Contact from './Contact';
import Header from './Header';

class App extends React.Component {

  render(){  
      return( 
    <Switch>
      <Route exact path='/' component={Welcome} />
      <Route path='/about' component={About} />
      <Route path='/portFolio' component={PortFolio} />
      <Route path='/blog' component={Blog} />
      <Route path='/contact' component={Contact} />
    </Switch>
  
      );
}
}


export default App;
