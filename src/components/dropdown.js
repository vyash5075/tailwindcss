import React from 'react'
import {Link } from 'react-router-dom';

const dropdown = ({isOpen,toggle}) => {
    return (
        <div className={isOpen?"grid grid-rows-4 text-center items-center bg-yellow-500":"hidden"} onClick={toggle}>
             <Link class="p-4 hover:bg-gray-200" to="/">Home</Link>
              <Link class="p-4 hover:bg-gray-200" to="/menu">Menu</Link>
              <Link class="p-4 hover:bg-gray-200" to="/about">About</Link> 
              <Link class="p-4 hover:bg-gray-200" to="/contact">Contact</Link> 
        </div>
    )
}

export default dropdown
