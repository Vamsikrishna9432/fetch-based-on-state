import { useState } from 'react';
import Message from "./Message";
import './App.css';

function App() {
  const [count, setCount] = useState(10)
  
  const up = () => {
    const el = document.getElementById("va");
    setCount(parseInt(el.value))
  }

  

  return (
    <div className="App">
      <div className='se-con'>
         <p className='s'>Select Limit :  </p>
         <select className='se'  id="va">
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
         </select> 
         <button type="button" className='v' onClick={up}>Enter</button>
          
         </div>
         <Message count={count}/>
    </div>
  )
}

export default App
