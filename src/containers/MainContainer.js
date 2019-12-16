import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';
import DinosaurContainer from './dinosaurs/DinosaurContainer';
import PaddockContainer from './paddocks/PaddockContainer';
import ParkContainer from './parks/ParkContainer';

const MainContainer = () => {

  return (
    <Router>
    <Fragment>
    <NavBar/>
    <Switch>
      <Route path="/parks" component={ParkContainer} />
      <Route path="/dinosaurs" component={DinosaurContainer} />
      <Route path="/paddocks" component={PaddockContainer} />
    </Switch>
    </Fragment>
    </Router>
  )
}
export default MainContainer;
