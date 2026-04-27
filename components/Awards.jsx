import { awards } from "@/lib/data";
import { Trophy } from "lucide-react";

export default function Awards() {
    return (
        <section id="awards" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-10">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                    <Trophy className="text-starlight" size={24} />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-semibold text-white tracking-tight">
                    Honors & Awards
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {awards.map((award, idx) => (
                    <div key={idx} className="glass-panel p-6 rounded-2xl hover:bg-white/[0.05] transition-all duration-300 border border-white/5 hover:border-white/20">
                        <h3 className="text-xl font-display font-semibold text-white mb-2">
                            {award.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 text-sm text-starlight mb-4 font-medium">
                            <span>{award.organization}</span>
                            <span className="w-1 h-1 rounded-full bg-white/30 my-auto"></span>
                            <span>{award.date}</span>
                        </div>
                        <p className="text-gray-400 font-light leading-relaxed">
                            {award.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
