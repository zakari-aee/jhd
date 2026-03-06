"use client";

import { useState } from "react";
import Image from "next/image";

export default function SafeImage({
  src,
  alt,
  className = "",
  fill = false,
  width,
  height,
  ...props
}) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`flex items-center justify-center bg-linear-to-br from-[#5B8DB8]/20 to-[#111827]/10 ${className}`}
        style={!fill ? { width, height } : undefined}
      >
        <span className="px-4 text-center text-sm font-medium text-[#5B8DB8]/50">
          Image non disponible
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      fill={fill}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      onError={() => setError(true)}
      {...props}
    />
  );
}