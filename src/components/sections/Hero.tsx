import { useState } from "react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { getInstagramLink, getWhatsAppLink } from "../../lib/links";
import { Instagram, Volume2, VolumeX } from "lucide-react";
import { WhatsAppIcon } from "../ui/Icons";

export const Hero = () => {
    const [isMuted, setIsMuted] = useState(true);
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-12 overflow-hidden bg-brand-darker text-center"
        >
            {/* Background Ambience */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[100px] animate-pulse-slow" />
                {/* Vignette */}
                <div className="absolute inset-0 bg-radial-gradient from-transparent to-brand-darker/90" />
            </div>

            <div className="container-custom relative z-10 flex flex-col items-center">

                {/* 1. Badge at Top */}
                <div className="mb-10 animate-fade-in-up">
                    <Badge variant="gold" className="px-4 py-1.5 flex items-center gap-2 uppercase tracking-widest text-xs font-bold bg-brand-dark/50 border border-brand-gold text-brand-gold shadow-[0_0_15px_rgba(251,191,36,0.2)]">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        Aberto Agora • Entrega Rápida
                    </Badge>
                </div>

                {/* 2. Central Large Logo (Video) */}
                <div className="mb-12 relative animate-float group">
                    {/* Glow effect behind logo */}
                    <div className="absolute inset-0 bg-brand-gold/20 rounded-full blur-2xl transform scale-110" />

                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-brand-gold/30 overflow-hidden shadow-[0_0_50px_rgba(251,191,36,0.15)] bg-black">
                        <video
                            autoPlay
                            loop
                            muted={isMuted}
                            playsInline
                            poster="/brabus_logo.jpeg"
                            className="w-full h-full object-cover scale-110"
                        >
                            <source src="/hero_logo_animation.mp4" type="video/mp4" />
                            {/* Fallback */}
                            <img src="/brabus_logo.jpeg" alt="Brabu's Logo" className="w-full h-full object-cover" />
                        </video>

                        {/* Audio Toggle */}
                        <button
                            onClick={() => setIsMuted(!isMuted)}
                            className="absolute bottom-6 left-1/2 -translate-x-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-darker transition-all duration-300 z-20 group-hover:opacity-100 opacity-0 md:opacity-100 transition-opacity"
                            aria-label={isMuted ? "Ativar som" : "Desativar som"}
                        >
                            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                        </button>
                    </div>
                </div>

                {/* 3. Description Text */}
                <div className="max-w-2xl mx-auto space-y-4 mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <p className="text-brand-light/90 text-lg md:text-xl leading-relaxed">
                        Copões, cervejas trincando, petiscos e a tabacaria mais completa da região.
                    </p>
                    <p className="text-brand-light/70 text-base">
                        Tudo que salva a sua resenha em um só lugar.
                    </p>
                </div>

                {/* 4. Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>

                    <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto"
                    >
                        <Button
                            size="lg"
                            variant="whatsapp"
                            className="w-full sm:w-auto min-w-[240px] h-14 text-base tracking-wide uppercase shadow-lg shadow-[#25D366]/20 bg-[#00A884] hover:bg-[#008f6f]"
                        >
                            <WhatsAppIcon size={20} className="mr-2" />
                            Pedir no WhatsApp
                        </Button>
                    </a>

                    <a
                        href={getInstagramLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto"
                    >
                        <Button
                            size="lg"
                            variant="outline"
                            className="w-full sm:w-auto min-w-[240px] h-14 text-base tracking-wide uppercase border-white/20 text-white hover:bg-gradient-to-tr hover:from-purple-500 hover:to-pink-500 hover:border-transparent transition-all duration-300"
                        >
                            <Instagram size={20} className="mr-2" />
                            Ver Instagram
                        </Button>
                    </a>

                </div>

            </div>
        </section>
    );
};
