import { experience } from "@/lib/data";
import { Briefcase } from "lucide-react";

export default function Experience() {
    return (
        <section id="experience" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-10">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                    <Briefcase className="text-nebula-light" size={24} />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-semibold text-white tracking-tight">
                    Experience & Research
                </h2>
            </div>

            <div className="relative border-l-2 border-white/10 ml-4 md:ml-6 space-y-10 pb-4">
                {experience.map((item, idx) => (
                    <div key={idx} className="relative pl-8 md:pl-10 group">
                        {/* Timeline dot */}
                        <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-space-900 border-2 border-starlight group-hover:border-nebula-light group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(56,189,248,0.5)]"></div>
                        
                        <div className="glass-panel p-6 rounded-2xl hover:border-white/20 transition-colors">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                                <div>
                                    <h3 className="text-xl font-display font-semibold text-white group-hover:text-nebula-light transition-colors">
                                        {item.role}
                                    </h3>
                                    <p className="text-starlight font-medium text-sm mt-1">
                                        {item.organization}
                                    </p>
                                </div>
                                <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-gray-300 border border-white/5 whitespace-nowrap">
                                    {item.period}
                                </span>
                            </div>
                            <p className="text-gray-400 font-light leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
