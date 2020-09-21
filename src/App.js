import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Welcome from './components/Welcome';
import About from './components/About';
import PortFolio from './components/PortFolio';
import ContactInfo from './components/ContactInfo';


class App extends React.Component {

  render(){  
      return( 
    <Switch>
      <Route exact path='/' component={Welcome} />
      <Route path='/about' component={About} />
      <Route path='/portFolio' component={PortFolio} />
      <Route path='/contact' component={ContactInfo} />
    </Switch>
  
      );
}
}


export default App;
