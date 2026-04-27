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
                {workshops.map((workshop, idx) => {
                    const Wrapper = workshop.link ? 'a' : 'div';
                    const wrapperProps = workshop.link
                        ? { href: workshop.link, target: "_blank", rel: "noopener noreferrer", className: "block group" }
                        : { className: "block group" };

                    return (
                        <Wrapper key={idx} {...wrapperProps}>
                            <div className="glass-panel p-6 rounded-2xl group-hover:border-white/20 transition-all duration-300 flex flex-col md:flex-row gap-6 md:items-stretch">
                                {workshop.image && (
                                    <div className="flex-shrink-0 w-full md:w-1/4 md:max-w-[200px] rounded-xl overflow-hidden border border-white/10">
                                        <img
                                            src={workshop.image}
                                            alt={workshop.name}
                                            className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                )}
                                <div className="flex flex-col md:flex-row gap-4 flex-grow">
                                    <div className="flex-shrink-0 md:w-1/3 flex flex-col justify-center">
                                        <h3 className="text-lg font-display font-semibold text-white mb-1 group-hover:text-nebula-light transition-colors">
                                            {workshop.name}
                                        </h3>
                                        <p className="text-sm text-starlight mb-1 font-medium">{workshop.organizer}</p>
                                        <p className="text-xs text-gray-400 uppercase tracking-wide">{workshop.date}</p>
                                    </div>
                                    <div className="md:border-l border-white/10 md:pl-6 flex-grow flex flex-col justify-center">
                                        <p className="text-gray-300 font-light leading-relaxed text-sm md:text-base">
                                            {workshop.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Wrapper>
                    );
                })}
            </div>
        </section>
    );
}
