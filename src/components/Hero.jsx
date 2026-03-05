import SafeImage from "./SafeImage";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">

            {/* Background Image with stronger darkness */}
            <div className="absolute inset-0 z-0">
                <SafeImage
                    src="/hero-building.jpg"
                    alt="Bâtiment commercial de luxe"
                    fill
                    className="object-cover opacity-50 anim-scale-up"
                    priority
                />
                {/* Stronger overlays for text visibility */}
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#F5F5F7]" />
            </div>

            {/* Floating abstract elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0071E3]/20 rounded-full blur-[100px] anim-float" style={{ animationDelay: '0s' }} />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#0071E3]/10 rounded-full blur-[80px] anim-float" style={{ animationDelay: '2s' }} />

            {/* Content wrapper */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl text-white text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-10 anim-slide-up">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0071E3] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0071E3]"></span>
                    </span>
                    L'excellence redéfinie
                </div>

                <h1 className="text-5xl sm:text-7xl lg:text-9xl font-bold tracking-[-0.03em] text-white mb-8 anim-slide-up anim-d1 leading-[0.95]">
                    L'Espace qu'il
                    <br />
                    <span className="text-white/40">
                        vous faut.
                    </span>
                </h1>

                <p className="text-lg sm:text-2xl text-white/80 max-w-2xl mx-auto font-medium mb-12 anim-slide-up anim-d2 leading-relaxed text-balance">
                    Nous connectons les entreprises ambitieuses aux propriétés commerciales les plus exclusives de France.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-5 anim-slide-up anim-d3">
                    <a
                        href="#catalog"
                        className="apple-btn-primary px-10 py-5 text-sm w-full sm:w-auto text-center shadow-2xl shadow-[#0071E3]/30"
                    >
                        Découvrir les biens
                    </a>
                    <a
                        href="#contact"
                        className="px-10 py-5 text-sm w-full sm:w-auto text-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold hover:bg-white hover:text-black transition-all duration-300"
                    >
                        Prendre rendez-vous
                    </a>
                </div>
            </div>

        </section>
    );
}
