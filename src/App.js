import React, { Fragment, } from 'react';
import { Container, } from "semantic-ui-react";
import { Switch, Route, } from "react-router-dom";
import Home from './Home';
import Navbar from './Navbar';
import UserProfile from './UserProfile';

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
          path="/user/profile"
          component={UserProfile}
        />
      </Switch>
    </Container>
  </Fragment>
)

export default App;