import React from 'react'

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = 'px-6 py-3 rounded-lg font-medium transition-colors duration-300 text-sm md:text-base'
  const variants = {
    primary: 'bg-accent text-white hover:bg-sky-600',
    outline: 'border border-accent text-accent hover:bg-accent hover:text-white',
    ghost: 'text-slate-700 hover:text-accent'
  }

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
