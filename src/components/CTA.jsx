"use client";

export default function CTA() {
    return (
        <section id="contact" className="py-24 sm:py-32 bg-[#F5F5F7]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-[#1D1D1F] rounded-[32px] p-10 sm:p-16 lg:p-24 relative overflow-hidden anim-scale-up">

                    {/* Abstract glow */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0071E3]/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-[80px] pointer-events-none" />

                    <div className="relative z-10 max-w-2xl">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8 leading-tight">
                            Prêt à transformer <br />
                            <span className="text-[#0071E3]">votre entreprise ?</span>
                        </h2>
                        <p className="text-[#86868B] text-lg sm:text-xl font-medium leading-relaxed mb-12">
                            Laissez-nous vos coordonnées ou inscrivez-vous à notre newsletter pour accéder en avant-première à nos propriétés exclusives.
                        </p>

                        <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Votre adresse email"
                                className="flex-1 bg-white/5 border border-white/10 text-white placeholder-white/30 px-6 py-4 rounded-2xl text-base focus:outline-none focus:border-[#0071E3] focus:ring-1 focus:ring-[#0071E3] transition-all duration-300"
                                required
                            />
                            <button
                                type="submit"
                                className="apple-btn-primary px-10 py-4 text-sm font-bold shadow-2xl shadow-[#0071E3]/20"
                            >
                                Commencer
                            </button>
                        </form>
                        <p className="text-[#86868B] text-xs font-medium mt-6 tracking-wide">
                            Engagement de confidentialité total. Pas de spam, jamais.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
