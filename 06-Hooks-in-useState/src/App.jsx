// // import React, { useState } from 'react'

// // const App = () => {
// //   const [click, clickUpdate] = useState(10)
// //   return (
// //     <div>
// //       <h1>Click : {click}</h1>
// //       <button onClick={()=>}></button>  
// //     </div> 
// //   )
// // }

// // export default App


// // import React, { useState } from 'react'


// // const App = () => {
// //   const [num, setnum]= useState(1)


// //   function incrige(){
// //     setnum(num+1)
// //   }

// //   function decrige (){
// //     setnum(num-1)
// //   }
// //   return (
// //     <div>
// //       <h1>{num}</h1>
// //       <button onClick={incrige}>incrige</button>
// //       <button onClick={decrige}>decrige</button>
      
// //     </div>
// //   )
// // }

// // export default App


// import React, { useState } from 'react'

// const App = () => {
//     var [set, setNumber] =useState(2)
//     function hit (){
//         setNumber
//     }
//   return (
//     <div>
//         <h1 onClick={set}>count :</h1>
//         <button>hit this </button>
//     </div>
//   )
// }

// export default App













// d staccharing
// import React, { useState } from 'react'

// const App = () => {
//     const [num,setnum] = useState({user: "rafi", age :20})

//     const btnclick = ()=>{
//         const newNum = {...num}
//         newNum.user = "kafi"
//         newNum.age = 23
//         setnum(newNum)
//     }
//   return (
//     <div>
//         <h1> number is :{num.user}, {num.age}</h1>
//         <button onClick={btnclick}>click here </button>
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {
//     const [num,setnum] = useState([1,2,3,4,5,6])

//     const btnClick =()=>{
//         const newNum = [...num]
//         newNum.push(2,3,4,6,7)
//         setnum(newNum)
//     }

//   return (
//     <div>
//         <h1>{num}</h1>
//         <button onClick={btnClick}>hit this </button>
        

//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react'

// const App = () => {
//   const [name, setName] = useState({user : "rafi", age : 23})

//   const clickBTN = ()=>{
//     const newName = {...name}
//     newName.user = "kafi"
//     newName.age = 24
//     setName(newName)
    

//   }
//   return (
//     <div>
//       <h1>numbers : {name.user} age is :{name.age}</h1>
//       <button onClick={clickBTN}>hit </button>
//     </div>
//   )
// }

// export default 








// import React, { useState } from 'react'

// const App = () => {
//   var [name ,setName ] = useState({user : "rafi", roll:31 })
//   const clickHere = ()=>{
//     const newName = {...name}
//     newName.user = "Hudaii"
//     setName(newName) 
//   }
//   return (
//     <div>
//       <h1>name : {name.user}</h1>
//       <button onClick={clickHere}>cl;ick</button>
//     </div>
//   )
// }

// export default App
// import React, { useState } from 'react'

// const App = () => {
//   const [name, usename] = useState({namee : "rafi"})
//   const cclickBtn = ()=>{
//     const newName = {...namee}
//     newName.namee = "kafooo"
//     usename(newName)
//   }
//   return (
//     <div>
//       <h1>name : {name.namee}</h1>
//       <button onClick={cclickBtn}>ok ok </button>
//     </div>
//   )
// }

// export default App






import React, { useState } from 'react'

const App = () => {
  const [name, namesate] =useState({user :"rafi", id : 123456})
    const clickHere = ()=>{
      const newName ={...name}
      newName.user = "kafi"
      newName.id = 12656
      namesate(newName)
    }




  return (
    <div>
      <h1>name : {name.user} {name.id}</h1>
      <button onClick={clickHere}>clockhere</button>
    </div>
  )
}

export default App