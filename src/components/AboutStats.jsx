import { stats } from "../lib/data";

export default function AboutStats() {
    return (
        <section id="about" className="py-24 sm:py-32 bg-[#F5F5F7] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-20 anim-slide-up">
                    <h2 className="text-sm font-semibold tracking-widest text-[#86868B] uppercase mb-4">À propos de nous</h2>
                    <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1D1D1F] mb-6">
                        L'immobilier, <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0071E3] to-[#42A5F5]">autrement.</span>
                    </h3>
                    <p className="text-lg sm:text-xl text-[#86868B] leading-relaxed">
                        Nous sommes une agence experte en immobilier commercial, qui aide les entreprises à trouver les locaux adaptés à leurs besoins. Un service complet, de la sélection jusqu'à l'accompagnement juridique.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className="apple-card p-10 flex flex-col items-center justify-center text-center anim-scale-up"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="text-5xl sm:text-6xl font-bold tracking-tighter text-[#1D1D1F] mb-3">{stat.value}</div>
                            <div className="text-sm font-medium text-[#86868B] uppercase tracking-wide">{stat.label}</div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
