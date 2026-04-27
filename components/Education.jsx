import { education } from "@/lib/data";
import { GraduationCap } from "lucide-react";

export default function Education() {
    return (
        <section id="education" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-10">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-nebula/30 transition-colors">
                    <GraduationCap className="text-nebula-light" size={24} />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-semibold text-white tracking-tight">
                    Education
                </h2>
            </div>
            
            <div className="space-y-6">
                {education.map((item, idx) => (
                    <div key={idx} className="glass-panel rounded-2xl p-6 md:p-8 hover:-translate-y-1 hover:border-white/20 transition-all duration-300 relative group border-l-2 border-l-starlight hover:border-l-nebula-light">
                        <div className="flex flex-col md:flex-row justify-between gap-4 mb-3">
                            <h3 className="text-xl md:text-2xl font-display font-semibold text-white group-hover:text-nebula-light transition-colors">
                                {item.degree}
                            </h3>
                            <span className="inline-flex items-center px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-starlight border border-white/10 w-max h-min">
                                {item.period}
                            </span>
                        </div>
                        <p className="text-lg font-medium text-gray-200 mb-1">
                            {item.institution}
                        </p>
                        <p className="text-sm text-gray-400 mb-4 uppercase tracking-wider font-semibold">
                            Grade: {item.grade}
                        </p>
                        
                        {item.department && (
                            <p className="text-gray-300 font-light mb-2"><span className="text-white/50 font-medium">Department:</span> {item.department}</p>
                        )}
                        {item.thesis && (
                            <p className="text-gray-300 font-light mb-2"><span className="text-white/50 font-medium">Thesis:</span> {item.thesis}</p>
                        )}
                        {item.supervisor && (
                            <p className="text-gray-300 font-light mb-2"><span className="text-white/50 font-medium">Supervisor:</span> {item.supervisor}</p>
                        )}
                        {item.note && (
                            <p className="text-gray-300 font-light"><span className="text-white/50 font-medium">Note:</span> {item.note}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
