import React from 'react'
import Navi from '../navi/Navi'
import { Container } from 'reactstrap'
import { Route, Switch } from 'react-router'
import Dashboard from './Dashboard';
import NotFoundPage from './../common/NotFoundPage';
import CartDetails from '../cart/CartDetails';
import FormPage from './../cart/FormPage';




const App = () => {
  return (
    <div>
      <Container>
          <Navi /> 
          <Switch>
            <Route exact path="/" component={Dashboard} /> 
            <Route exact path="/cart" component={CartDetails} />
            <Route exact path="/form" component={FormPage} />
            <Route component={NotFoundPage} /> 
          </Switch>
      </Container>
    </div>
  )
}

export default App
