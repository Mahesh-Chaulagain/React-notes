import { useState } from "react"

function App(){
  const[name, addName] = useState('');
  function handleAddName(event){
    addName(event.target.value);
  }
  return(
    <div>
      <form>
        <label htmlFor="">
          Name:
          <input type="text" value={name} onChange={handleAddName}/>
        </label>
      </form>
      <p>welcome {name} . i hope you learn alot in this class</p>
    </div>
  )
}

export default App
