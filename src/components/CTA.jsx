"use client";

import Link from "next/link";

export default function CTA() {
    return (
        <section id="contact" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-[#111827] rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-2xl opacity-0 animate-[fade-in-up_0.8s_ease-out_forwards]">

                    {/* Decorative shapes */}
                    <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-[#5B8DB8]/20 rounded-full blur-3xl saturate-200"></div>
                    <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-[#EEF3F8]/10 rounded-full blur-3xl"></div>

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">

                        <div className="max-w-xl">
                            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                Prêt à concrétiser votre <span className="text-[#5B8DB8]">projet immobilier</span> ?
                            </h2>
                            <p className="text-gray-400 text-lg mb-8">
                                Laissez-nous vos coordonnées ou inscrivez-vous à notre newsletter pour accéder en avant-première à nos propriétés exclusives (off-market).
                            </p>

                            <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="email"
                                    placeholder="Votre adresse email"
                                    className="bg-white/10 border border-white/20 text-white placeholder-gray-400 px-6 py-4 rounded-full focus:outline-none focus:border-[#5B8DB8] focus:ring-1 focus:ring-[#5B8DB8] transition-all w-full sm:flex-1"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="bg-[#5B8DB8] text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#111827] transition-colors duration-300 shadow-lg sm:w-auto w-full flex-shrink-0"
                                >
                                    Envoyer
                                </button>
                            </form>
                            <p className="text-sm text-gray-500 mt-4">Nous respectons votre vie privée. Pas de spam.</p>
                        </div>

                        <div className="flex flex-col gap-6 lg:border-l lg:border-white/10 lg:pl-12 w-full lg:w-auto">
                            <div>
                                <p className="text-gray-400 mb-1 text-sm uppercase tracking-wide">Appelez-nous</p>
                                <div className="text-2xl font-bold text-white hover:text-[#5B8DB8] transition-colors cursor-pointer inline-flex items-center gap-2">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    +33 1 23 45 67 89
                                </div>
                            </div>
                            <div>
                                <p className="text-gray-400 mb-1 text-sm uppercase tracking-wide">Bureau principal</p>
                                <p className="text-white text-lg font-medium">15 Avenue Montaigne, Paris</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
