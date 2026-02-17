
import { SectionTitle } from "../ui/SectionTitle";
import { siteConfig } from "../../config/site";
import { ShoppingBag, Truck, ShoppingCart } from "lucide-react";
import { Button } from "../ui/Button";

export const Delivery = () => {
    const steps = [
        {
            icon: ShoppingBag,
            title: "1. Escolha seus Produtos",
            description: "Navegue pelo nosso catálogo completo com fotos e preços atualizados.",
        },
        {
            icon: ShoppingCart,
            title: "2. Finalize o Pedido",
            description: "Monte seu carrinho e faça o pagamento direto pela plataforma (Pix ou Cartão).",
        },
        {
            icon: Truck,
            title: "3. Receba em Casa",
            description: "Acompanhe e aguarde. Entregamos rapidinho na sua porta.",
        },
    ];

    return (
        <section id="delivery" className="py-24 bg-brand-dark border-t border-white/5 relative">
            <div className="container-custom">
                <SectionTitle subtitle="Como funciona">Delivery Brabu's</SectionTitle>

                <p className="text-center text-brand-light/70 max-w-2xl mx-auto mb-16 -mt-8">
                    {siteConfig.deliveryInfo}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent z-0" />

                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10 flex flex-col items-center text-center">
                            <div className="w-24 h-24 rounded-full bg-brand-dark border-2 border-brand-gold/20 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(251,191,36,0.1)] group hover:border-brand-gold hover:scale-110 transition-all duration-300 bg-brand-darker">
                                <step.icon size={36} className="text-brand-gold" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                            <p className="text-brand-light/70 max-w-xs">{step.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-block p-[2px] rounded-lg bg-gradient-to-r from-brand-gold/50 to-transparent">
                        <span className="block px-4 py-2 bg-brand-darker rounded-lg text-xs text-brand-muted uppercase tracking-wider">
                            * Taxa de entrega e tempo variam de acordo com o bairro
                        </span>
                    </div>
                    <div className="mt-8">
                        <a href="https://brabus.kyte.site/pt-BR" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="px-8 h-12 text-base font-bold bg-brand-gold text-brand-darker hover:bg-brand-light">
                                Fazer Pedido Online
                            </Button>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};
