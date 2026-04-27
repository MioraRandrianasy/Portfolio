"use client";
import { useState, useEffect } from "react";
import {
    Home, User, Briefcase, FolderGit2, Code2, BookOpen,
    GraduationCap, Trophy, Presentation, Menu, X
} from "lucide-react";

const navItems = [
    { id: "home",         icon: Home,          label: "Home" },
    { id: "about",        icon: User,          label: "About" },
    { id: "experience",   icon: Briefcase,     label: "Experience" },
    { id: "projects",     icon: FolderGit2,    label: "Projects" },
    { id: "education",    icon: GraduationCap, label: "Education" },
    { id: "skills",       icon: Code2,         label: "Skills" },
    { id: "awards",       icon: Trophy,        label: "Awards" },
    { id: "publications", icon: BookOpen,      label: "Publications" },
    { id: "workshops",    icon: Presentation,  label: "Workshops" },
];

export default function NavBar() {
    const [activeSection, setActiveSection] = useState("home");
    const [scrolled, setScrolled]           = useState(false);
    const [menuOpen, setMenuOpen]           = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            const ids = navItems.map(n => n.id);
            for (const id of ids) {
                const el = document.getElementById(id);
                if (el) {
                    const { top, bottom } = el.getBoundingClientRect();
                    if (top <= 150 && bottom >= 150) { setActiveSection(id); break; }
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
    };

    /* ── Desktop pill (md+) ─────────────────────────────────── */
    const desktopNav = (
        <nav className="hidden md:block fixed top-4 left-1/2 -translate-x-1/2 z-50">
            <div className={`flex items-center gap-0.5 px-2 py-1.5 rounded-full backdrop-blur-xl border transition-all duration-500 ${scrolled ? "bg-space-900/85 border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" : "bg-space-900/50 border-white/10"}`}>
                {navItems.map(({ id, icon: Icon, label }) => {
                    const active = activeSection === id;
                    return (
                        <button
                            key={id}
                            id={`nav-${id}`}
                            onClick={() => scrollTo(id)}
                            aria-label={label}
                            className={`relative flex items-center justify-center p-2.5 lg:px-3 lg:py-2 rounded-full transition-all duration-300 group ${active ? "text-white" : "text-gray-400 hover:text-white"}`}
                        >
                            {active && <div className="absolute inset-0 bg-white/10 rounded-full z-0" />}
                            <Icon size={15} className="relative z-10 lg:mr-1.5 shrink-0" />
                            <span className="relative z-10 text-xs font-medium hidden lg:block whitespace-nowrap">{label}</span>

                            {/* Tooltip — visible on md only (hidden on lg where label shows) */}
                            <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 px-2 py-1 bg-space-800 text-xs text-white rounded-lg opacity-0 group-hover:opacity-100 lg:hidden transition-opacity whitespace-nowrap border border-white/10 pointer-events-none z-50 shadow-lg">
                                {label}
                            </span>
                        </button>
                    );
                })}
            </div>
        </nav>
    );

    /* ── Mobile hamburger button ────────────────────────────── */
    const mobileButton = (
        <button
            id="nav-mobile-toggle"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle navigation"
            className={`md:hidden fixed top-4 right-4 z-50 p-3 rounded-full backdrop-blur-xl border transition-all duration-300 ${menuOpen || scrolled ? "bg-space-900/90 border-white/15 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" : "bg-space-900/60 border-white/10"}`}
        >
            {menuOpen
                ? <X    size={20} className="text-white" />
                : <Menu size={20} className="text-white" />}
        </button>
    );

    /* ── Mobile full-screen overlay menu ───────────────────── */
    const mobileMenu = menuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-space-900/97 backdrop-blur-2xl flex flex-col items-center justify-center gap-2 p-8 animate-fade-in">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-4 font-semibold">Navigation</p>
            {navItems.map(({ id, icon: Icon, label }) => {
                const active = activeSection === id;
                return (
                    <button
                        key={id}
                        onClick={() => scrollTo(id)}
                        className={`flex items-center gap-4 w-full max-w-xs px-6 py-4 rounded-2xl transition-all duration-200 text-base font-medium border ${
                            active
                                ? "bg-white/10 text-white border-white/20"
                                : "text-gray-300 hover:text-white hover:bg-white/5 border-transparent"
                        }`}
                    >
                        <Icon size={18} className={active ? "text-nebula-light" : "text-gray-500"} />
                        {label}
                        {active && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-nebula-light" />}
                    </button>
                );
            })}
        </div>
    );

    return (
        <>
            {desktopNav}
            {mobileButton}
            {mobileMenu}
        </>
    );
}
