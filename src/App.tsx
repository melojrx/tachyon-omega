
import { useEffect, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import { SEO } from "./components/SEO";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { getRouteConfig } from "./router/routes";
import { scrollToSection } from "./lib/scroll";

// Hero fica no bundle principal — é o LCP, carrega imediatamente
import { Hero } from "./components/sections/Hero";

// Seções abaixo do fold → carregadas só quando necessário
const Highlights    = lazy(() => import("./components/sections/Highlights").then(m => ({ default: m.Highlights })));
const PromoBanner   = lazy(() => import("./components/sections/PromoBanner").then(m => ({ default: m.PromoBanner })));
const Delivery      = lazy(() => import("./components/sections/Delivery").then(m => ({ default: m.Delivery })));
const Hours         = lazy(() => import("./components/sections/Hours").then(m => ({ default: m.Hours })));
const Location      = lazy(() => import("./components/sections/Location").then(m => ({ default: m.Location })));
const Contact       = lazy(() => import("./components/sections/Contact").then(m => ({ default: m.Contact })));
const FloatingWhatsApp = lazy(() => import("./components/FloatingWhatsApp").then(m => ({ default: m.FloatingWhatsApp })));

// Fallback leve para o Suspense — mantém layout estável (evita CLS)
function SectionFallback() {
  return <div className="py-20 bg-brand-dark" aria-hidden="true" />;
}

function App() {
  const location = useLocation();
  const route = getRouteConfig(location.pathname);

  // Auto-scroll para a seção correspondente à rota ao navegar
  useEffect(() => {
    if (route.sectionId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Aguarda o render antes de rolar
      const timer = setTimeout(() => scrollToSection(route.sectionId), 80);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-gold selection:text-brand-darker">
      <SEO
        title={route.seoTitle}
        description={route.seoDescription}
        canonical={route.canonical}
      />
      <Header />

      <main>
        {/* Hero: carregamento imediato (LCP) */}
        <Hero />

        {/* Demais seções: lazy — só baixam o JS quando o browser tem folga */}
        <Suspense fallback={<SectionFallback />}>
          <Highlights />
          <PromoBanner />
          <Delivery />
          <Hours />
          <Location />
          <Contact />
        </Suspense>
      </main>

      <Footer />

      <Suspense fallback={null}>
        <FloatingWhatsApp />
      </Suspense>
    </div>
  );
}

export default App;
