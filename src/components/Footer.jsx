import Link from "next/link";
import { navLinks } from "../lib/data";

export default function Footer() {
    return (
        <footer className="bg-white pt-24 pb-12 border-t border-black/3">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">

                    {/* Brand/About */}
                    <div className="col-span-2 lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6 group">
                            <svg className="w-6 h-6 text-brand-accent transition-transform duration-500 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <rect x="3" y="8" width="7" height="13" rx="1.5" />
                                <rect x="12" y="3" width="7" height="18" rx="1.5" />
                            </svg>
                            <span className="text-xl font-bold tracking-tight text-brand-text">Espace.</span>
                        </Link>
                        <p className="text-brand-secondary text-base leading-relaxed max-w-sm mb-8">
                            L'excellence dans l'immobilier commercial. Nous accompagnons les leaders de demain dans la recherche de leurs futurs bureaux et espaces industriels.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-sm font-bold text-brand-text uppercase tracking-widest mb-6">Navigation</h4>
                        <ul className="space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-brand-secondary hover:text-brand-accent transition-colors duration-200 text-sm font-medium">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-sm font-bold text-brand-text uppercase tracking-widest mb-6">Services</h4>
                        <ul className="space-y-4 text-brand-secondary text-sm font-medium">
                            <li className="hover:text-brand-accent cursor-default transition-colors">Bureaux de Luxe</li>
                            <li className="hover:text-brand-accent cursor-default transition-colors">Entrepôts Logistiques</li>
                            <li className="hover:text-brand-accent cursor-default transition-colors">Conseil Stratégique</li>
                            <li className="hover:text-brand-accent cursor-default transition-colors">Audit & Expertise</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-bold text-brand-text uppercase tracking-widest mb-6">Contact</h4>
                        <ul className="space-y-4 text-brand-secondary text-sm font-medium">
                            <li className="flex items-center gap-3">
                                <span className="text-brand-accent">T.</span> +33 1 23 45 67 89
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-brand-accent">E.</span> contact@espace.immo
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-brand-accent">A.</span> 15 Av. Montaigne, Paris
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="pt-12 border-t border-black/3 flex flex-col sm:flex-row justify-between items-center gap-6">
                    <p className="text-brand-secondary text-xs font-medium">
                        &copy; {new Date().getFullYear()} Espace Immobilier Commercial. <span className="inline-block px-1">|</span> Édition Limitée
                    </p>
                    <div className="flex items-center gap-8">
                        <Link href="#" className="text-brand-secondary hover:text-brand-text text-xs font-semibold uppercase tracking-widest transition-colors">Mention Légales</Link>
                        <Link href="#" className="text-brand-secondary hover:text-brand-text text-xs font-semibold uppercase tracking-widest transition-colors">Confidentialité</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
