import React from 'react'
import UserContext from './UserContext'
import { useState } from 'react'

function UserContextProvider ({children})
{
   let fruit="Mango"
   let car="Audi"
   let player="Virat"
   const [user,setUser]=useState(
    {
       jno:45,
       uname:'Rohit' ,
       mp:100
    }
   )

   function greet(value)
   {
    console.log(`Hi ${value}`)
   }

   let k=99;

  return (
    <UserContext.Provider value={{fruit,player,car,user}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider