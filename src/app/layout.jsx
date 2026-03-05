import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
});

export const metadata = {
    title: "Immobilier de Prestige | Votre Partenaire de Confiance",
    description: "Agence immobilière spécialisée dans les biens d'exception.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr" className="scroll-smooth">
            <body className={`${manrope.variable} font-sans antialiased`}>
                {children}
            </body>
        </html>
    );
}
