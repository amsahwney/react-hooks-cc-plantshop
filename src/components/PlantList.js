import React from "react";
import PlantCard from "./PlantCard";

function PlantList( { plants, setPlants, searchPlant, setSearchPlant } ) {
  
  const filteredPlants = plants.filter(plant => plant.name.toLowerCase().includes(searchPlant.toLowerCase()))
  const mappedPlants = filteredPlants.map(p => <PlantCard key={p.id} plant={p} 
  setPlants = {setPlants} setSearchPlant={setSearchPlant}/>)

  return (
    <ul className="cards">

      {mappedPlants}

    </ul>
  );
}

export default PlantList;
