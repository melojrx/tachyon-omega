
import { siteConfig } from "../../config/site";
import { Instagram, MapPin, Phone, ExternalLink, Heart, Coffee } from "lucide-react";
import { getGoogleMapsLink, getInstagramLink, getWhatsAppLink } from "../../lib/links";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-darker border-t border-white/5 pt-16 pb-8">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-heading font-bold text-white">
                            BRABU<span className="text-brand-gold">’S</span>
                            <span className="block text-sm font-sans font-normal text-brand-muted mt-1 opacity-80">
                                Conveniência & Tabacaria
                            </span>
                        </h3>
                        <p className="text-brand-light/70 max-w-xs text-sm leading-relaxed">
                            {siteConfig.tagline}
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a
                                href={getInstagramLink()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-darker transition-all duration-300"
                                aria-label="Instagram"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href={getWhatsAppLink()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#25D366] hover:text-white transition-all duration-300"
                                aria-label="WhatsApp"
                            >
                                <Phone size={20} />
                            </a>
                            <a
                                href={getGoogleMapsLink()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-blue-500 hover:text-white transition-all duration-300"
                                aria-label="Localização"
                            >
                                <MapPin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-white">Acesso Rápido</h4>
                        <ul className="space-y-2 text-sm text-brand-light/70">
                            <li>
                                <a href="#hero" className="hover:text-brand-gold transition-colors">Início</a>
                            </li>
                            <li>
                                <a href="#highlights" className="hover:text-brand-gold transition-colors">Destaques</a>
                            </li>
                            <li>
                                <a href="#promos" className="hover:text-brand-gold transition-colors">Promoções</a>
                            </li>
                            <li>
                                <a href="#hours" className="hover:text-brand-gold transition-colors">Horários</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-white">Onde Estamos</h4>
                        <p className="text-brand-light/70 text-sm leading-relaxed flex items-start gap-2">
                            <MapPin size={16} className="mt-1 text-brand-gold shrink-0" />
                            {siteConfig.addressText}
                        </p>
                        <a
                            href={getGoogleMapsLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-xs text-brand-gold hover:underline mt-1"
                        >
                            Abrir no mapa <ExternalLink size={12} className="ml-1" />
                        </a>

                        <div className="pt-4 border-t border-white/5 mt-4">
                            <p className="text-xs text-brand-muted">
                                Preços e disponibilidade sujeitos a alteração sem aviso prévio.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-xs text-brand-muted">
                    <p>
                        &copy; {currentYear} {siteConfig.storeName}. Todos os direitos reservados.
                    </p>
                    <p className="mt-2 flex items-center justify-center gap-1">
                        Desenvolvido com <Heart size={12} className="text-red-500 fill-red-500 animate-pulse" /> e <Coffee size={12} className="text-brand-gold animate-bounce" /> por <a href="https://melojrx.github.io/" target="_blank" rel="noopener noreferrer" className="text-brand-light hover:text-brand-gold transition-colors font-medium">Júnior Melo</a> para <span className="font-heading font-bold ml-0.5">BRABU<span className="text-brand-gold">’S</span></span>
                    </p>
                </div>
            </div>
        </footer>
    );
};
