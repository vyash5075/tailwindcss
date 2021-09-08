import React from 'react'
import {Link} from 'react-router-dom';

const navbar = ({toggle}) => {
    return (
      <nav class="flex justify-between items-center h-16 bg-white text-black relative" >
          <Link to="/" class="pl-8">EGG</Link>
          <div class="px-4 cursor-pointer md:hidden" onClick={toggle}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </div>
          <div class="pr-8 md:block hidden">
              <Link class="p-4 hover:bg-green-700" to="/">Home</Link>
              <Link class="p-4 hover:bg-gray-200" to="/menu">Menu</Link>
              <Link class="p-4 hover:bg-gray-200" to="/about">About</Link> 
              <Link class="p-4 hover:bg-gray-200" to="/contact">Contact</Link>
          </div>
      </nav>
    )
}

export default navbar
