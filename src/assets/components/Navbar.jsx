import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <nav className='border-b-2 border-gray-400 p-8'>
            <ul className='flex justify-end p8'>
              <li>
                <Link to ='/Home' className='mx-4 font-bold cursor-pointer'>Home</Link>
                <Link to ='/Owner' className='mx-4 font-bold cursor-pointer'>Owner</Link>
              </li>
            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Navbar;