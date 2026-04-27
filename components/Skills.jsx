import { skills } from "@/lib/data";
import { Code2 } from "lucide-react";

export default function Skills() {
    return (
        <section id="skills" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-10">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                    <Code2 className="text-nebula-light" size={24} />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-semibold text-white tracking-tight">
                    Skills
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                {Object.entries(skills).map(([category, items], idx) => (
                    <div key={idx} className="glass-panel rounded-2xl p-8 hover:bg-white/[0.05] transition-all duration-500 hover:-translate-y-1 hover:shadow-lg border-t-2 border-t-transparent hover:border-t-nebula/50">
                        <h3 className="text-xl font-display font-semibold text-white mb-6 flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-starlight animate-pulse"></span>
                            {category}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {items.map((skill, sIdx) => (
                                <span
                                    key={sIdx}
                                    className="px-4 py-2 bg-gradient-to-r from-white/5 to-white/10 border border-white/10 rounded-full text-gray-200 text-sm font-medium hover:border-nebula-light hover:text-white transition-all cursor-default hover:shadow-[0_0_15px_rgba(155,108,250,0.3)] hover:-translate-y-0.5"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}