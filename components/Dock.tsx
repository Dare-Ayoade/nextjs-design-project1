"use client";

import React from "react";

const DockIcon = ({ color, label }: { color: string; label: string }) => (
  <div className="group relative flex flex-col items-center">
    <div className="absolute -top-12 px-3 py-1 bg-black/80 backdrop-blur-md text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
      {label}
    </div>
    <div
      className="w-14 h-14 rounded-2xl transition-all duration-300 hover:w-20 hover:h-20 hover:-translate-y-4 skeuo-bezel relative overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="absolute inset-0 gloss-overlay pointer-events-none" />
      <div className="w-6 h-6 rounded-full bg-white/20" />
    </div>
    <div className="w-1 h-1 rounded-full bg-white/40 mt-2 opacity-0 group-hover:opacity-100" />
  </div>
);

export const Dock = () => {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-[2.5rem] bg-white/10 backdrop-blur-3xl border border-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-end gap-3 transition-all duration-500 hover:py-5">
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none rounded-[2.5rem]" />
      
      <DockIcon color="#00a3ff" label="Portfolio" />
      <DockIcon color="#3ccf4e" label="About" />
      <DockIcon color="#ffcc00" label="Skills" />
      <DockIcon color="#ff4d4d" label="Contact" />
      
      <div className="w-px h-12 bg-white/20 mx-2 self-center" />
      
      <DockIcon color="#999" label="Archive" />
    </nav>
  );
};
