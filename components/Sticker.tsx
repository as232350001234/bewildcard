import React from "react";
import Image from "next/image";

type Props = {
  src?: string;
  size?: number;
  x: string;
  y: string;
  rotate?: number;
  opacity?: number;
  className?: string;
};

export default function Sticker({ src, size = 88, x, y, rotate = 0, opacity = 1, className }: Props) {
  return (
    <div
      className={`pointer-events-none absolute ${className ?? ""}`}
      style={{
        left: x,
        top: y,
        transform: `rotate(${rotate}deg)`,
        opacity,
      }}
    >
      {src ? (
        <Image src={src} alt="" width={size} height={size} priority />
      ) : (
        <svg width={size} height={size} viewBox="0 0 88 88">
          <defs>
            <linearGradient id="s" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#86a7ff" />
              <stop offset="100%" stopColor="#356aff" />
            </linearGradient>
          </defs>
          <circle cx="44" cy="44" r="40" fill="url(#s)" />
          <text x="44" y="52" textAnchor="middle" fontSize="32" fontWeight="800" fill="#fff">
            W
          </text>
        </svg>
      )}
    </div>
  );
}
