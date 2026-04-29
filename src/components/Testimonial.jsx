import React from 'react'

const Testimonial = ({ quote, name, photo }) => (
  <div className="relative rounded-3xl bg-white p-8 shadow-sm border border-slate-100">
    <span className="absolute top-6 left-8 text-6xl text-slate-100 font-serif">“</span>
    <div className="relative z-10">
      <p className="mb-8 text-xl font-medium leading-relaxed text-slate-700 italic">
        {quote}
      </p>
      <div className="flex items-center gap-4">
        <img src={photo} className="h-12 w-12 rounded-full object-cover ring-2 ring-indigo-50" alt={name} />
        <div>
          <p className="font-bold text-slate-900">{name}</p>
          <p className="text-xs font-semibold text-indigo-500 uppercase tracking-widest">Product Designer</p>
        </div>
      </div>
    </div>
  </div>
);

export default Testimonial
