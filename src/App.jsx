// import Decreament from "./Decreament"
// import Increament from "./Increament"
import {useSelector} from 'react-redux'
import Card from './Cards/Card'
import Cart from './Cart'


function App() {
// const count=useSelector((state)=> state.counter)
  return (
    <div>
{/* <h1>Counter</h1>
<h2>{count}</h2>
<Increament/>{" "}
<Decreament/> */}
<Cart/>
<Card/>
    </div>
  )
}

export default App
