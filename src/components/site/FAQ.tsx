import { useState } from "react";
import unionBg from "@/assets/Background_faq_contato.png";
import logoFAQ from "@/assets/Logo_luiz_henrique_FAQ.png";


const faqs = [
  { q: "Como sei qual é a regra de aposentadoria certa para mim?", a: "Com as recentes mudanças na lei, existem diversas regras de transição. A regra certa depende do seu tempo de contribuição, idade e tipo de trabalho. Por isso, não usamos fórmulas prontas. Realizamos um estudo personalizado da sua vida de trabalho (Planejamento Previdenciário) para descobrir exatamente qual regra traz o benefício mais vantajoso e rápido para você." },
  { q: "Posso pagar INSS atrasado e me aposentar mais cedo?", a: "Em alguns casos, sim. Profissionais autônomos ou empresários podem recolher períodos em atraso. No entanto, é preciso muito cuidado: pagar atrasado sem uma análise prévia pode fazer você perder dinheiro, pois o INSS pode não aceitar o pagamento para fins de contagem de tempo. Sempre consulte um especialista antes de gerar qualquer guia de atrasados." },
  { q: "O INSS negou meu auxílio-doença. E agora, o que eu faço?", a: "A negativa do INSS é muito comum, mas não é a palavra final. Se você tem laudos e exames que comprovam a sua incapacidade para o trabalho, podemos entrar com um recurso administrativo ou um processo judicial. Na via judicial, você será avaliado por um médico perito especialista na sua doença, o que aumenta muito as chances de aprovação do benefício." },
  { q: "Preciso pagar para entrar com o processo? Como funcionam os honorários?", a: "Na maioria dos processos de concessão de benefícios, trabalhamos com a modalidade 'ao final' (ou risco). Isso significa que nossos honorários são um percentual calculado apenas sobre o valor que você ganhar quando o processo der certo. Serviços específicos e consultivos, como o Planejamento Previdenciário, possuem valores fixos que são combinados de forma transparente antes de qualquer contratação." },
  { q: "O que é o Planejamento Previdenciário e por que ele é tão importante? ", a: "O Planejamento Previdenciário é o mapa do seu futuro. É um estudo 100% personalizado de toda a sua vida de trabalho. Nele, analisamos seus documentos, simulamos todas as regras de transição, verificamos se há períodos não contabilizados pelo INSS e calculamos o valor exato do seu futuro benefício. Ele é fundamental para que você não se aposente cedo demais perdendo dinheiro, nem tarde demais perdendo tempo. Com nossos mais de 15 anos de experiência técnica, desenhamos a estratégia mais segura e rentável para o seu caso." },
  { q: "Sofri um acidente fora do trabalho (como um acidente de trânsito ou jogando futebol) e fiquei com sequelas. Tenho direito? ", a: "Sim! Este é um dos direitos mais desconhecidos pelos trabalhadores. O Auxílio-Acidente abrange acidentes de qualquer natureza, seja no ambiente de trabalho, no trânsito, ou até mesmo um acidente doméstico. Se a sequela reduziu a sua capacidade para a profissão que você exercia na época, você pode ter direito a essa indenização." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-24 overflow-hidden"
>
  <div className="absolute inset-0 pattern-deco opacity-0" />
  
  {/* Imagem decorativa no canto direito */}
  {/* <div
    className="absolute right-0 top-0 h-[900px] w-[180px] pointer-events-none"
    style={{
      backgroundImage: `url(${unionBg})`,
      backgroundSize: "cover",
      backgroundPosition: "left center",
      backgroundRepeat: "no-repeat",
      opacity: 1,
    }}
  /> */}
  <div
    className="hidden lg:block absolute -left-90 -top-30 bottom-0 w-[1058px] h-[1042px] pointer-events-none"
    style={{
      backgroundImage: `url(${logoFAQ})`,
      backgroundSize: "contain",
      backgroundPosition: "left center",
      backgroundRepeat: "no-repeat",
      opacity: 0.1,
    }}
  />
      <div className="container mx-auto px-6 relative">
        <h2 className="text-4xl md:text-5xl mb-12"
        style={{
          color: "#FFF",
            fontFamily: "'Pathway Extreme', sans-serif",
            fontSize: "58px",
            fontStyle: "normal",
            fontWeight: 800,
            lineHeight: "100%",
        }}
        >Perguntas Frequentes</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="self-start bg-card border ml-4 border-gold/20 rounded-xl px-2 py-2 text-center transition-colors hover:border-gold/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              style={{
                backgroundColor: "rgba(24, 24, 24, 1)",
              }}>
                <span
                  className="block transition-all"
                  style={{
                    fontFamily: "'Pathway Extreme', sans-serif",
                    fontWeight: 700,
                    fontSize: isOpen ? "30px": "22px",
                    lineHeight: "131%",
                  }}
                >
                  {f.q}
                </span>
                {isOpen && (
                  <p className="mt-4 ml-3 mr-3 text-muted-foreground text-justify text-base leading-relaxed"
                  style={{
                    color:"rgba(255, 255, 255, 1)",
                  }}>
                    {f.a}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
