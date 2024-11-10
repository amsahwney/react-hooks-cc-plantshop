import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState } from 'react'

function PlantPage( {plants, setPlants} ) {

  const [searchPlant, setSearchPlant] = useState("")

  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants} />
      <Search setSearchPlant={setSearchPlant}/>
      <PlantList plants={plants} setPlants={setPlants} 
      searchPlant={searchPlant} setSearchPlant={setSearchPlant}/>
    </main>
  );
}

export default PlantPage;
