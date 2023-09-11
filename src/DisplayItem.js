import React from 'react'

const DisplayItem = ({keyData}) => {
  return (
    <>
    {keyData.map((val)=>{
        return(
<div className='mainBox' key={val.id}>
        <h2>Item{val.item}</h2>
        <h2>Price{val.price}</h2>

    </div> 
        )
    })}
    
</>
  )
}

export default DisplayItem