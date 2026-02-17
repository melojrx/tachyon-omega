import { Button } from "../ui/Button";
import { Star, Beer, Wine, Cigarette, ExternalLink } from "lucide-react"; // Importar ícones adequados
import { getWhatsAppLink } from "../../lib/links";
import { WhatsAppIcon } from "../ui/Icons";

export const PromoBanner = () => {
    const categories = [
        {
            name: "Cervejas",
            url: "https://brabus.kyte.site/pt-BR/c/cervejas/1749422309838-lQLbG",
            icon: Beer,
            color: "from-amber-500 to-orange-600"
        },
        {
            name: "Drinks Prontos",
            url: "https://brabus.kyte.site/pt-BR/c/drink-prontos/1749426288959-lQLbG",
            icon: Wine,
            color: "from-pink-500 to-rose-600"
        },
        {
            name: "Tabacaria",
            url: "https://brabus.kyte.site/pt-BR/c/tabacaria/2174952223207810-lQLb",
            icon: Cigarette,
            color: "from-gray-400 to-gray-600"
        }
    ];

    return (
        <section id="promos" className="py-20 animate-bg-pulse bg-gradient-to-r from-brand-accent/20 via-brand-dark to-brand-accent/20 border-y border-brand-gold/20 relative overflow-hidden">
            {/* Abstract shapes */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="container-custom relative z-10 text-center">
                <div className="max-w-4xl mx-auto bg-brand-darker/60 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-brand-gold/30 shadow-[0_0_30px_rgba(251,191,36,0.15)]">
                    <div className="flex justify-center mb-6">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold text-brand-darker font-bold text-sm uppercase tracking-wide animate-pulse">
                            <Star size={16} className="fill-brand-darker" /> Destaque da Semana
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-6">
                        Combos & Ofertas
                    </h2>

                    <p className="text-lg text-brand-light/90 mb-10 leading-relaxed max-w-2xl mx-auto">
                        Acesse nosso catálogo online e peça agora mesmo. Chega rapidinho e gelada!
                    </p>

                    {/* Category Buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-left">
                        {categories.map((cat) => (
                            <a
                                key={cat.name}
                                href={cat.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative overflow-hidden rounded-xl bg-brand-dark border border-white/10 hover:border-brand-gold/50 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${cat.color} transition-opacity duration-300`}></div>
                                <div className="p-6 flex flex-col items-center justify-center gap-3 relative z-10">
                                    <div className={`p-3 rounded-full bg-brand-darker/50 text-white group-hover:bg-brand-gold group-hover:text-brand-darker transition-colors duration-300`}>
                                        <cat.icon size={24} />
                                    </div>
                                    <span className="font-bold text-white group-hover:text-brand-gold transition-colors">{cat.name}</span>
                                    <span className="text-xs text-brand-light/50 flex items-center gap-1 group-hover:text-brand-light/80">
                                        Ver opções <ExternalLink size={10} />
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="https://brabus.kyte.site/pt-BR" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-brand-gold text-brand-darker hover:bg-brand-light hover:text-brand-darker font-bold">
                                Ver Catálogo Completo
                            </Button>
                        </a>

                        <a href={getWhatsAppLink("Olá, tenho uma dúvida sobre o catálogo!")} target="_blank" rel="noopener noreferrer">
                            <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 border-brand-gold/30 text-brand-gold hover:bg-brand-gold/10">
                                <WhatsAppIcon size={20} className="mr-2" />
                                Tirar Dúvidas
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
