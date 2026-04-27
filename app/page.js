import GalaxyBackground from "@/components/GalaxyBackground";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Awards from "@/components/Awards";
import Workshops from "@/components/Workshops";
import Skills from "@/components/Skills";
import Publications from "@/components/Publications";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className="relative text-white min-h-screen selection:bg-nebula/30 selection:text-white">
            <GalaxyBackground />
            
            <NavBar />

            <main className="relative z-10">
                <Header />

                <div className="max-w-5xl mx-auto space-y-32 px-4 pb-32">
                    <About />
                    <Education />
                    <Experience />
                    <Projects />
                    <Awards />
                    <Workshops />
                    <Skills />
                    <Publications />
                </div>
            </main>

            <Footer />
        </div>
    );
}