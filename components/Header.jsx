import { Mail, Phone, Linkedin, Download } from "lucide-react";
import Image from "next/image";
import { personalInfo } from "@/lib/data";

export default function Header() {
    return (
        <section id="home" className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 pt-20 pb-10">
            <div className="relative w-48 h-48 mx-auto mb-10 animate-float">
                {/* Glowing rings */}
                <div className="absolute inset-0 bg-nebula/30 rounded-full blur-3xl z-0 animate-pulse-glow"></div>
                <div className="absolute -inset-2 rounded-full border border-nebula/30 z-10 animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute -inset-6 rounded-full border border-starlight/20 z-10 animate-[spin_15s_linear_infinite_reverse]"></div>

                {/* Profile Image */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 shadow-[0_0_40px_rgba(155,108,250,0.3)] z-20 bg-space-800 flex items-center justify-center">
                    {/* Fallback avatar if image is missing */}
                    <Image
                        src="/images/profile.jpg"
                        alt={personalInfo.name}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            <div className="space-y-4 animate-fade-in-up">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-gradient tracking-tight drop-shadow-lg">
                    {personalInfo.name}
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide max-w-2xl mx-auto">
                    {personalInfo.title.split(' & ').map((part, i) => (
                        <span key={i}>
                            {part}
                            {i === 0 && <span className="text-nebula mx-3 font-bold">&amp;</span>}
                        </span>
                    ))}
                </p>
            </div>

            <div className="flex justify-center gap-6 mt-12 text-sm md:text-base text-gray-300/90 flex-wrap font-medium animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-white transition-colors hover:scale-105 duration-300">
                    <Mail size={18} className="text-starlight" /> {personalInfo.email}
                </a>
                <span className="flex items-center gap-2">
                    <Phone size={18} className="text-nebula-light" /> {personalInfo.phone}
                </span>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors hover:scale-105 duration-300">
                    <Linkedin size={18} className="text-starlight" /> LinkedIn
                </a>
            </div>

            <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <a
                    href={personalInfo.cvUrl}
                    download
                    className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-nebula/50 hover:shadow-[0_0_30px_rgba(155,108,250,0.3)] backdrop-blur-md overflow-hidden"
                >
                    <div className="absolute inset-0 w-full h-full -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shimmer"></div>
                    <Download size={18} className="group-hover:-translate-y-1 group-hover:text-nebula-light transition-all duration-300" />
                    <span>Download CV</span>
                </a>
            </div>


        </section>
    );
}