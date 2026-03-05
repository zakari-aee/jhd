import { stats } from "../lib/data";

export default function AboutStats() {
    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Text */}
                    <div className="space-y-8 animate-[fade-in-up_0.8s_ease-out_forwards] intersect:animate-[fade-in-up_0.8s_ease-out_forwards]">
                        <div className="inline-flex items-center space-x-2 bg-[#EEF3F8] px-4 py-2 rounded-full shadow-sm w-fit">
                            <span className="text-sm font-bold text-[#5B8DB8] tracking-widest uppercase">À propos</span>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
                            L'art de vivre <br />
                            <span className="text-gray-400 font-light">sans compromis.</span>
                        </h2>

                        <p className="text-lg text-gray-600 leading-relaxed border-l-4 border-[#5B8DB8] pl-6">
                            Depuis plus d'une décennie, Prestige accompagne une clientèle exigeante dans l'acquisition et la vente de biens immobiliers d'exception. Notre expertise pointue du marché et notre réseau exclusif nous permettent de dénicher des perles rares.
                        </p>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            Nous croyons que chaque propriété a une âme et chaque client a une histoire. Notre mission est de créer la rencontre parfaite entre les deux, avec discrétion, intégrité et un niveau de service inégalé.
                        </p>
                    </div>

                    {/* Right Column: Stats Grid */}
                    <div className="grid grid-cols-2 gap-6 sm:gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={stat.label}
                                className="bg-[#EEF3F8] rounded-[2rem] p-8 hover:-translate-y-2 transition-transform duration-300 group opacity-0 animate-[fade-in-up_0.8s_ease-out_forwards]"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className="text-4xl sm:text-5xl font-bold text-[#111827] mb-2 group-hover:text-[#5B8DB8] transition-colors duration-300">
                                    <span className="inline-block animate-[count-up_2s_ease-out_forwards]">
                                        {stat.value}
                                    </span>
                                </div>
                                <div className="text-sm sm:text-base text-gray-600 font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
