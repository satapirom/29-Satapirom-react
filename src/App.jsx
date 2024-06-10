import { useState } from 'react'
import './App.css'
import Navbar from './assets/components/Navbar'
import Admin from './assets/components/Admin'


const App = () => {
  const [data, setData] = useState([]);

  console.log(data);

  return (
    <div className='bg-[#E9E9E9] h-screen'>
      <Navbar />
      <Admin data={data} setData={setData} />
    </div>
  )
}

export default App
