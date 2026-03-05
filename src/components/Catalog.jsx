import { catalogItems } from "../lib/data";
import SafeImage from "./SafeImage";

export default function Catalog() {
    return (
        <section id="catalog" className="py-24 sm:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-20 text-center sm:text-left anim-slide-up">
                    <h2 className="text-sm font-semibold tracking-widest text-[#86868B] uppercase mb-4">Notre Portfolio</h2>
                    <h3 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1D1D1F]">
                        Sélection de Biens <span className="text-[#86868B]">d'Exception.</span>
                    </h3>
                </div>

                {/* Catalog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                    {catalogItems.map((item, index) => (
                        <div
                            key={item.id}
                            className="apple-card group border-black/[0.03] anim-scale-up"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-t-[23px]">
                                <SafeImage
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            <div className="p-8">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#0071E3]" />
                                    <span className="text-xs font-bold text-[#86868B] uppercase tracking-wider">{item.count}</span>
                                </div>
                                <h4 className="text-xl font-bold text-[#1D1D1F] mb-4 group-hover:text-[#0071E3] transition-colors duration-300">
                                    {item.title}
                                </h4>
                                <p className="text-[#86868B] text-sm leading-relaxed mb-6">
                                    Découvrez des opportunités uniques adaptées à vos ambitions de croissance.
                                </p>

                                <div className="pt-6 border-t border-black/[0.03] flex items-center justify-between">
                                    <span className="text-sm font-semibold text-[#1D1D1F]">En savoir plus</span>
                                    <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center text-[#1D1D1F] group-hover:bg-[#0071E3] group-hover:text-white transition-all duration-300">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
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
