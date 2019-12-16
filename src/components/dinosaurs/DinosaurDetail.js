import React from 'react'
import Dinosaur from './Dinosaur'
import {Link} from 'react-router-dom'

const DinosaurDetail = (props) => {

  if(!props.dinosaur){
    return "Loading..."
  }

  const handleDelete = () => {
    props.onDelete(props.dinosaur.id)
  }

  const editUrl = "/dinosaurs/" + props.dinsoaur.id + "/edit";

  return (

    <div className="component">
    <Dinosaur dinosaur= {props.dinosaur}/>
    <button onClick={handeDelete}>Delete {props.dinosaur.name}</button>
    <Link to={editUrl}><button type="button">Edit {props.dinosaur.name}</button></Link>
    </div>
  )
}
export default DinosaurDetail;
