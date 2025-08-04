'use client';

import Image from 'next/image';

export function TeamImage({ src, alt }: { src: string, alt: string }) {
  return (
    <div className="relative w-full h-[300px]">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover rounded-t-lg"
      />
    </div>
  );
}
