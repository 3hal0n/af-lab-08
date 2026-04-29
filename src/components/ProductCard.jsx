import React from 'react'

const ProductCard = ({ image, title, description }) => (
  <div className="group cursor-pointer rounded-3xl bg-white p-3 shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-2xl hover:ring-blue-100">
    <div className="aspect-square overflow-hidden rounded-2xl bg-slate-100">
      <img 
        src={image} 
        alt={title} 
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
      />
    </div>
    <div className="p-4">
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <p className="mt-1 text-sm text-slate-500 line-clamp-2">{description}</p>
    </div>
  </div>
);

export default ProductCard
