import SafeImage from "./SafeImage";

export default function Hero() {
    return (
        <section className="relative pt-16">
            {/* Full-width hero image */}
            <div className="relative w-full h-[520px] sm:h-[600px] lg:h-[680px] overflow-hidden">
                <SafeImage
                    src="/hero-building.jpg"
                    alt="Современное здание"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Text overlay at bottom-left */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-16">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 max-w-2xl">
                            Недвижимость для бизнеса
                        </h1>
                        <p className="text-white/80 text-base sm:text-lg mb-8 max-w-lg">
                            Аренда, продажа и подбор объектов — от офисов до складов
                        </p>
                        <a
                            href="#contact"
                            className="inline-block border-2 border-white text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-white hover:text-[#111827] transition-all duration-300"
                        >
                            Начать сотрудничество
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
