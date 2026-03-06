import { steps } from "../lib/data";
import SafeImage from "./SafeImage";

function StepIcon({ type }) {
    const icons = {
        chat: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        ),
        search: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        ),
        eye: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
        ),
        doc: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
        check: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    };
    return icons[type] || icons.chat;
}

export default function HowWeWork() {
    return (
        <section id="how-we-work" className="py-24 sm:py-32 bg-brand-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">

                    {/* Left: Interactive Image Card */}
                    <div className="relative anim-slide-up">
                        <div className="fixed apple-card overflow-hidden h-125 sm:h-150 lg:h-175">
                            <SafeImage
                                src="/how-we-work.webp"
                                alt="Comment nous travaillons"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                            <div className="absolute bottom-12 left-12 right-12 text-white">
                                <div className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-widest mb-4">
                                    Engagement Total
                                </div>
                                <h4 className="text-3xl font-bold tracking-tight mb-4">Votre vision, notre mission.</h4>
                                <p className="text-white/70 text-lg font-medium leading-relaxed max-w-sm">
                                    De la première idée à la signature finale, nous sommes à vos côtés.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Detailed Steps */}
                    <div className="space-y-12">
                        <div className="mb-12 anim-slide-up">
                            <h2 className="text-sm font-semibold tracking-widest text-brand-secondary uppercase mb-4">Notre Méthode</h2>
                            <h3 className="text-4xl sm:text-5xl font-bold tracking-tight text-brand-text">
                                L'Art de la <br />
                                <span className="text-brand-secondary">Transaction.</span>
                            </h3>
                        </div>

                        <div className="space-y-10">
                            {steps.map((step, index) => (
                                <div
                                    key={step.number}
                                    className="flex gap-8 anim-slide-up"
                                    style={{ animationDelay: `${index * 150}ms` }}
                                >
                                    <div className="shrink-0">
                                        <div className="w-14 h-14 rounded-2xl bg-white border border-black/5 shadow-sm text-brand-accent flex items-center justify-center transition-all duration-300 hover:shadow-md hover:scale-105">
                                            <StepIcon type={step.icon} />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-brand-text mb-2">{step.title}</h4>
                                        <p className="text-brand-secondary text-base leading-relaxed max-w-md">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
