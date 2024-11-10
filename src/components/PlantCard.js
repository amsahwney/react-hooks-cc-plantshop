import React from "react";
import { useState } from "react"

function PlantCard( {plant, setPlants} ) {
  const [stock, toggleStock] = useState(true)
  
  function handleStock() {
    toggleStock(stock => stock ? false : true)
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={ plant.image } alt={ plant.name } />
      <h4>{ plant.name }</h4>
      <p>Price: { plant.price }</p>
      {stock ? (
        <button className="primary" onClick = {handleStock}> In Stock </button>
      ) : (
        <button onClick = {handleStock}> Out of Stock </button>
      )}
    </li>
  );
}

export default PlantCard;
