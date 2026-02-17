import { SectionTitle } from "../ui/SectionTitle";
import { Card } from "../ui/Card";
import { Instagram, Smartphone } from "lucide-react";
import { getInstagramLink, getWhatsAppLink } from "../../lib/links";
import { siteConfig } from "../../config/site";

export const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-brand-dark relative">
            <div className="container-custom">
                <SectionTitle subtitle="Fale Conosco">Canais de Atendimento</SectionTitle>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {/* WhatsApp Card */}
                    <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="block h-full">
                        <Card className="h-full flex flex-col items-center justify-center text-center hover:border-[#25D366]/50 group cursor-pointer">
                            <div className="w-16 h-16 rounded-full bg-[#25D366]/10 flex items-center justify-center mb-4 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors duration-300">
                                <Smartphone size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
                            <p className="text-brand-light/70 mb-4">Faça seu pedido ou tire dúvidas.</p>
                            <span className="text-brand-gold font-medium">{siteConfig.whatsappNumber}</span>
                        </Card>
                    </a>

                    {/* Instagram Card */}
                    <a href={getInstagramLink()} target="_blank" rel="noopener noreferrer" className="block h-full">
                        <Card className="h-full flex flex-col items-center justify-center text-center hover:border-pink-500/50 group cursor-pointer">
                            <div className="w-16 h-16 rounded-full bg-pink-500/10 flex items-center justify-center mb-4 text-pink-500 group-hover:bg-gradient-to-tr group-hover:from-purple-500 group-hover:to-pink-500 group-hover:text-white transition-all duration-300">
                                <Instagram size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Instagram</h3>
                            <p className="text-brand-light/70 mb-4">Siga para novidades e promoções.</p>
                            <small className="text-brand-light/50">@brabus_conveniencia</small>
                        </Card>
                    </a>
                </div>
            </div>
        </section>
    );
};
