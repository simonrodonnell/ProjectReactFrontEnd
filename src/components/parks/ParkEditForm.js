import React, {Component} from 'react'
import Request from '../../helpers/request'

class ParkEditForm extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault();
    const park = {
      "name": event.target.name.value
    }
    this.props.handleParkUpdate(park, this.props.park.id)
  }

  render(){
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
      <input type="text" name="name" defaultValue={this.props.park.name}/>
      <button type="submit">Save</button>
      </form>
      </div>
    )
  }

}
export default ParkEditForm
