import React from 'react'
import { useContext } from 'react'
import UserContext from '../contexts/UserContext'

const TestContextAPI = () => {
    const myData=useContext(UserContext)  //pointing to the value key in UserContextProvider
    console.log(`I like to eat ${myData.fruit}`)
    console.log(`I like to drive ${myData.car}`)
    console.log(`I like to watch ${myData.player} bat`)
  return (
    <>
    </>
  )
}

export default TestContextAPI