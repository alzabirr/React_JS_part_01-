

function App() {
  const submitHandler = (e)=>{
    e.preventDefault()
    console.log("from submit");
    
  }
 

  return (
    <div>
      {/* onSubmit is a event  */}

      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" placeholder="Enter U nsme" />
        <button>Submit</button>
      </form>

    </div>
  )
}

export default App
