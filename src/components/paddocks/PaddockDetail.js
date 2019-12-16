import React from 'react'
import Paddock from './Paddock'
import {Link} from 'react-router-dom'

const PaddockDetail = (props) => {

  if(!props.paddock){
    return "Loading..."
  }

  const handleDelete = () => {
    props.onDelete(props.paddock.id)
  }

  const editUrl = "/paddocks/" + props.paddock.id + "/edit";

  return (

    <div className="component">
    <Paddock paddock={props.paddock}/>
    <p>I'm a paddock</p>
    <button onClick={handleDelete}>Delete {props.paddock.type}</button>
    <Link to={editUrl}><button type="button">Edit {props.paddock.type}</button>
    </Link>
    </div>
  )
}
export default PaddockDetail;
