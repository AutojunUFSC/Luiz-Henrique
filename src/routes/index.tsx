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
          className="w-full h-[130px] md:h-[250px] lg:h-[330px] object-cover filter brightness-60"
        />
        <Services />
        <Testimonials />
        <Social />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <Whatsapp />
      <Toaster />
    </div>
  );
}
