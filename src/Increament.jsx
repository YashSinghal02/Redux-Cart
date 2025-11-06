import React from 'react'
import { useDispatch } from 'react-redux'
import { increase } from './counterSlice/counterSlice'

function Increament() {
    const dispatch=useDispatch();
  return (
    <>
      <button className='border' onClick={()=>dispatch(increase())}>Increament</button>
    </>
  )
}

export default Increament
