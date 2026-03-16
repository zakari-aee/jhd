import { Manrope } from "next/font/google";
import "./globals.css";


const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "NX - Space | Espaces Commerciaux Premium pour Entreprises",
  description:
    "Découvrez des espaces commerciaux premium, bureaux et locaux d’exception pour entreprises ambitieuses. NexaSpace vous accompagne dans la recherche du lieu idéal.",
  keywords: [
    "immobilier commercial",
    "espaces commerciaux",
    "bureaux premium",
    "locaux commerciaux",
    "agence immobilière",
    "biens d'exception",
    "entreprises",
  ],
  authors: [{ name: "nxspace" }],
  creator: "NexaSpace",
  publisher: "NexaSpace",
  metadataBase: new URL("https://nxspace.vercel.app/"),
  openGraph: {
    title: "NexaSpace | Espaces Commerciaux Premium pour Entreprises",
    description:
      "Des espaces commerciaux d’exception pour accompagner la croissance des entreprises ambitieuses.",
    url: "https://nxspace.vercel.app/",
    siteName: "NexaSpace",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexaSpace | Espaces Commerciaux Premium pour Entreprises",
    description:
      "Des espaces commerciaux d’exception pour accompagner la croissance des entreprises ambitieuses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${manrope.variable} font-sans antialiased bg-white text-black`}>
        {children}
      </body>
    </html>
  );
}