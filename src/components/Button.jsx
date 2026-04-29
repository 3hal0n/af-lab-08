import React from 'react'

const Button = ({ label, variant = 'primary', size = 'md' }) => {
  const base = "inline-flex items-center justify-center font-semibold transition-all active:scale-95 disabled:opacity-50";
  
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200",
    secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
    ghost: "text-indigo-600 hover:bg-indigo-50"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs rounded-lg",
    md: "px-5 py-2.5 text-sm rounded-xl",
    lg: "px-8 py-4 text-base rounded-2xl"
  };

  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]}`}>
      {label}
    </button>
  );
};

export default Button
