import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutStats from "../components/AboutStats";
import LogoRow from "../components/LogoRow";
import Catalog from "../components/Catalog";
import HowWeWork from "../components/HowWeWork";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#EEF3F8]">
            <Navbar />
            <Hero />
            <AboutStats />
            <LogoRow />
            <Catalog />
            <HowWeWork />
            <Testimonials />
            <CTA />
            <Footer />
        </main>
    );
}
