import React, {Component} from 'react'
import Request from '../../helpers/request'

class DinosaurEditForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      paddocks: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    const request = new Request();
    request.get('http://localhost:8080/api/paddocks').then((data) => {
      this.setState({paddocks: data._embedded.paddocks})
    })
  }

  handleSubmit(event){
    event.preventDefault();
    const dinosaur = {
      "name": event.target.name.value,
      "type": event.target.type.value,
      "paddock": event.target.paddock.value
    }
    this.props.handleDinosaurUpdate(dinosaur, this.props.dinosaur.id)
  }

  render(){

    const paddockOptions = this.state.paddocks.map((paddock, index) => {
      return <option key={index} value={paddock._links.self.href}>{paddock.type}</option>
    })

    return(
      <div>
      <form onSubmit={this.handleSubmit}>
      <input type="text" name="name" defaultValue={this.props.dinosaur.name}/>
      <input type="text" name="type" defaultValue={this.props.dinosaur.type}/>

      <select name="paddock">
      {paddockOptions}
      </select>

      <button type="submit">Save</button>
      </form>
      </div>
    )
  }

}
export default DinosaurEditForm
