import React from 'react'
import "./App.css"
import Data from "./Components/data";

const App = () => {
  const head = "Calorie Read Only"; 
  return (
    <div className = "head">
    <h1>{head}</h1>

    <div className = "container">
      <Data />
      
      
    </div>
    </div>
  )
}

export default App
