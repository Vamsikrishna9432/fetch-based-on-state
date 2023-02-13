import { useState } from 'react';
import Message from "./Message";
import './App.css';

function App() {
  const [count, setCount] = useState(10)
  
  

  

  return (
    <div className="App">
      <div className='se-con'>
         <p className='s'>Select Limit :  </p>
         <select className='se' onChange={(e) => setCount(parseInt(e.target.value))}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
         </select> 
         <button type="button" className='v'>Enter</button>
          
         </div>
         <Message count={count}/>
    </div>
  )
}

export default App
