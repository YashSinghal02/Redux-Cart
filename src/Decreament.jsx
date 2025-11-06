import { useDispatch } from 'react-redux'
import { decrease } from './counterSlice/counterSlice'

function Decreament() {
    const dispatch=useDispatch();
  return (
    <>
          <button className='border' onClick={()=>dispatch(decrease())}>Decreament</button>
    </>
  )
}

export default Decreament
