import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import { useState, useEffect } from 'react'

function App() {
  const [plants, setPlants] = useState( [] )

  async function getPlants() {
    const response = await fetch('http://localhost:6001/plants')
    const plantData = await response.json()
    setPlants(plantData)
  }

  useEffect(() => {
    getPlants()
  }, [])
  
  return (
    <div className="app">
      
      <Header />

      <PlantPage plants={plants} setPlants={setPlants}/>
    </div>
  );
}

export default App;
