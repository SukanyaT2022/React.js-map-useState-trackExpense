import React from 'react'

const Input = () => {
  return (
    <div>
        <h2>Expense Track</h2>
        <input type='text' placeholder='type items'/>
        <input type='number' placeholder='type $'/>
        <button>Submit</button>
    </div>
  )
}

export default Input