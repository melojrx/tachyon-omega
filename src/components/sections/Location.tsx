import { useState } from "react";
import { SectionTitle } from "../ui/SectionTitle";
import { siteConfig } from "../../config/site";
import { MapPin, ExternalLink } from "lucide-react";
import { Button } from "../ui/Button";
import { getGoogleMapsLink } from "../../lib/links";

export const Location = () => {
    const [isMapLoaded, setIsMapLoaded] = useState(false);

    return (
        <section id="location" className="py-20 bg-brand-dark">
            <div className="container-custom">
                <SectionTitle subtitle="Onde Estamos">Localização</SectionTitle>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 rounded-2xl overflow-hidden border border-white/10 bg-brand-darker">

                    {/* Address Info */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mb-6 text-brand-gold">
                            <MapPin size={32} />
                        </div>
                        <h3 className="text-2xl font-heading font-bold text-white mb-4">
                            Visite a Loja
                        </h3>
                        <p className="text-brand-light/70 mb-8 leading-relaxed">
                            {siteConfig.addressText}
                        </p>
                        <a href={getGoogleMapsLink()} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" className="w-full gap-2">
                                Abrir no Google Maps <ExternalLink size={16} />
                            </Button>
                        </a>
                    </div>

                    {/* Map Embed */}
                    <div className="lg:col-span-2 min-h-[300px] lg:min-h-[450px] relative bg-brand-dark flex items-center justify-center overflow-hidden">

                        {/* Custom Marker Overlay */}
                        <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-[80%] pointer-events-none group">
                            <div className="relative">
                                <div className="w-16 h-16 bg-brand-darker rounded-full border-4 border-brand-gold shadow-[0_0_20px_rgba(251,191,36,0.4)] flex items-center justify-center overflow-hidden relative z-10">
                                    <img src="/brabus_logo.jpeg" alt="Brabu's" className="w-full h-full object-cover" />
                                </div>
                                {/* Pin Triangle */}
                                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[14px] border-t-brand-gold"></div>
                                {/* Glow */}
                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-20 h-6 bg-black/50 blur-md rounded-[100%]"></div>
                            </div>
                        </div>

                        {/* Loading State */}
                        {!isMapLoaded && (
                            <div className="absolute inset-0 bg-brand-dark z-10 flex items-center justify-center">
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-8 h-8 border-4 border-brand-gold border-t-transparent rounded-full animate-spin"></div>
                                    <span className="text-brand-light/50 text-sm">Carregando Mapa...</span>
                                </div>
                            </div>
                        )}

                        <iframe
                            width="100%"
                            height="100%"
                            style={{
                                border: 0,
                                filter: "invert(90%) hue-rotate(180deg) contrast(90%) grayscale(20%)"
                            }}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Localização Brabu's Conveniência"
                            src="https://maps.google.com/maps?q=-4.3710409474311325,-38.8084505779096&t=&z=17&ie=UTF8&iwloc=B&output=embed"
                            onLoad={() => setIsMapLoaded(true)}
                            className="absolute inset-0 w-full h-full object-cover"
                        >
                        </iframe>

                        {/* Overlay to ensure dark mode consistency / tint */}
                        <div className="absolute inset-0 bg-brand-gold/5 pointer-events-none mix-blend-overlay"></div>

                    </div>

                </div>
            </div>
        </section>
    );
};
