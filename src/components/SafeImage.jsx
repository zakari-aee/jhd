"use client";

import { useState } from "react";
import Image from "next/image";

export default function SafeImage({
  src,
  alt,
  className,
  fill,
  width,
  height,
  ...props
}) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`bg-gradient-to-br from-[#5B8DB8]/20 to-[#111827]/10 flex items-center justify-center ${className || ""}`}
        style={!fill ? { width, height } : {}}
      >
        <span className="text-[#5B8DB8]/50 text-sm font-medium px-4 text-center">
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
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      onError={() => setError(true)}
      {...props}
    />
  );
}