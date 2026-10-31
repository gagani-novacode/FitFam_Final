'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { Button } from '../ui/Button';

// @ts-ignore
const camoBannerImage = "/assets/camo.jpg";

export const PickYourCategorySection: React.FC = () => {
  const router = useRouter();

  return (
    <section className="relative w-full overflow-hidden aspect-[4/3] sm:aspect-[16/6] md:aspect-[16/7]">

      {/* Background Image */}
      <img
        src={camoBannerImage}
        alt="Camo Series"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="lazy"
        decoding="async"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content — bottom left aligned like reference image */}
      <div className="absolute bottom-0 left-0 p-6 sm:p-12 lg:p-16 flex flex-col items-start gap-2.5 sm:gap-4">

        {/* Series label */}
        <p className="font-chakra font-normal text-[10px] sm:text-[11px] uppercase tracking-[0.4em] text-white/70">
          New Collection
        </p>

        {/* Main title */}
        <h2 className="font-chakra font-bold text-2xl sm:text-4xl lg:text-5xl uppercase tracking-[0.15em] text-white leading-tight">
          Camo Series
        </h2>

        {/* Subtitle */}
        <p className="font-chakra font-normal text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-white/80 max-w-sm">
          Built to move. Built to last.
        </p>

        {/* CTA Button */}
        <div className="mt-1 sm:mt-2">
          <Button
            variant="primary"
            size="md"
            onClick={() => router.push('/category/men/CAMO')}
          >
            Shop Now
          </Button>
        </div>

      </div>

    </section>
  );
};