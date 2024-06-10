import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import User from './User';
import Admin from './Admin';

const Home = () => {
  const [data, setData] = useState([]);
  const [changePage, setChangePage] = useState(0)

  return (
    <div className='text-center pb-8'>
      <h1 className='text-5xl font-bold py-8'>Generation Thailand <br /> React-Assessment</h1>
      <div className='flex justify-center'>
        <button className='mx-16 font-bold px-4 py-4 text-center shadow-lg bg-white ' onClick={() => setChangePage(1)}>User Home Sector</button>
        <button className='mx-16 font-bold px-4 py-4 text-center shadow-lg bg-white ' onClick={() => setChangePage(2)}>Admin Home Sector</button>
      </div>
      <div>
      </div>

      {
        changePage === 0 ? null :
          changePage === 1 ? <User data={data} /> :
            changePage === 2 !== null ? <Admin data={data} setData={(value) => setData(value)} /> :
              null
      }

    </div>
  )
}

export default Home;
