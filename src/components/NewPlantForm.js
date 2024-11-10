import React from "react";
import { useState } from 'react'


function NewPlantForm( { plants, setPlants } ) {
  
  const [name, setName] = useState( '' )
  const [image, setImage] = useState( '' )
  const [price, setPrice] = useState( '' )
  
  const handleChangeName = (event) => setName(event.target.value)
  const handleChangeImage = (event) => setImage(event.target.value)
  const handleChangePrice = (event) => setPrice(event.target.value)

  function formReset(){
    setName("")
    setImage("")
    setPrice("")
}

async function handleSubmit(event) {
  event.preventDefault() 

  const newPlant = {name, image, price}

  const response = await fetch('http://localhost:6001/plants', {
    method: 'POST',
    headers: { 'Content-Type' : 'Application/JSON' },
    body: JSON.stringify(newPlant)
  })

  const data = await response.json()
  const updatedPlants = [...plants, data]

  setPlants(updatedPlants)
  formReset()
}
  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" 
        onChange={handleChangeName} value={name}/>

        <input type="text" name="image" placeholder="Image URL" 
        onChange={handleChangeImage} value={image}/>

        <input type="number" name="price" step="0.01" placeholder="Price" 
        onChange={handleChangePrice} value={price}/>

        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
