"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SafeImage from "./SafeImage";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const animBase = "transition-all duration-[1000ms] ease-[0.22,1,0.36,1]";
  const animHidden = "translate-y-12 opacity-0";
  const animVisible = "translate-y-0 opacity-100";

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">

      {/* Background Image */}
      <div
        className={`absolute inset-0 z-0 transition-transform duration-[4000ms] ease-out ${
          isLoaded ? "scale-110" : "scale-100"
        }`}
      >
        <SafeImage
          src="/hero.png"
          alt="Bâtiment commercial de luxe"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Very light gradient only for readability */}
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/20" />
      </div>

      {/* Glow Effects */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-[500px] w-[500px] animate-pulse rounded-full bg-brand-accent/15 blur-[120px]" />
      <div
        className="pointer-events-none absolute bottom-1/4 right-1/4 h-[400px] w-[400px] animate-pulse rounded-full bg-brand-accent/10 blur-[100px]"
        style={{ animationDuration: "4s" }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 text-center lg:px-8">

        {/* Badge */}
        <div
          className={`mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/90 shadow-2xl backdrop-blur-xl sm:text-xs ${animBase} ${
            isLoaded ? animVisible : animHidden
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-accent opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-accent"></span>
          </span>
          L&apos;excellence redéfinie
        </div>

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-white sm:text-7xl md:leading-[1.05] lg:text-[100px]">

            <div className="overflow-hidden py-1">
              <span
                className={`block ${animBase} delay-200 ${
                  isLoaded ? "translate-y-0" : "translate-y-full"
                }`}
              >
                L&apos;Espace qu&apos;il
              </span>
            </div>

            <div className="overflow-hidden py-1">
              <span
                className={`block text-white/70 ${animBase} delay-400 ${
                  isLoaded ? "translate-y-0" : "translate-y-full"
                }`}
              >
                vous faut.
              </span>
            </div>

          </h1>
        </div>

        {/* Subtitle */}
        <p
          className={`mx-auto mb-14 max-w-2xl text-balance text-lg font-medium leading-relaxed text-white/80 sm:text-xl md:text-2xl ${animBase} delay-600 ${
            isLoaded ? animVisible : animHidden
          }`}
        >
          Nous connectons les entreprises ambitieuses aux propriétés
          commerciales les plus exclusives de France.
        </p>

        {/* Buttons */}
        <div
          className={`flex flex-col items-center justify-center gap-5 sm:flex-row ${animBase} delay-800 ${
            isLoaded ? animVisible : animHidden
          }`}
        >
          <Link
            href="#catalog"
            className="group relative w-full overflow-hidden rounded-full bg-white px-10 py-5 text-sm font-bold text-black shadow-xl shadow-brand-accent/20 transition-all duration-300 hover:scale-105 hover:bg-brand-accent hover:text-white active:scale-95 sm:w-auto"
          >
            Découvrir les biens
          </Link>

          <Link
            href="#contact"
            className="w-full rounded-full border border-white/10 bg-white/5 px-10 py-5 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-lg active:scale-95 sm:w-auto"
          >
            Prendre rendez-vous
          </Link>
        </div>

      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-0 left-1/2 flex -translate-x-1/2 flex-col items-center ${animBase} delay-1200 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="h-24 w-px bg-linear-to-b from-transparent via-white/20 to-white/40" />
      </div>

    </section>
  );
}