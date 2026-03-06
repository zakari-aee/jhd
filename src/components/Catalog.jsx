import { catalogItems } from "../lib/data";
import SafeImage from "./SafeImage";

export default function Catalog() {
  return (
    <section id="catalog" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="anim-slide-up mb-20 text-center sm:text-left">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-secondary">
            Notre Portfolio
          </h2>

          <h3 className="text-4xl font-bold tracking-tight text-brand-text sm:text-5xl">
            Sélection de Biens{" "}
            <span className="text-brand-secondary">d&apos;Exception.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {catalogItems.map((item, index) => (
            <article
              key={item.id}
              className="apple-card group anim-scale-up border-black/3"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-64 w-full overflow-hidden rounded-t-[23px] sm:h-72">
                <SafeImage
                  src={item.image}
                  alt={item.title}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              <div className="p-8">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-secondary">
                    {item.count}
                  </span>
                </div>

                <h4 className="mb-4 text-xl font-bold text-brand-text transition-colors duration-300 group-hover:text-brand-accent">
                  {item.title}
                </h4>

                <p className="mb-6 text-sm leading-relaxed text-brand-secondary">
                  Découvrez des opportunités uniques adaptées à vos ambitions de
                  croissance.
                </p>

                <div className="flex items-center justify-between border-t border-black/3 pt-6">
                  <span className="text-sm font-semibold text-brand-text">
                    En savoir plus
                  </span>

                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/5 text-brand-text transition-all duration-300 group-hover:bg-brand-accent group-hover:text-white">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}