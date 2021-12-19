import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Inicio from './components/pages/Inicio'
import Pedidos from './components/pages/Pedidos'
import Nosotros from './components/pages/Nosotros'
import Contactos from './components/pages/Contactos'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Inicio} />
          <Route path='/pedidos' component={Pedidos} />
          <Route path='/nosotros' component={Nosotros} />
          <Route path='/contactos' component={Contactos}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
