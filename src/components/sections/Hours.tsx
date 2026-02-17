
import { SectionTitle } from "../ui/SectionTitle";
import { siteConfig } from "../../config/site";
import { Clock } from "lucide-react";
import { cn } from "../../lib/utils";

export const Hours = () => {
    const today = new Date().toLocaleDateString('pt-BR', { weekday: 'long' });
    const capitalizedToday = today.charAt(0).toUpperCase() + today.slice(1);

    return (
        <section id="hours" className="py-20 bg-brand-darker relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:20px_20px]"></div>

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    <div className="order-2 md:order-1">
                        <SectionTitle subtitle="Funcionamento" centered={false}>
                            Horários de <br /> Atendimento
                        </SectionTitle>
                        <p className="text-brand-light/70 mb-8 max-w-md">
                            Estamos abertos todos os dias para salvar a sua resenha.
                            Confira nossos horários e venha tomar uma gelada ou peça no delivery.
                        </p>
                        <div className="flex items-center gap-4 p-4 bg-brand-gold/10 rounded-lg border border-brand-gold/20 max-w-sm">
                            <Clock className="text-brand-gold" size={24} />
                            <div>
                                <h4 className="font-bold text-white text-sm">Status Atual</h4>
                                <p className="text-brand-gold text-xs">
                                    Consulte disponibilidade no WhatsApp
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 md:order-2 bg-brand-dark p-8 rounded-2xl border border-white/5 shadow-2xl">
                        <ul className="space-y-4">
                            {siteConfig.openingHours.map((item, index) => {
                                const isToday = item.day.toLowerCase() === capitalizedToday.toLowerCase();
                                return (
                                    <li key={index} className={cn("flex justify-between items-center py-3 border-b border-white/5 last:border-0", isToday && "bg-brand-gold/5 -mx-4 px-4 rounded-lg border-transparent")}>
                                        <span className={cn("font-medium", isToday ? "text-brand-gold font-bold" : "text-brand-light")}>
                                            {item.day}
                                        </span>
                                        <span className={cn("text-sm", isToday ? "text-white font-bold" : "text-brand-muted")}>
                                            {item.hours}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};
