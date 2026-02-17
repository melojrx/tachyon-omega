import { useState, useEffect } from "react";
import { Menu, X, Instagram } from "lucide-react";
import { Button } from "../ui/Button";
import { cn } from "../../lib/utils";
import { getWhatsAppLink, getInstagramLink } from "../../lib/links";
import { scrollToSection } from "../../lib/scroll";
import { WhatsAppIcon } from "../ui/Icons";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { label: "Início", id: "hero" },
        { label: "Destaques", id: "highlights" },
        { label: "Promoções", id: "promos" },
        { label: "Entregas", id: "delivery" },
        { label: "Horários", id: "hours" },
        { label: "Localização", id: "location" },
        { label: "Contato", id: "contact" },
    ];

    const handleNavClick = (id: string) => {
        setIsOpen(false);
        scrollToSection(id);
    };

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
                scrolled
                    ? "bg-brand-darker/95 backdrop-blur-md border-white/10 py-3 shadow-lg"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container-custom flex items-center justify-between">
                {/* Logo */}
                <div
                    className="flex items-center gap-2 cursor-pointer group"
                    onClick={() => handleNavClick("hero")}
                >
                    {/* Logo Placeholder (Image or Text) */}
                    <div className="relative w-10 h-10 overflow-hidden rounded-full border border-brand-gold/30 group-hover:border-brand-gold transition-colors">
                        <img
                            src="/brabus_logo.jpeg"
                            alt="Brabu's Logo"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.parentElement?.classList.add('bg-brand-gold', 'flex', 'items-center', 'justify-center');
                                if (e.currentTarget.parentElement) {
                                    e.currentTarget.parentElement.innerHTML = '<span class="text-brand-darker font-bold text-xs">B</span>';
                                }
                            }}
                        />
                    </div>
                    <span className="text-xl font-heading font-bold text-white tracking-wide">
                        BRABU<span className="text-brand-gold">’S</span>
                    </span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-6">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleNavClick(item.id)}
                            className="text-brand-light hover:text-brand-gold text-sm font-medium transition-colors uppercase tracking-wide"
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden lg:block">
                    <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="whatsapp" className="gap-2">
                            <WhatsAppIcon size={16} />
                            Pedir Agora
                        </Button>
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    "fixed inset-0 top-[76px] bg-brand-darker z-40 lg:hidden transition-all duration-300 flex flex-col items-center justify-start pt-12 gap-8 border-t border-white/10",
                    isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4 pointer-events-none"
                )}
                style={{ height: 'calc(100vh - 76px)' }}
            >
                <nav className="flex flex-col items-center gap-6 w-full">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleNavClick(item.id)}
                            className="text-2xl font-heading font-bold text-white hover:text-brand-gold transition-colors w-full text-center py-2 active:bg-white/5"
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>
                <div className="flex flex-col gap-4 w-64 mt-4">
                    <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="w-full">
                        <Button size="lg" variant="whatsapp" className="w-full gap-2 shadow-lg">
                            <WhatsAppIcon size={20} />
                            Fazer Pedido
                        </Button>
                    </a>
                    <a href={getInstagramLink()} target="_blank" rel="noopener noreferrer" className="w-full">
                        <Button size="lg" variant="outline" className="w-full gap-2 border-white/20 text-white">
                            <Instagram size={20} />
                            Ver Instagram
                        </Button>
                    </a>
                </div>
            </div>
        </header>
    );
};
