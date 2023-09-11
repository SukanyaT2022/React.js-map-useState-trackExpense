import React, { useState } from 'react'
import Input from './Input'
import DisplayItem from './DisplayItem'

const App = () => {
const[data,setData]=useState([
{
id:1,
item: "grocery",
price: 300,
},
{
  id:2,
  item: "book",
  price: 200,
  },
  {
    id:3,
    item: "school",
    price: 400,
    },
    
])

  return (
    <div>
      <Input/>
      <DisplayItem keyData ={data}/>
    </div>
  )
}

export default App
