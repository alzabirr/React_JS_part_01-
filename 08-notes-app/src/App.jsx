import React from 'react'

const App = () => {
  const submitHandler =(e)=>{
    e.preventDefault()
    console.log("from Submitted");
    

  }
  return (
    <div className='h-screen  bg-black text-white '>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex  justify-between p-10 flex-col items-center font-mono ' >
        <div className='flex  w-1/2 items-start flex-col gap-4'> 
          <input
         type="text" 
         placeholder='Enter Notes Heading' 
         className='px-5 py-2 border-2  rounded w-full outline-none'
         />

         <textarea
          type="text"
          placeholder='Write Details'
          className='px-5 py-2 border-2  rounded w-full outline-none'
          
          />
          <button className='px-5 py-2 border-2  rounded bg-amber-50 text-black w-full'>Add Note</button>
        </div>
        
      

      </form>

    </div>
  )
}

export default App