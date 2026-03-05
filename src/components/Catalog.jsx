import Link from "next/link";
import { catalogItems } from "../lib/data";
import SafeImage from "./SafeImage";

export default function Catalog() {
    return (
        <section id="catalog" className="py-24 bg-[#EEF3F8]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 space-y-6 md:space-y-0 opacity-0 animate-[fade-in-up_0.8s_ease-out_forwards]">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl lg:text-5xl font-bold text-[#111827] mb-6 tracking-tight">
                            Biens d'Exception
                        </h2>
                        <p className="text-lg text-gray-600">
                            Découvrez notre sélection rigoureuse de propriétés de prestige. Chaque résidence a été choisie pour son emplacement privilégié, son architecture unique et ses prestations haut de gamme.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <button className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center hover:bg-white hover:border-transparent hover:shadow-md transition-all duration-300 group">
                            <svg className="w-6 h-6 text-gray-600 group-hover:text-[#111827] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button className="w-12 h-12 rounded-full bg-[#111827] text-white flex items-center justify-center hover:bg-[#5B8DB8] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Cards Grid / Carousel */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {catalogItems.map((item, index) => (
                        <div
                            key={item.id}
                            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 opacity-0 animate-[fade-in-up_0.8s_ease-out_forwards]"
                            style={{ animationDelay: `${index * 200 + 100}ms` }}
                        >
                            <div className="relative h-72 w-full overflow-hidden">
                                <SafeImage
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* Overlay Tags */}
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-[#111827]">
                                    À Vendre
                                </div>
                                <div className="absolute top-4 right-4 bg-[#111827]/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-white flex items-center gap-1">
                                    <svg className="w-3 h-3 text-[#5B8DB8]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                    </svg>
                                    Coup de coeur
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-[#111827] mb-2 group-hover:text-[#5B8DB8] transition-colors">
                                            {item.title}
                                        </h3>
                                        <div className="flex items-center text-gray-500 text-sm">
                                            <svg className="w-4 h-4 mr-1 pb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            {item.location}
                                        </div>
                                    </div>
                                </div>

                                <div className="py-4 border-t border-b border-slate-100 mb-6 mt-2">
                                    <div className="flex items-center justify-between text-sm font-medium text-gray-600">
                                        {item.specs.split('•').map((spec, i) => (
                                            <span key={i} className="flex items-center gap-1">
                                                {spec.trim()}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="text-2xl font-bold text-[#111827]">
                                        {item.price}
                                    </div>
                                    <Link href={`#property-${item.id}`} className="text-[#5B8DB8] font-bold text-sm tracking-wide uppercase hover:text-[#111827] transition-colors flex items-center group-hover:translate-x-1 duration-300">
                                        Détails
                                        <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center opacity-0 animate-[fade-in-up_0.8s_ease-out_0.6s_forwards]">
                    <Link
                        href="#all-properties"
                        className="inline-flex items-center justify-center bg-white text-[#111827] px-8 py-4 rounded-3xl font-medium border border-slate-200 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                    >
                        Voir tous nos biens (24)
                    </Link>
                </div>

            </div>
        </section>
    );
}
