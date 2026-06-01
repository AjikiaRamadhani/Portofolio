import React from 'react';

const Preloader = () => {
  return (
    // Memenuhi seluruh layar, posisi paling depan (z-[100]), dan background sama dengan web
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-bg-main">
      {/* Efek denyut (pulse) bawaan Tailwind pada logo */}
      <div className="text-4xl md:text-5xl font-extrabold tracking-widest text-text-main animate-pulse">
        AJI<span className="text-accent-red">.</span>
      </div>
    </div>
  );
};

export default Preloader;