"use client";

import Link from "next/link";
import SafeImage from "./SafeImage";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <SafeImage
          src="/hero.webp"
          alt="Bâtiment commercial de luxe"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 text-center lg:px-8">
        <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/90 backdrop-blur-xl sm:text-xs">
          <span className="h-2 w-2 rounded-full bg-brand-accent" />
          L&apos;excellence redéfinie
        </div>

        <h1 className="mb-8 text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-white sm:text-7xl lg:text-[100px]">
          L&apos;Espace qu&apos;il
          <br />
          <span className="text-white/70">vous faut.</span>
        </h1>

        <p className="mx-auto mb-14 max-w-2xl text-lg font-medium leading-relaxed text-white/80 sm:text-xl md:text-2xl">
          Nous connectons les entreprises ambitieuses aux propriétés
          commerciales les plus exclusives de France.
        </p>

        <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
          <Link
            href="#catalog"
            className="w-full rounded-full bg-white px-10 py-5 text-sm font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-brand-accent hover:text-white sm:w-auto"
          >
            Découvrir les biens
          </Link>

          <Link
            href="#contact"
            className="w-full rounded-full border border-white/10 bg-white/5 px-10 py-5 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/10 sm:w-auto"
          >
            Prendre rendez-vous
          </Link>
        </div>
      </div>
    </section>
  );
}