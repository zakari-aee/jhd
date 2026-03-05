import { steps } from "../lib/data";
import SafeImage from "./SafeImage";

export default function HowWeWork() {
    return (
        <section id="how-we-work" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-20 opacity-0 animate-[fade-in-up_0.8s_ease-out_forwards]">
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#111827] mb-6">
                        Notre Méthodologie
                    </h2>
                    <p className="text-lg text-gray-600">
                        Un processus transparent et structuré pour transformer votre vision immobilière en réalité.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Image */}
                    <div className="relative h-[600px] w-full rounded-[3rem] overflow-hidden shadow-xl lg:order-1 order-2 opacity-0 animate-[fade-in-up_0.8s_ease-out_0.2s_forwards]">
                        <SafeImage
                            src="/how-we-work.jpg"
                            alt="Notre équipe en action"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 to-transparent"></div>

                        <div className="absolute bottom-10 left-10 right-10">
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                                <p className="text-white text-lg font-medium italic">
                                    "L'excellence n'est pas un acte, mais une habitude."
                                </p>
                                <div className="flex items-center gap-3 mt-4">
                                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white font-bold">Jean Dupont</p>
                                        <p className="text-white/70 text-sm">Directeur d'Agence</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Steps */}
                    <div className="space-y-12 lg:order-2 order-1">
                        {steps.map((step, index) => (
                            <div
                                key={step.number}
                                className="flex gap-6 group opacity-0 animate-[fade-in-up_0.8s_ease-out_forwards]"
                                style={{ animationDelay: `${index * 150 + 200}ms` }}
                            >
                                <div className="flex-shrink-0 relative">
                                    <div className="w-16 h-16 rounded-2xl bg-[#EEF3F8] text-[#5B8DB8] flex items-center justify-center text-xl font-bold group-hover:bg-[#111827] group-hover:text-white transition-colors duration-300">
                                        {step.number}
                                    </div>
                                    {/* Connecting Line */}
                                    {index !== steps.length - 1 && (
                                        <div className="absolute top-16 bottom-[-3rem] left-1/2 w-0.5 bg-slate-100 -translate-x-1/2 group-hover:bg-[#5B8DB8]/30 transition-colors duration-300"></div>
                                    )}
                                </div>

                                <div className="pb-4">
                                    <h3 className="text-2xl font-bold text-[#111827] mb-3 group-hover:text-[#5B8DB8] transition-colors duration-300">
                                        {step.title}
                                    </h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
