import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import incapacidadeImg from "@/assets/service-incapacidade.png";
import pensaoImg from "@/assets/service-pensao.png";
import aposentadoriaImg from "@/assets/service-aposentadoria.png";
import acidenteImg from "@/assets/service-acidente.png";
import revisaoImg from "@/assets/service-revisao.png";
import bpcImg from "@/assets/service-bpc.png";
import iconAposentadoria from "@/assets/service-icon-aposentadoria.png";
import iconPensao from "@/assets/service-icon-pensao.png";
import iconAcidente from "@/assets/service-icon-acidente.png";
import iconIncapacidade from "@/assets/service-icon-incapacidade.png";
import iconBpc from "@/assets/service-icon-bpc.png";
import iconRevisao from "@/assets/service-icon-revisao.png";
import unionBg from "@/assets/Union.png";

type Bullet = { lead: string; text: string };
type Service = {
  img: string;
  icon: string; 
  alt: string;
  title: string;
  subtitle: string;
  intro: string;
  bullets: Bullet[];
};

const loremBullets: Bullet[] = [
  { lead: "Lorem ipsum:", text: "dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { lead: "Ut enim:", text: "ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  { lead: "Duis aute:", text: "irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
  { lead: "Excepteur sint:", text: "occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
];

const services: Service[] = [
  {
    img: incapacidadeImg,
    icon: iconIncapacidade,
    alt: "Incapacidade",
    title: "INCAPACIDADE",
    subtitle: "(Auxílio & Benefícios)",
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Atuamos com dedicação para garantir seus direitos em casos de incapacidade:",
    bullets: loremBullets,
  },
  {
    img: pensaoImg,
    icon: iconPensao,
    alt: "Pensão",
    title: "PENSÃO",
    subtitle: "(Por Morte)",
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auxiliamos famílias na conquista da pensão por morte:",
    bullets: loremBullets,
  },
  {
    img: aposentadoriaImg,
    icon: iconAposentadoria,
    alt: "Aposentadoria",
    title: "APOSENTADORIA",
    subtitle: "(Análise & Concessão)",
    intro:
      "Cada história de vida é única, e a sua aposentadoria também deve ser. Não trabalhamos com fórmulas prontas: analisamos toda a sua trajetória de trabalho para garantir o benefício mais justo. Atuamos com todas as regras do INSS, com destaque para:",
    bullets: [
      { lead: "Aposentadoria Especial:", text: "Para profissionais que trabalharam expostos a agentes nocivos à saúde (ruído, produtos químicos, etc) ou risco de vida. Ajudamos a reunir a documentação técnica correta (como o PPP) para garantir esse direito que muitas vezes é negado pelo INSS." },
      { lead: "Aposentadoria do Professor:", text: "Orientação e cálculos precisos para professores das redes pública e privada, garantindo a aplicação das regras de redução de tempo e idade exclusivas da categoria." },
      { lead: "Aposentadoria da Pessoa com Deficiência (PcD):", text: "Um benefício com regras muito mais favoráveis, seja por idade ou tempo de contribuição. Avaliamos o seu caso com total sensibilidade e rigor técnico para comprovar as barreiras enfrentadas ao longo da vida profissional e garantir a melhor renda." },
      { lead: "Aposentadoria Rural:", text: "Defendemos quem dedicou a vida ao campo. Sabemos que a comprovação do trabalho rural exige atenção aos detalhes, e ajudamos a reunir as provas necessárias para garantir o benefício, mesmo sem carteira assinada." },
    ],
  },
  {
    img: acidenteImg,
    icon: iconAcidente,
    alt: "Acidente",
    title: "ACIDENTE",
    subtitle: "(Trabalho & Trânsito)",
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Defendemos seus direitos em casos de acidente:",
    bullets: loremBullets,
  },
  {
    img: revisaoImg,
    icon: iconRevisao,
    alt: "Revisão",
    title: "REVISÃO",
    subtitle: "(De Benefícios)",
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Revisamos benefícios para garantir o valor justo:",
    bullets: loremBullets,
  },
  {
    img: bpcImg,
    icon: iconBpc,
    alt: "BPC/LOAS",
    title: "BPC / LOAS",
    subtitle: "(Benefício Assistencial)",
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auxiliamos na conquista do BPC/LOAS:",
    bullets: loremBullets,
  },
];

export function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const active = openIndex !== null ? services[openIndex] : null;

  return (
    <section
      id="servicos"
      className="py-24"
      style={{
        background: "#A68D68",
        backgroundImage: `url(${unionBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
  }}
>
      <div className="container mx-auto px-6">
        <h2 className="mb-12" style={{
          fontFamily:"'Pathway Extreme', sans-serif",
          fontWeight: 800,
          fontSize: "64px",
          lineHeight: "100%",
          letterSpacing: "0%",
          color: "rgba(0,29,51,1)",
        }}
      >
          Serviços</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <button
              key={s.alt}
              type="button"
              onClick={() => setOpenIndex(i)}
              className="block w-full focus:outline-none"
              aria-label={`Abrir detalhes de ${s.title}`}
            >
              <img
                src={s.img}
                alt={s.alt}
                loading="lazy"
                className="w-full h-auto transition-transform duration-300 ease-out hover:scale-105 cursor-pointer"
              />
            </button>
          ))}
        </div>
      </div>

      <Dialog open={openIndex !== null} onOpenChange={(o) => !o && setOpenIndex(null)}>
        <DialogContent className="w-[92vw] max-w-[420px] max-h-[85vh] overflow-y-auto bg-[#111] border-none rounded-[28px] p-8 text-white shadow-2xl">
  {active && (
    <div className="flex flex-col">
      <div className="flex items-center gap-4 mb-1">
        <img
          src={active.icon}
          alt={active.alt}
          className="w-12 h-12 object-contain shrink-0"
        />
        <div className="text-left">
          <DialogTitle className="text-2xl font-bold text-gold tracking-wide">
            {active.title}
          </DialogTitle>
          <p className="text-sm text-white/80 italic">
            {active.subtitle}
          </p>
        </div>
      </div>

      {/* Conteúdo */}
      <p className="text-sm leading-relaxed text-white/85 mb-5 mt-4">
        {active.intro}
      </p>
      <ul className="space-y-3 text-left w-full">
        {active.bullets.map((b, idx) => (
          <li key={idx} className="text-sm leading-relaxed text-white/85 flex">
            <span className="text-gold mr-2">•</span>
            <span>
              <span className="font-bold text-gold">{b.lead}</span>{" "}
              {b.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )}
</DialogContent>
      </Dialog>
    </section>
  );
}
