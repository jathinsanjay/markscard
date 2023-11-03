// Navbar.js
import React from 'react';


const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 ">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex items-center">
        
          <div className="md:text-2xl text-xl font-bold">SRM KTR</div>
        </div>
        <div className="md:text-2xl text-white font-extrabold">PHD Course work Results-CT 2</div>
        <div className="md:text-2xl  font-bold">School Of computing</div>
      </div>
    </nav>
  );
};

export default Navbar;
