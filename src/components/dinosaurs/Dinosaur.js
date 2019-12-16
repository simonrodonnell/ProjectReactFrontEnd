import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'

const Dinosaur = (props) => {
  if(!props.dinosaur){
    return "Loading..."
  }

const url = "/dinosaurs/" + props.dinosaur.id;
// console.log("URL:", url)

return(

  <Fragment>
  <Link to = {url} className="name">
  {props.dinosaur.name}
  </Link>
  <p>Type: {props.dinosaur.type}</p>
  </Fragment>
)
}
export default Dinosaur;
