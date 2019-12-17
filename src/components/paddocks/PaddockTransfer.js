import React, {Component} from 'react';
import Request from '../../helpers/request';

class PaddockTransfer extends Component {
  constructor(props) {
    super(props)
    this.state={
      dinosaurs: [],
      paddocks: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.setState({dinosaurs: this.props.paddock._embedded.dinosaurs})
  }

  componentDidMount() {
    const request = new Request();
    const dinoPromise = request.get('http://localhost:8080/api/dinosaurs')
    const paddockPromise = request.get('http://localhost:8080/api/paddocks')
    Promise.all([dinoPromise, paddockPromise])
    .then((data) => {
      this.setState({dinosaurs: data[0]._embedded.dinosaurs, paddocks: data[1]._embedded.paddocks})
    })
  }

  handleSubmit(event){
    event.preventDefault();
    const dinosaur = {
      "type": event.target.dinosaur.value.type,
      "name": event.target.dinosaur.value.name,
      "paddock": event.target.paddock.value
    }
    console.log("DinoValue:", event.target.dinosaur.value);
    this.props.handleTransfer(dinosaur, event.target.dinosaur.value.id)
  }


  render() {

    const dinosaurOptions = this.state.dinosaurs.map((dinosaur, index) => {
      return <option key={index} value={dinosaur}>{dinosaur.name}</option>
    })

    const paddockOptions = this.state.paddocks.map((paddock, index) => {
      return <option key={index} value={paddock._links.self.href}>{paddock.name}</option>
    })

    return(
      <div>
        <form onSubmit={this.handleSubmit}>

          <select name="dinosaur">
            {dinosaurOptions}
          </select>

          <select name="paddock">
            {paddockOptions}
          </select>

          <button type="submit">Transfer</button>
        </form>
      </div>
    )
  }
}

export default PaddockTransfer
