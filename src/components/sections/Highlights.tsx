
import { SectionTitle } from "../ui/SectionTitle";
import { Card } from "../ui/Card";
import { siteConfig } from "../../config/site";
import { Beer, Sandwich, ShoppingCart, Cigarette, Flame, Package } from "lucide-react";

export const Highlights = () => {


    return (
        <section id="highlights" className="py-20 bg-brand-dark border-t border-white/5 relative">
            <div className="container-custom">
                <SectionTitle subtitle="O que você encontra aqui">
                    Tudo que você precisa
                </SectionTitle>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {siteConfig.highlights.map((item, index) => {
                        const icons = [Beer, Flame, Sandwich, Cigarette, ShoppingCart, Package];
                        const Icon = icons[index % icons.length];

                        return (
                            <Card key={index} className="flex flex-col items-center text-center p-8 group">
                                <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center mb-6 border border-brand-gold/20 group-hover:bg-brand-gold group-hover:border-brand-gold transition-all duration-300">
                                    <Icon size={32} className="text-brand-gold group-hover:text-brand-darker transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-brand-light/70">{item.description}</p>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};
