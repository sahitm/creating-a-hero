import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [height, setHeight] = useState(0)
  const [superpower, setSuperpower] = useState("")
  const [isDisplayed,setIsDisplayed] = useState(false)

  function displayCharacter(event){
    setIsDisplayed(!isDisplayed)
    event.preventDefault()
  }

  return (
    <div className="App">
      <h1>Buid A Hero</h1>

      <form onSubmit={displayCharacter}>
          <div className="inputFields">
            <label htmlFor="">Name:</label>
            <input type="text" name="Name" id="Name" onChange={(event) => {setName(event.target.value)}} />
          </div>

          <div className="inputFields">
            <label htmlFor="">Age:</label>
            <input type="number" name="Age" id="Age" onChange={(event) => {setAge(event.target.value)}} />
          </div>

          <div className="inputFields">
            <label htmlFor="">Height:</label>
            <input type="number" name="Height" id="Height" onChange={(event) => {setHeight(event.target.value)}} />
          </div>

          <div className="inputFields">
            <label htmlFor="">SuperPower:</label>
            <input type="text" name="SuperPower" id="SuperPower" onChange={(event) => {setSuperpower(event.target.value)}} />
          </div>

          <button type="submit" className="btn">{ isDisplayed ? "Set New Character" : "Get Character"}</button>
      </form>

      {isDisplayed && 
      
      <div className='hero'>

        <div>{name}</div>
        <div>{age}</div>
        <div>{height}</div>
        <div>{superpower}</div>

      </div> }

      
    </div>
  )
}

export default App
