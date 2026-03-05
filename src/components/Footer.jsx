import Link from "next/link";
import { navLinks } from "../lib/data";

export default function Footer() {
    return (
        <footer className="bg-[#111827] text-white pt-20 pb-10 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 opacity-0 animate-[fade-in-up_0.8s_ease-out_forwards]">

                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <Link href="/" className="text-3xl font-bold tracking-tight inline-block mb-6">
                            Prestige<span className="text-[#5B8DB8]">.</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            L'agence immobilière de référence pour l'achat et la vente de propriétés d'exception en France et à l'international.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Icons (SVGs) */}
                            {[1, 2, 3, 4].map((i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#5B8DB8] hover:text-white transition-all duration-300">
                                    <span className="sr-only">Social media {i}</span>
                                    <div className="w-4 h-4 bg-current rounded-full opacity-50"></div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Menu */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Navigation</h4>
                        <ul className="space-y-4 text-gray-400">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="hover:text-[#5B8DB8] transition-colors duration-300 text-sm">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Mentions légales</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link href="#" className="hover:text-[#5B8DB8] transition-colors duration-300 text-sm">Conditions générales</Link></li>
                            <li><Link href="#" className="hover:text-[#5B8DB8] transition-colors duration-300 text-sm">Politique de confidentialité</Link></li>
                            <li><Link href="#" className="hover:text-[#5B8DB8] transition-colors duration-300 text-sm">Gestion des cookies</Link></li>
                            <li><Link href="#" className="hover:text-[#5B8DB8] transition-colors duration-300 text-sm">Barème des honoraires</Link></li>
                        </ul>
                    </div>

                    {/* Contact Summary */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Contact</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="flex items-start">
                                <svg className="w-5 h-5 mr-3 text-[#5B8DB8] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                15 Avenue Montaigne, 75008 Paris, France
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 mr-3 text-[#5B8DB8] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                +33 1 23 45 67 89
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 mr-3 text-[#5B8DB8] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                contact@prestige.immo
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 opacity-0 animate-[fade-in-up_0.8s_ease-out_0.2s_forwards]">
                    <p>&copy; {new Date().getFullYear()} Prestige Immobilier. Tous droits réservés.</p>
                    <p className="mt-4 md:mt-0">Design & Développement par <span className="text-white font-medium">Prestige Team</span></p>
                </div>

            </div>
        </footer>
    );
}
