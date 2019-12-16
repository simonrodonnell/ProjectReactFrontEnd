import React from 'react'
import Park from './Park'
import {Link} from 'react-router-dom'

const ParkDetail = (props) => {

  if(!props.park){
    return "Loading..."
  }

  const handleDelete = () => {
    props.onDelete(props.park.id)
  }

  const editUrl = "/parks/" + props.park.id + "/edit";

  return (

    <div className="component">
    <Park park={props.park}/>
    <p>I'm a park</p>
    <button onClick={handleDelete}>Delete</button>
    <Link to={editUrl}><button type="button">Edit</button>
    </Link>
    </div>
  )
}
export default ParkDetail;
