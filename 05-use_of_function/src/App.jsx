import React from 'react'


const App = () => {

  function btnClicked (){
    console.log("Btn is clicked");
 

  }
  return (
    <div>
      <h1>Hello, Al Zabir</h1>
      <button onClick={btnClicked}>Change User</button>
      <button onDoubleClick={btnClicked}>DB Click</button>



      <button onClick={function innerclick(){
        console.log("ok done clicked ")
      }}>Inner Function</button>
      
      
    </div>
  )
}

export default App