"use client";

import React from "react";
import { CSSArt } from "./CSSArt";

interface PortfolioCardProps {
  title: string;
  description: string;
  type: React.ComponentProps<typeof CSSArt>["type"];
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  description,
  type,
}) => {
  return (
    <div className="group relative w-full aspect-[4/3] rounded-[2rem] skeuo-bezel overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(0,163,255,0.3)] bg-white">
      {/* The Art */}
      <div className="w-full h-full">
        <CSSArt type={type} className="w-full h-full" />
      </div>

      {/* Gloss Layer */}
      <div className="absolute inset-0 gloss-overlay pointer-events-none" />

      {/* Info Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-white font-bold text-2xl mb-2 drop-shadow-md">
            {title}
          </h3>
          <p className="text-white/90 text-sm leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>
      </div>

      {/* Bezel Highlight */}
      <div className="absolute inset-0 border border-white/20 rounded-[2rem] pointer-events-none" />
    </div>
  );
};
