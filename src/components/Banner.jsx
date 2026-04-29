import React from 'react'

const Banner = ({ message }) => {
  return (
    <section className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 py-20 px-8 text-center shadow-2xl">
      {/* Background Decorative Elements */}
      <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-blue-600/20 blur-[80px]"></div>
      <div className="absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-indigo-600/20 blur-[80px]"></div>

      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Badge */}
        <span className="inline-block rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-blue-400 ring-1 ring-inset ring-blue-500/20 mb-6">
          Limited Time Offer
        </span>

        {/* Main Message */}
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-6">
          {message || "Scale Your Vision Faster"}
        </h2>

        {/* Subtext */}
        <p className="mb-10 text-lg leading-relaxed text-slate-400">
          Join over 10,000+ developers building beautiful interfaces with our 
          premium React components and optimized workflows.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button className="rounded-xl bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-900/20 transition-all hover:bg-blue-500 hover:shadow-blue-900/40 active:scale-95">
            Get Started Now
          </button>
          <button className="rounded-xl bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/10 active:scale-95 ring-1 ring-white/10">
            View Pricing
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner
