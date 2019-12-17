import React from 'react'
import Paddock from './Paddock'
import {Link} from 'react-router-dom'

const PaddockDetail = (props) => {

  if(!props.paddock){
    return "Loading..."
  }

  let dinosaurs = [];
  if (props.paddock._embedded.dinosaurs) {
    dinosaurs = props.paddock._embedded.dinosaurs.map((dinosaur, index) => {
      return <li key={index}>{dinosaur.name}</li>
    })
  }


  const handleDelete = () => {
    props.onDelete(props.paddock.id)
  }

  const editUrl = "/paddocks/" + props.paddock.id + "/edit";
  // const transferUrl = "/paddocks/" + props.paddock.id + "/transfer";
  // </Link>
  // <Link to={transferUrl}><button type="button">Transfer Dinosaur</button></Link>

  // console.log(props.paddock._embedded.dinosaurs);
  return (

    <div className="component">
    <Paddock paddock={props.paddock}/>
    <p>Dinosaurs: </p>
    <ul>
    {dinosaurs}
    </ul>
    <button onClick={handleDelete}>Delete {props.paddock.name}</button>
    <Link to={editUrl}><button type="button">Edit {props.paddock.name}</button></Link>
    </div>
  )
}
export default PaddockDetail;
