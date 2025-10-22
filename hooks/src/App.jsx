import React from 'react'

const App = () => {

  function clickhoice(el){
    console.log(el)
    
  }
  return (
    <div>
      <button onClick={clickhoice}>okk</button>
    </div>
  )
}

export default App