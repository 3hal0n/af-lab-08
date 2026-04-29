import React from 'react';

const Greeting = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <h1 className="text-5xl font-black tracking-tighter text-slate-900 md:text-7xl">
        Hello <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">World.</span>
      </h1>
    </div>
  );
};

export default Greeting;