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
  intro: string | React.ReactNode;
  bullets: Bullet[];
};


const services: Service[] = [
  {
    img: incapacidadeImg,
    icon: iconIncapacidade,
    alt: "Incapacidade",
    title: "BENEFÍCIOS POR INCAPACIDADE",
    subtitle: "(Auxílio-Doença e Aposentadoria por Invalidez)",
    intro:
      "Se um problema de saúde ou acidente impede você de trabalhar, o seu foco deve ser a sua recuperação, e não a burocracia do INSS. Nosso escritório atua de forma ágil para reverter negativas injustas. Avaliamos seus laudos e exames de forma individualizada para buscar a concessão do seu benefício, seja de forma temporária ou definitiva, garantindo a sua tranquilidade financeira.",
    bullets:[],
  },
  {
    img: pensaoImg,
    icon: iconPensao,
    alt: "Pensão",
    title: "PENSÃO POR MORTE",
    subtitle: "",
    intro:
      "Sabemos que a perda de um familiar é um momento de dor e fragilidade. Nosso papel é acolher você e sua família com total respeito e empatia, assumindo a burocracia para garantir a proteção financeira dos dependentes. Analisamos a documentação com máxima agilidade para que a pensão seja concedida de forma rápida, no valor correto e sem dores de cabeça.",
    bullets: [],
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
    title: "AUXÍLIO-ACIDENTE",
    subtitle: "",
    intro: (
  <>
    Um dos direitos mais desconhecidos pelos trabalhadores. Se você sofreu um
    acidente de qualquer natureza (no trabalho, no trânsito, em casa ou no
    esporte) e ficou com alguma sequela permanente que diminuiu sua capacidade
    para o trabalho, você pode ter direito a uma indenização mensal do INSS O melhor de tudo? Você
    recebe esse valor e {" "}<strong>pode continuar trabalhando com carteira assinada</strong>. até
    se aposentar. Nós avaliamos a sua sequela e lutamos por essa compensação.
  </>
  ),
    bullets: [],
  },
  {
    img: revisaoImg,
    icon: iconRevisao,
    alt: "Revisão",
    title: "REVISÃO DE APOSENTADORIA",
    subtitle: "",
    intro:
      "O INSS comete erros com frequência: deixa de contar tempos de trabalho, não reconhece períodos especiais ou calcula o valor da aposentadoria a menor. Se você já é aposentado e desconfia que o valor está baixo, nossa equipe realiza um cálculo minucioso de toda a sua vida contributiva. Buscamos a correção do seu benefício na Justiça e o pagamento de todos os valores atrasados que o INSS deixou de pagar nos últimos anos.",
    bullets: [],
  },
  {
    img: bpcImg,
    icon: iconBpc,
    alt: "BPC/LOAS",
    title: "BPC / LOAS",
    subtitle: "(Benefício Assistencial)",
    intro:
      (
    <>
      Um benefício fundamental que garante um salário mínimo mensal para idosos acima de 65 anos ou pessoas com deficiência de qualquer idade que vivam em situação de vulnerabilidade (baixa renda). {" "}<strong>Não é necessário ter pago o INSS</strong> para ter direito. Nossa equipe orienta sobre a atualização do CadÚnico e acompanha todo o processo para garantir que a assistência chegue a quem realmente precisa.
    </>
  ),
    bullets: [],
  },
];

export function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const active = openIndex !== null ? services[openIndex] : null;

  return (
    <section id="servicos" className="py-24 services-bg">
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
          <DialogTitle
            className="text-2xl font-bold tracking-wide"
            style={{
              color: "#d4b97a",
              fontFamily: "'Pathway Extreme', sans-serif",
            }}
          >
            {active.title}
          </DialogTitle>
          <p className="text-sm text-white/80 italic" style={{ fontFamily: "'Pathway Extreme', sans-serif" }}>
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
          <li
            key={idx}
            className="text-sm leading-relaxed text-white/85 flex"
            style={{ fontFamily: "'Pathway Extreme', sans-serif" }}
          >
            <span className="mr-2" style={{ color: "#d4b97a" }}>•</span>
            <span>
              <span className="font-bold" style={{ color: "#d4b97a" }}>{b.lead}</span>{" "}
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
