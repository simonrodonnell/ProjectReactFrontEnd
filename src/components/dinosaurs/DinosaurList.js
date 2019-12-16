import React from 'react'
import Dinosaur from './Dinosaur';

const DinosaurList = (props) => {

    if (props.dinosaurs.length === 0){
      return (<p>Loading...</p>)
    }

  const dinosaurs = props.dinosaurs.map((dinosaur, index) => {
    return (
      <li key={index} className="component-item">
      <div className="component">
      <Dinosaur dinosaur={dinosaur}/>
      </div>
      </li>
    )
  })

  return (
    <ul className="component-list">
    {dinosaurs}
    </ul>
  )
}
export default DinosaurList;
