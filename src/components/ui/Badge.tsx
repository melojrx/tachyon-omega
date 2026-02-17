import React from "react";
import { cn } from "../../lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: "default" | "gold";
}

export const Badge: React.FC<BadgeProps> = ({ className, variant = "default", children, ...props }) => {
    const variants = {
        default: "bg-white/10 text-white border-white/10",
        gold: "bg-brand-gold/10 text-brand-gold border-brand-gold/20",
    };

    return (
        <span
            className={cn(
                "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </span>
    );
};
