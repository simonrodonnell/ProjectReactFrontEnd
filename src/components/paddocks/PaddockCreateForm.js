import React, {Component} from 'react';
import Request from '../../helpers/request';

class PaddockCreateForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      type: "",
      parks: []
    }
    this.handleName = this.handleName.bind(this)
    this.handleType = this.handleType.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    const request = new Request();
    request.get('http://localhost:8080/api/parks').then((data) => {
      this.setState({parks: data._embedded.parks})
    })
  }

  handleName(event){
    this.setState({name: event.target.value})
  }

  handleType(event){
    this.setState({type: event.target.value})
  }

  // TODO : handleSubmit not adding to sql database

  handleSubmit(event){
    event.preventDefault();
    const newPaddock = {
      name: this.state.name,
      type: this.state.type,
      park: this.state.parks[0]._links.self.href
    }
    this.props.onFormSubmit(newPaddock);
    console.log("New Paddock:", newPaddock)
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Name" name="name" onChange={this.handleName} value={this.state.name}/>
          <input type="text" placeholder="Type" name="type" onChange={this.handleType} value={this.state.type}/>

          <button type="submit">Save</button>
        </form>
      </div>
    )

  }
}

export default PaddockCreateForm
