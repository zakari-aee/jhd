"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navLinks } from "../lib/data";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'apple-glass py-3' : 'bg-transparent py-5'} anim-blur-in`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-12">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <svg className={`w-6 h-6 transition-colors duration-300 ${scrolled ? 'text-[#0071E3]' : 'text-white'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <rect x="3" y="8" width="7" height="13" rx="1.5" />
                            <rect x="12" y="3" width="7" height="18" rx="1.5" />
                        </svg>
                        <div className="leading-tight">
                            <span className={`text-base font-semibold tracking-tight block leading-none transition-colors duration-300 ${scrolled ? 'text-[#1D1D1F]' : 'text-white'}`}>
                                Espace.
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={`text-xs font-medium tracking-wide transition-colors duration-300 ${scrolled ? 'text-[#1D1D1F] hover:text-[#0071E3]' : 'text-white/80 hover:text-white'}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:block">
                        <Link
                            href="#contact"
                            className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-300 ${scrolled ? 'bg-[#1D1D1F] text-white hover:bg-[#0071E3] hover:scale-105' : 'bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-[#1D1D1F]'}`}
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`md:hidden p-2 transition-colors duration-300 ${scrolled ? 'text-[#1D1D1F]' : 'text-white'}`}
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-400 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="apple-glass px-4 py-6 space-y-4 shadow-xl">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="block px-4 py-2 text-base font-medium text-[#1D1D1F] hover:text-[#0071E3] transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="pt-4 px-4">
                        <Link
                            href="#contact"
                            className="block w-full text-center apple-btn-primary py-3"
                            onClick={() => setIsOpen(false)}
                        >
                            Nous contacter
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
