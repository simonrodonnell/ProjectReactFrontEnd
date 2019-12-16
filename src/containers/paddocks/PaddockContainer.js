import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PaddockList from '../../components/paddocks/PaddockList';
import PaddockDetail from '../../components/paddocks/PaddockDetail';




import Request from '../../helpers/request';

class PaddockContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      paddocks: []
    }
    this.findPaddockById = this.findPaddockById.bind(this)
  }

  componentDidMount(){
    const request = new Request();

    request.get('http://localhost:8080/api/paddocks')
    .then((data) => {
      this.setState({paddocks: data._embedded.paddocks})
    })
  }

  findPaddockById(id){
    return this.state.paddocks.find((paddock) => {
      return paddock.id === parseInt(id);
    });
  }

  render(){
    return (
      <Router>
      <Fragment>
      <Switch>

      <Route exact path='/paddocks/:id' render={(props) => {
        const id = props.match.params.id;
        const paddock = this.findPaddockById(id);
        return <PaddockDetail paddock={paddock} onDelete={this.handleDelete}/>
      }}/>

      <Route render={(props) => {
        return <PaddockList paddocks={this.state.paddocks}/>
      }}/>

      </Switch>
      </Fragment>
      </Router>
    )
  }

}
export default PaddockContainer
