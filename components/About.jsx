import { personalInfo } from "@/lib/data";
import { User, Sparkles } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="scroll-mt-24">
            <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:border-white/20 transition-all duration-500">
                <div className="absolute top-0 right-0 w-64 h-64 bg-nebula/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-nebula/20 transition-colors duration-500"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-starlight/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 group-hover:bg-starlight/20 transition-colors duration-500"></div>
                
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-nebula/30 transition-colors">
                            <User className="text-nebula-light" size={24} />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-display font-semibold text-white tracking-tight">
                            About Me
                        </h2>
                    </div>
                    
                    <div className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed font-light">
                        {personalInfo.bio.map((paragraph, idx) => (
                            <p key={idx} className="flex gap-4 items-start">
                                {idx === 0 && <Sparkles className="text-starlight mt-1.5 flex-shrink-0" size={20} />}
                                {idx !== 0 && <span className="w-5 flex-shrink-0"></span>}
                                <span>{paragraph}</span>
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}