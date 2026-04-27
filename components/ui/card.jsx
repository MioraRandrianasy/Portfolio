export function Card({ children, className }) {
    return (
        <div className={`relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)] ${className}`}>
            {children}
        </div>
    );
}

export function CardContent({ children, className }) {
    return <div className={`p-6 md:p-8 ${className}`}>{children}</div>;
}