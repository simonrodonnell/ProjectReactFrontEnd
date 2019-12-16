import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'

const Paddock = (props) => {
  if(!props.paddock){
    return "Loading..."
  }

const url = "/paddocks/" + props.paddock.id;
// console.log("URL:", url)

return(

  <Fragment>
  <Link to = {url} className="name">
  {props.paddock.name}
  </Link>
  <p>Type: {props.paddock.type}</p>
  </Fragment>
)
}
export default Paddock;
