import React from 'react'

const NavBar = () => (
  <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex justify-between items-center">
    <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
      Brand.
    </div>
    <ul className="flex gap-8 text-sm font-medium text-slate-600">
      <li className="hover:text-blue-600 transition-colors cursor-pointer">Home</li>
      <li className="hover:text-blue-600 transition-colors cursor-pointer">Products</li>
      <li className="hover:text-blue-600 transition-colors cursor-pointer">About</li>
    </ul>
  </nav>
);

export default NavBar
