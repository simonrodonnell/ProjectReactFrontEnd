import React from 'react'
import Park from './Park';

const ParkList = (props) => {

    if (props.parks.length === 0){
      return (<p>Loading...</p>)
    }

  const parks = props.parks.map((park, index) => {
    return (
      <li key={index} className="component-item">
      <div className="component">
      <Park park={park}/>
      </div>
      </li>
    )
  })

  return (
    <ul className="component-list">
    {parks}
    </ul>
  )
}
export default ParkList;
