"use client";

import React from "react";

type ArtType =
  | "aqua-flow"
  | "lush-orbit"
  | "metal-mesh"
  | "crystal-prism"
  | "sunburst-lens"
  | "gel-button"
  | "aurora-wave"
  | "frosted-pane";

interface CSSArtProps {
  type: ArtType;
  className?: string;
}

export const CSSArt: React.FC<CSSArtProps> = ({ type, className = "" }) => {
  const renderArt = () => {
    switch (type) {
      case "aqua-flow":
        return (
          <div className="w-full h-full bg-blue-400 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.4),transparent_70%)] animate-pulse" />
            <div className="absolute top-1/4 -left-1/4 w-[150%] h-[50%] bg-white/20 rounded-[40%_60%_70%_30%] blur-xl animate-[spin_10s_linear_infinite]" />
            <div className="absolute bottom-1/4 -right-1/4 w-[150%] h-[50%] bg-white/10 rounded-[60%_40%_30%_70%] blur-xl animate-[spin_15s_linear_infinite_reverse]" />
          </div>
        );
      case "lush-orbit":
        return (
          <div className="w-full h-full bg-green-500 flex items-center justify-center relative overflow-hidden">
            <div className="w-24 h-24 bg-green-300 rounded-full shadow-[0_0_40px_rgba(255,255,255,0.5),inset_0_5px_15px_rgba(255,255,255,0.8)] relative z-10">
              <div className="absolute top-1 left-2 w-16 h-8 bg-white/40 rounded-full blur-sm" />
            </div>
            <div className="absolute w-40 h-8 border-4 border-white/30 rounded-[50%] rotate-[15deg] animate-[spin_8s_linear_infinite]" />
          </div>
        );
      case "metal-mesh":
        return (
          <div className="w-full h-full bg-[#999] linen-texture relative flex flex-wrap gap-2 p-4 justify-center items-center">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-[#777] shadow-[inset_0_2px_4px_rgba(0,0,0,0.5),0_1px_0_rgba(255,255,255,0.2)]"
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-black/20 pointer-events-none" />
          </div>
        );
      case "crystal-prism":
        return (
          <div className="w-full h-full bg-cyan-600 flex items-center justify-center overflow-hidden">
            <div className="w-32 h-32 bg-white/20 backdrop-blur-md rotate-45 border border-white/50 shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/40 via-transparent to-white/40" />
              <div className="absolute top-0 left-0 w-full h-[1px] bg-white/80" />
            </div>
            <div className="absolute w-40 h-40 bg-white/5 rounded-full blur-3xl animate-pulse" />
          </div>
        );
      case "sunburst-lens":
        return (
          <div className="w-full h-full bg-orange-400 relative overflow-hidden flex items-center justify-center">
            <div className="absolute w-full h-full bg-[conic-gradient(from_0deg,transparent_0deg,rgba(255,255,255,0.2)_10deg,transparent_20deg)] animate-[spin_60s_linear_infinite]" />
            <div className="w-8 h-8 bg-white rounded-full shadow-[0_0_100px_40px_rgba(255,255,255,0.8)]" />
            <div className="absolute top-10 left-10 w-12 h-12 bg-white/20 rounded-full blur-sm" />
            <div className="absolute bottom-20 right-20 w-6 h-6 bg-blue-300/30 rounded-full blur-[2px]" />
          </div>
        );
      case "gel-button":
        return (
          <div className="w-full h-full bg-purple-500 p-6 grid grid-cols-2 gap-4">
            {["#ff00aa", "#00ffcc", "#ffcc00", "#0088ff"].map((color, i) => (
              <div
                key={i}
                style={{ backgroundColor: color }}
                className="rounded-2xl shadow-lg relative overflow-hidden skeuo-bezel"
              >
                <div className="absolute inset-0 gloss-overlay" />
              </div>
            ))}
          </div>
        );
      case "aurora-wave":
        return (
          <div className="w-full h-full bg-indigo-900 relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-[200%] h-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40 blur-2xl animate-[wave_10s_ease-in-out_infinite]" />
            <div className="absolute top-1/2 left-[-50%] w-[200%] h-48 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30 blur-3xl animate-[wave_15s_ease-in-out_infinite_reverse]" />
          </div>
        );
      case "frosted-pane":
        return (
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80')] bg-cover bg-center flex items-center justify-center p-8">
            <div className="w-full h-full bg-white/20 backdrop-blur-xl rounded-xl border border-white/40 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 gloss-overlay" />
              <div className="absolute top-2 left-2 flex gap-1">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                <div className="w-2 h-2 rounded-full bg-green-400" />
              </div>
            </div>
          </div>
        );
      default:
        return <div className="w-full h-full bg-gray-200" />;
    }
  };

  return <div className={`relative overflow-hidden ${className}`}>{renderArt()}</div>;
};

// Add custom wave animation to globals.css later if needed, but Tailwind can handle it with arbitrary values
// For now, let's just use what's available.
