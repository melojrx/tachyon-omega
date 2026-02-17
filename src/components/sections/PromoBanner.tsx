import { Button } from "../ui/Button";
import { Star } from "lucide-react";
import { getWhatsAppLink } from "../../lib/links";
import { WhatsAppIcon } from "../ui/Icons";

export const PromoBanner = () => {
    return (
        <section id="promos" className="py-20 animate-bg-pulse bg-gradient-to-r from-brand-accent/20 via-brand-dark to-brand-accent/20 border-y border-brand-gold/20 relative overflow-hidden">
            {/* Abstract shapes */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="container-custom relative z-10 text-center">
                <div className="max-w-3xl mx-auto bg-brand-darker/60 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-brand-gold/30 shadow-[0_0_30px_rgba(251,191,36,0.15)]">
                    <div className="flex justify-center mb-6">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold text-brand-darker font-bold text-sm uppercase tracking-wide animate-pulse">
                            <Star size={16} className="fill-brand-darker" /> Destaque da Semana
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-6">
                        Promoções Relâmpago
                    </h2>

                    <p className="text-lg text-brand-light/90 mb-8 leading-relaxed">
                        Fique de olho nos nossos stories e não perca as ofertas exclusivas de cervejas, destilados e combos para o seu final de semana.
                    </p>

                    <a href={getWhatsAppLink("Olá, vi o banner de promoções no site! O que tem de bom hoje?")} target="_blank" rel="noopener noreferrer">
                        <Button size="lg" variant="whatsapp" className="text-lg px-10 h-14 w-full sm:w-auto shadow-xl shadow-[#25D366]/20 bg-[#00A884] hover:bg-[#008f6f]">
                            <WhatsAppIcon size={20} className="mr-2" />
                            Pedir Promoção no WhatsApp
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    );
};
