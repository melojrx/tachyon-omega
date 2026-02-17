import React from "react";
import { cn } from "../../lib/utils";

interface SectionTitleProps {
    children: React.ReactNode;
    subtitle?: string;
    className?: string;
    centered?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
    children,
    subtitle,
    className,
    centered = true,
}) => {
    return (
        <div className={cn("mb-12", centered && "text-center", className)}>
            {subtitle && (
                <span className="inline-block py-1 px-3 rounded-full bg-brand-gold/10 text-brand-gold text-xs font-bold uppercase tracking-wider mb-3 border border-brand-gold/20">
                    {subtitle}
                </span>
            )}
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 leading-tight">
                {children}
            </h2>
            <div className={cn("h-1 w-20 bg-brand-gold rounded-full", centered && "mx-auto")} />
        </div>
    );
};
