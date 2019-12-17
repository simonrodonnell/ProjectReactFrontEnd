import React, {Component} from 'react'
import Request from '../../helpers/request'

class PaddockEditForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      parks: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    const request = new Request();
    request.get('http://localhost:8080/api/parks').then((data) => {
      this.setState({parks: data._embedded.parks})
    })
  }

  handleSubmit(event){
    event.preventDefault();
    const paddock = {
      "name": event.target.name.value,
      "type": event.target.type.value,
      "park": this.state.parks[0]._links.self.href
    }
    this.props.handlePaddockUpdate(paddock, this.props.paddock.id)
  }

  render(){

    return(
      <div>
      <form onSubmit={this.handleSubmit}>

      <input type="text" name="name" defaultValue={this.props.paddock.name}/>
      <input type="text" name="type" defaultValue={this.props.paddock.type}/>
      
      <button type="submit">Save</button>
      </form>
      </div>
    )
  }

}
export default PaddockEditForm
