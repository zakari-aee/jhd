"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navLinks } from "../lib/data";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect for desktop header
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setIsOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Lock body scroll when the full-screen mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    // Force text to white if the dark full-screen menu is open, otherwise react to scroll
    const isDarkText = scrolled && !isOpen;

    return (
        <>
            <nav 
                className={`fixed top-0 left-0 w-full z-60 transition-all duration-500 ease-out ${
                    scrolled && !isOpen
                        ? "bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm py-3" 
                        : "bg-transparent py-6"
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-center h-12">
                        {/* Logo */}
                        <Link 
                            href="/" 
                            className="flex items-center gap-3 group outline-none relative"
                            onClick={() => setIsOpen(false)}
                        >
                            <div className={`p-1.5 rounded-xl transition-all duration-500 group-hover:scale-105 ${
                                isDarkText
                                    ? 'bg-brand-accent/10 text-brand-accent' 
                                    : 'bg-white/20 text-white backdrop-blur-md'
                            }`}>
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="8" width="7" height="13" rx="1.5" />
                                    <rect x="12" y="3" width="7" height="18" rx="1.5" />
                                </svg>
                            </div>
                            <span className={`text-lg font-bold tracking-tight transition-colors duration-300 ${
                                isDarkText ? 'text-brand-text' : 'text-white'
                            }`}>
                                Espace.
                            </span>
                        </Link>

                        {/* Desktop Links */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks?.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className={`text-sm font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5 ${
                                        isDarkText 
                                            ? 'text-gray-600 hover:text-brand-accent' 
                                            : 'text-white/80 hover:text-white'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Desktop Call to Action */}
                        <div className="hidden md:block">
                            <Link
                                href="#contact"
                                className={`inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 ${
                                    isDarkText
                                        ? 'bg-brand-text text-white hover:bg-brand-accent' 
                                        : 'bg-white text-brand-text hover:bg-white/90'
                                }`}
                            >
                                Contact
                            </Link>
                        </div>

                        {/* Mobile Hamburger Toggle */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`md:hidden relative p-2 -mr-2 rounded-full transition-colors duration-300 outline-none ${
                                isDarkText ? 'text-brand-text hover:bg-gray-100' : 'text-white hover:bg-white/10'
                            }`}
                            aria-label="Toggle menu"
                        >
                            <svg className="h-6 w-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Full-Screen Mobile Menu Overlay */}
            <div 
                className={`fixed inset-0 z-50 md:hidden bg-brand-text/95 backdrop-blur-3xl transition-all duration-700 flex flex-col justify-center ${
                    isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
            >
                <div className="px-8 flex flex-col gap-6 w-full max-w-sm mx-auto">
                    {navLinks?.map((link, index) => (
                        <div key={link.label} className="overflow-hidden">
                            <Link
                                href={link.href}
                                className={`block text-4xl font-bold text-white transition-all duration-700 ease-[0.32,0.72,0,1] group ${
                                    isOpen 
                                        ? 'translate-y-0 opacity-100' 
                                        : 'translate-y-full opacity-0'
                                }`}
                                style={{ transitionDelay: `${isOpen ? index * 100 + 150 : 0}ms` }}
                                onClick={() => setIsOpen(false)}
                            >
                                <span className="inline-block transition-transform duration-300 group-hover:translate-x-3 group-hover:text-brand-accent">
                                    {link.label}
                                </span>
                            </Link>
                        </div>
                    ))}
                    
                    {/* Mobile Menu Footer/CTA */}
                    <div className="overflow-hidden pt-8 mt-4 border-t border-white/10">
                        <div
                            className={`transition-all duration-700 ease-[0.32,0.72,0,1] ${
                                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                            }`}
                            style={{ transitionDelay: `${isOpen ? navLinks?.length * 100 + 200 : 0}ms` }}
                        >
                            <Link
                                href="#contact"
                                className="flex items-center justify-center w-full px-6 py-4 text-lg font-semibold tracking-wide rounded-full bg-white text-brand-text hover:bg-brand-accent hover:text-white transition-colors duration-300 active:scale-95"
                                onClick={() => setIsOpen(false)}
                            >
                                Nous contacter
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}