import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';
import DinosaurContainer from './dinosaurs/DinosaurContainer';

const MainContainer = () => {

  return (
    <Router>
    <Fragment>
    <NavBar/>
    <Switch>
      <Route path="/dinosaurs" component={DinosaurContainer} />
    </Switch>
    </Fragment>
    </Router>
  )
}
export default MainContainer;
