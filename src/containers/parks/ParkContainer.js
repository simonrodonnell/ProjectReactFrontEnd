import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ParkList from '../../components/parks/ParkList';
import ParkDetail from '../../components/parks/ParkDetail';
import ParkEditForm from '../../components/parks/ParkEditForm';




import Request from '../../helpers/request';

class ParkContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      parks: []
    }
    this.findParkById = this.findParkById.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  componentDidMount(){
    const request = new Request();

    request.get('http://localhost:8080/api/parks')
    .then((data) => {
      this.setState({parks: data._embedded.parks})
    })
  }

  findParkById(id){
    return this.state.parks.find((park) => {
      return park.id === parseInt(id);
    });
  }

  handleUpdate(park, id){
    const request = new Request();
    request.patch('http://localhost:8080/api/parks/' + id, park).then(() => {
      window.location = '/parks/' + id
    })
  }

  render(){
    return (
      <Router>
      <Fragment>
      <Switch>


      <Route exact path="/parks/:id/edit" render={(props) => {
        const id = props.match.params.id;
        const park = this.findParkById(id);
        return <ParkEditForm park={park} handleParkUpdate={this.handleUpdate} />
      }}/>

      <Route render={(props) => {
        const id = props.match.params.id;
        const park = this.findParkById(1);
        return <ParkDetail park={park} onDelete={this.handleDelete}/>
      }}/>

      </Switch>
      </Fragment>
      </Router>
    )
  }

}
export default ParkContainer
