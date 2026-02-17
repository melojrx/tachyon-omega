import React from "react";
import { cn } from "../../lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    hoverEffect?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, children, hoverEffect = true, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6 overflow-hidden",
                    hoverEffect && "transition-all duration-300 hover:border-brand-gold/30 hover:bg-white/[0.07] hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-gold/5",
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Card.displayName = "Card";
