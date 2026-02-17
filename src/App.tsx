
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Highlights } from "./components/sections/Highlights";
import { PromoBanner } from "./components/sections/PromoBanner";
import { Delivery } from "./components/sections/Delivery";
import { Hours } from "./components/sections/Hours";
import { Location } from "./components/sections/Location";
import { Contact } from "./components/sections/Contact";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-gold selection:text-brand-darker">
      <Header />

      <main>
        <Hero />
        <Highlights />
        <PromoBanner />
        <Delivery />
        <Hours />
        <Location />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
