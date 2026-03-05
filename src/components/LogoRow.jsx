import { logos } from "../lib/data";

export default function LogoRow() {
    return (
        <section className="py-12 bg-white border-b border-black/[0.03]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-20 md:gap-24 opacity-0 animate-[fade-in_1s_ease-out_forwards]">
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 text-[#86868B] hover:text-[#1D1D1F] grayscale hover:grayscale-0 transition-all duration-500 cursor-default group"
                        >
                            <div className="w-5 h-5 rounded-full bg-current opacity-20 group-hover:opacity-100 transition-opacity duration-500" />
                            <span className="text-sm font-semibold tracking-tight uppercase">{logo.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
