import { testimonials } from "../lib/data";

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 sm:py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-2xl mx-auto mb-20 anim-slide-up">
                    <h2 className="text-sm font-semibold tracking-widest text-[#86868B] uppercase mb-4">Témoignages</h2>
                    <h3 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1D1D1F]">
                        La confiance de nos <span className="text-[#0071E3]">partenaires.</span>
                    </h3>
                </div>

                <div className="max-w-4xl mx-auto anim-scale-up">
                    {testimonials.map((t) => (
                        <div
                            key={t.id}
                            className="apple-card p-12 sm:p-16 lg:p-20 border-black/[0.03] text-center relative overflow-hidden group"
                        >
                            {/* Massive subtle quote mark */}
                            <div className="absolute -top-10 -left-10 text-black/[0.02] group-hover:text-[#0071E3]/[0.05] transition-colors duration-700 select-none pointer-events-none">
                                <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 32 32">
                                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                                </svg>
                            </div>

                            <div className="relative z-10">
                                {/* Minimal Stars */}
                                <div className="flex justify-center gap-1.5 mb-10">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-[#0071E3]" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>

                                <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1D1D1F] leading-tight mb-12 tracking-tight">
                                    "{t.quote}"
                                </p>

                                <div className="flex flex-col items-center gap-4 pt-10 border-t border-black/[0.03]">
                                    <div className="w-16 h-16 rounded-full bg-[#0071E3] text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-[#0071E3]/20">
                                        {t.avatar}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-[#1D1D1F] mb-1">{t.name}</h4>
                                        <p className="text-sm font-medium text-[#86868B] uppercase tracking-widest">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
