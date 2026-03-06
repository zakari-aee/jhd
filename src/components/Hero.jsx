"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import SafeImage from "./SafeImage";

export default function Hero() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    // Animation constants for a clean, staggered look
    const animBase = "transition-all duration-[1000ms] ease-[0.22,1,0.36,1]";
    const animHidden = "opacity-0 translate-y-12";
    const animVisible = "opacity-100 translate-y-0";

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#000000]">
            
            {/* Background Image with Deep Overlay */}
            <div className={`absolute inset-0 z-0 transition-transform duration-[4000ms] ease-out ${isLoaded ? 'scale-110' : 'scale-100'}`}>
                <SafeImage
                    src="/hero-building.jpg" 
                    alt="Bâtiment commercial de luxe"
                    fill
                    className="object-cover opacity-50"
                    priority
                />
                {/* Dark Vignette and Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black" />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Glowing Ambient Accents */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#0071E3]/15 rounded-full blur-[120px] animate-pulse pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#0071E3]/10 rounded-full blur-[100px] animate-pulse pointer-events-none" style={{ animationDuration: '4s' }} />

            {/* Content Wrapper */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 text-center">
                
                {/* Animated Badge */}
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-white/90 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-10 shadow-2xl ${animBase} ${isLoaded ? animVisible : animHidden}`}>
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0071E3] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0071E3]"></span>
                    </span>
                    L'excellence redéfinie
                </div>

                {/* Main Heading with Reveal Animation */}
                <div className="mb-8">
                    <h1 className="text-5xl sm:text-7xl lg:text-[100px] font-bold tracking-[-0.04em] text-white leading-[0.95] md:leading-[1.05]">
                        <div className="overflow-hidden py-1">
                            <span className={`block ${animBase} delay-[200ms] ${isLoaded ? 'translate-y-0' : 'translate-y-full'}`}>
                                L'Espace qu'il
                            </span>
                        </div>
                        <div className="overflow-hidden py-1">
                            <span className={`block text-white/40 ${animBase} delay-[400ms] ${isLoaded ? 'translate-y-0' : 'translate-y-full'}`}>
                                vous faut.
                            </span>
                        </div>
                    </h1>
                </div>

                {/* Subtitle */}
                <p className={`text-lg sm:text-xl md:text-2xl text-white/60 max-w-2xl mx-auto font-medium mb-14 leading-relaxed text-balance ${animBase} delay-[600ms] ${isLoaded ? animVisible : animHidden}`}>
                    Nous connectons les entreprises ambitieuses aux propriétés commerciales les plus exclusives de France.
                </p>

                {/* Premium Action Buttons */}
                <div className={`flex flex-col sm:flex-row items-center justify-center gap-5 ${animBase} delay-[800ms] ${isLoaded ? animVisible : animHidden}`}>
                    <Link
                        href="#catalog"
                        className="group relative px-10 py-5 bg-white text-black rounded-full text-sm font-bold overflow-hidden transition-all duration-300 hover:bg-[#0071E3] hover:text-white hover:scale-105 active:scale-95 shadow-xl shadow-[#0071E3]/20 w-full sm:w-auto"
                    >
                        Découvrir les biens
                    </Link>
                    
                    <Link
                        href="#contact"
                        className="px-10 py-5 bg-white/5 backdrop-blur-xl border border-white/10 text-white rounded-full text-sm font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-lg active:scale-95 w-full sm:w-auto"
                    >
                        Prendre rendez-vous
                    </Link>
                </div>
            </div>

            {/* Vertical Scroll Line */}
            <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center ${animBase} delay-[1200ms] ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-white/20 to-white/40" />
            </div>

        </section>
    );
}