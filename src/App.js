import React, { Fragment, } from 'react';
import { Container, } from "semantic-ui-react";
import { Switch, Route, } from "react-router-dom";
import Home from './Home';
import Navbar from './Navbar';
import User from './User';

const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route
          exact
          path="/"
          component={Home}
        />
        <Route
          exact
          path="/user"
          component={User}
        />
      </Switch>
    </Container>
  </Fragment>
)

export default App;