import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'

const Park = (props) => {
  if(!props.park){
    return "Loading..."
  }

const url = "/parks/" + props.park.id;
// console.log("URL:", url)

return(

  <Fragment>
  <h1 className="name">
  {props.park.name}
  </h1>
  </Fragment>
)
}
export default Park;
