import { logos } from "../lib/data";

export default function LogoRow() {
    return (
        <section className="py-12 bg-[#EEF3F8] border-y border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center">
                    <p className="text-sm text-gray-500 font-medium mb-8 uppercase tracking-widest">Ils nous font confiance</p>
                    <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-24 opacity-0 animate-[fade-in-up_0.8s_ease-out_forwards]">
                        {logos.map((logo, index) => (
                            <div
                                key={logo.name}
                                className="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* SVG placeholder for logo */}
                                <svg className="w-24 h-8 text-[#111827]" viewBox="0 0 120 40" fill="currentColor">
                                    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="16" fontWeight="bold">
                                        {logo.name}
                                    </text>
                                </svg>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
