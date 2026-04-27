import { publications } from "@/lib/data";
import { BookOpen, ExternalLink } from "lucide-react";

export default function Publications() {
    return (
        <section id="publications" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-10">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                    <BookOpen className="text-starlight" size={24} />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-semibold text-white tracking-tight">
                    Publications
                </h2>
            </div>

            <div className="space-y-6">
                {publications.map((pub, idx) => (
                    <div key={idx} className="glass-panel rounded-2xl p-6 md:p-8 hover:-translate-y-1 hover:shadow-[0_10px_30px_-15px_rgba(56,189,248,0.3)] transition-all duration-300 relative overflow-hidden group border-l-2 border-l-starlight hover:border-l-nebula-light">
                        <div className="flex flex-col md:flex-row gap-6 justify-between items-start">
                            <div className="flex-grow">
                                <h3 className="text-xl md:text-2xl font-display font-semibold text-white mb-2 leading-tight group-hover:text-starlight transition-colors">
                                    {pub.title}
                                </h3>
                                <div className="flex items-center gap-3 text-sm text-gray-300 mb-4 font-medium uppercase tracking-wider">
                                    <span className="text-nebula-light">{pub.venue}</span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                                    <span>{pub.year}</span>
                                </div>
                                <p className="text-gray-400 leading-relaxed font-light mb-6">
                                    {pub.abstract}
                                </p>
                            </div>
                            
                            {pub.link && (
                                <a
                                    href={pub.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-starlight/50 rounded-full transition-all duration-300"
                                >
                                    NASA ADS <ExternalLink size={16} className="text-starlight" />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}