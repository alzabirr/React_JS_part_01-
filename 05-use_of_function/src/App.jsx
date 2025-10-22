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
      
      
      <button onClick={function add(){
        alert("hi man")
      }}>click here </button>



      {/* input area  */}

      <input onChange={function(elem){
        console.log(elem.target.value);
        
      }} type="text" placeholder='Enter Name' />



    <input type="password" onChange={function(elem){
      console.log(elem.target.value)

    }} />

      <div  onMouseMove={(e)=>{
        console.log(e.clientX)
      }} className='box'></div>

    </div>
  )
}

export default App