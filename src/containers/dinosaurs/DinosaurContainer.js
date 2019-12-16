import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DinosaurList from '../../components/dinosaurs/DinosaurList';
import DinosaurDetail from '../../components/dinosaurs/DinosaurDetail';
import DinosaurCreateForm from '../../components/dinosaurs/DinosaurCreateForm';
import DinosaurEditForm from '../../components/dinosaurs/DinosaurEditForm';
import Request from '../../helpers/request';

class DinosaurContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      dinosaurs: []
    }
  }
  componentDidMount(){
    const request = new Request();

    request.get('/api/dinosaurs')
    .then((data) => {
      // console.log("Data: ", data);
      this.setState({dinosaurs: data._embedded.dinosaurs})
    }
  )
}

render(){
  return(
    <Router>
    <Fragment>
    <Switch>
        <Route render={(props) => {
          return <DinosaurList dinosaurs={this.state.dinosaurs}/>
        }}/>
    </Switch>
    </Fragment>
    </Router>
  )
}
}
export default DinosaurContainer;
