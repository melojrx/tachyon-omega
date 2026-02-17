import { WhatsAppIcon } from "./ui/Icons";
import { getWhatsAppLink } from "../lib/links";

export const FloatingWhatsApp = () => {
    return (
        <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 animate-bounce-slow group"
            aria-label="Chamar no WhatsApp"
        >
            <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20"></div>
            <div className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/40 hover:scale-110 transition-transform duration-300">
                <WhatsAppIcon size={32} className="text-white fill-current" />

                {/* Tooltip */}
                <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-brand-darker px-3 py-1.5 rounded-lg text-sm font-bold shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block">
                    Pedir agora!
                </span>
            </div>
        </a>
    );
};
