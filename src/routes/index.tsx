import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import officeMeeting from "@/assets/office-meeting.jpg";
import { Testimonials } from "@/components/site/Testimonials";
import { Social } from "@/components/site/Social";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Whatsapp } from "@/components/site/Whatsapp";
import { Toaster } from "@/components/ui/sonner";
import unionBg from "@/assets/Background_faq_contato.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luiz Ely Advocacia — Direito Previdenciário" },
      { name: "description", content: "Advocacia especializada em Direito Previdenciário. Aposentadorias, revisões, recursos e planejamento previdenciário com atendimento humanizado." },
      { property: "og:title", content: "Luiz Ely Advocacia — Direito Previdenciário" },
      { property: "og:description", content: "Conquiste seus direitos com quem entende. Atendimento humanizado e estratégia jurídica especializada." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <img
          src={officeMeeting}
          alt="Sala de reuniões do escritório"
          loading="lazy"
          className="w-full h-[280px] md:h-[420px] lg:h-[520px] object-cover"
        />
        <Services />
        <Testimonials />
        <Social />

        {/* Wrapper com imagem decorativa compartilhada entre FAQ e Contato */}
        <div className="relative overflow-hidden" style={{ backgroundColor: "rgba(166, 141, 104, 1)" }}>
          <div
            className="absolute right-0 top-0 h-full w-[180px] pointer-events-none z-0"
            style={{
              backgroundImage: `url(${unionBg})`,
              backgroundSize: "cover",
              backgroundPosition: "left center",
              backgroundRepeat: "no-repeat",
              opacity: 1,
            }}
          />
          <div className="relative z-10">
            <FAQ />
            <Contact />
          </div>
        </div>
      </main>
      <Footer />
      <Whatsapp />
      <Toaster />
    </div>
  );
}