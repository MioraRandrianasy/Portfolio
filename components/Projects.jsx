import { projects } from "@/lib/data";
import { FolderGit2, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Projects() {
    return (
        <section id="projects" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-10">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-nebula/30 transition-colors">
                    <FolderGit2 className="text-starlight" size={24} />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-semibold text-white tracking-tight">
                    Featured Projects
                </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {projects.map((project, idx) => {
                    const Icon = project.icon;
                    return (
                        <div key={idx} className="glass-card rounded-2xl overflow-hidden group hover:-translate-y-2 hover:border-white/20 transition-all duration-500 flex flex-col h-full hover:shadow-[0_10px_40px_-15px_rgba(155,108,250,0.3)]">
                            <div className="relative h-56 w-full overflow-hidden bg-space-800">
                                <div className="absolute inset-0 bg-gradient-to-br from-nebula-dark/40 to-space-900 z-0"></div>
                                {project.image && (
                                    <Image 
                                        src={project.image} 
                                        alt={project.title} 
                                        fill 
                                        className="object-cover opacity-60 group-hover:opacity-90 transition-all duration-700 group-hover:scale-105 mix-blend-overlay" 
                                    />
                                )}
                                <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2 z-10 shadow-lg">
                                    <Icon size={14} className="text-starlight drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                                    <span className="text-xs font-bold text-white uppercase tracking-wider">{project.category}</span>
                                </div>
                            </div>
                            
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-nebula-light transition-colors drop-shadow-sm">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed mb-8 flex-grow font-light text-lg">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                                    {project.tags.map((tag, tIdx) => (
                                        <span key={tIdx} className="text-xs font-medium px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-gray-200 group-hover:border-white/20 transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-starlight hover:text-white transition-colors mt-auto w-max group/link">
                                        View Project <ExternalLink size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                    </a>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}