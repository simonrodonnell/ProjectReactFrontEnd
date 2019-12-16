import React, {Component} from 'react';
import Request from '../../helpers/request';

class DinosaurCreateForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      type: "",
      paddocks: []
    }
    this.handleName = this.handleName.bind(this)
    this.handleType = this.handleType.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    const request = new Request();
    request.get('http://localhost:8080/api/paddocks').then((data) => {
      this.setState({paddocks: data._embedded.paddocks})
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
    const newDinosaur = {
      name: this.state.name,
      type: this.state.type,
      paddock: event.target.paddock.value
    }
    this.props.onFormSubmit(newDinosaur);
    console.log("New Dinosaur:", newDinosaur)
  }

  render() {

    if(!this.state.paddocks.length === 0){
      return <p>Loading...</p>
    }

    const paddockOptions = this.state.paddocks.map((paddock, index) => {
      return <option key={index} value={paddock._links.self.href}>{paddock.type}</option>
    })

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Name" name="name" onChange={this.handleName} value={this.state.name}/>
          <input type="text" placeholder="Type" name="type" onChange={this.handleType} value={this.state.type}/>

          <select name="paddock">
          {paddockOptions}
          </select>

          <button type="submit">Save</button>
        </form>
      </div>
    )

  }
}

export default DinosaurCreateForm
