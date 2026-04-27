import { workshops } from "@/lib/data";
import { Presentation } from "lucide-react";

export default function Workshops() {
    return (
        <section id="workshops" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-10">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                    <Presentation className="text-nebula-light" size={24} />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-semibold text-white tracking-tight">
                    Workshops & Schools
                </h2>
            </div>

            <div className="space-y-4">
                {workshops.map((workshop, idx) => (
                    <div key={idx} className="glass-panel p-6 rounded-2xl hover:border-white/20 transition-colors flex flex-col md:flex-row gap-4 md:items-start">
                        <div className="flex-shrink-0 md:w-1/3">
                            <h3 className="text-lg font-display font-semibold text-white mb-1">
                                {workshop.name}
                            </h3>
                            <p className="text-sm text-starlight mb-1 font-medium">{workshop.organizer}</p>
                            <p className="text-xs text-gray-400 uppercase tracking-wide">{workshop.date}</p>
                        </div>
                        <div className="md:w-2/3 md:border-l border-white/10 md:pl-6">
                            <p className="text-gray-300 font-light leading-relaxed text-sm md:text-base">
                                {workshop.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
