import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PaddockList from '../../components/paddocks/PaddockList';
import PaddockDetail from '../../components/paddocks/PaddockDetail';
import PaddockTransfer from '../../components/paddocks/PaddockTransfer'
import Request from '../../helpers/request';
import PaddockCreateForm from '../../components/paddocks/PaddockCreateForm'
import PaddockEditForm from '../../components/paddocks/PaddockEditForm'


class PaddockContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      paddocks: []
    }
    this.findPaddockById = this.findPaddockById.bind(this)
    // this.handleTransfer = this.handleTransfer.bind(this)
    this.handlePost = this.handlePost.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  componentDidMount(){
    const request = new Request();

    request.get('http://localhost:8080/api/paddocks')
    .then((data) => {
      this.setState({paddocks: data._embedded.paddocks})
    })
  }

  // handleTransfer(dinosaur, id){
  //   const request = new Request();
  //   request.patch('http://localhost:8080/api/dinosaurs/' + id, dinosaur)
  // .then(() => {
  // window.location = 'dinosaurs/' + id;
  // })
  // }

  handlePost(paddock) {
    const request = new Request();
    request.post('http://localhost:8080/api/paddocks', paddock)
    .then(() => {
      window.location = '/paddocks'
    })
  }

  handleUpdate(paddock, id){
    const request = new Request();
    request.patch('http://localhost:8080/api/paddocks/' + id, paddock).then(() => {
      window.location = '/paddocks/' + id
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

      <Route exact path='/paddocks/new' render={() => {
        return <PaddockCreateForm onFormSubmit={this.handlePost}/>
      }}/>

      <Route exact path="/paddocks/:id/edit" render={(props) => {
        const id = props.match.params.id;
        const paddock = this.findPaddockById(id);
        return <PaddockEditForm paddock={paddock} handlePaddockUpdate={this.handleUpdate} />
      }}/>

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
