import logo from "@/assets/logo-le.png";
import footerBg from "@/assets/degrade_footer.png";

const links = [
  { href: "#servicos", label: "SERVIÇOS" },
  { href: "#quem-somos", label: "QUEM SOMOS" },
  { href: "#faq", label: "PERGUNTAS FREQUENTES" },
  { href: "#depoimentos", label: "DEPOIMENTOS" },
  { href: "#contato", label: "CONTATO" },
];

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        backgroundColor: "rgba(0, 51, 83, 1)",
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "134px",
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-[#b8a572]/40" />
      <div className="container mx-auto px-6 h-full flex items-center justify-between relative">
        <a href="#inicio" className="flex items-center ml-10" aria-label="Luiz Ely Advocacia">
          <img src={logo} alt="Luiz Ely Advocacia" className="h-20 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
               className="text-[13px] font-medium tracking-[0.08em] text-white hover:text-[#d4b87a] transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="inline-flex items-center justify-center mr-15 hover:opacity-90 transition"
          style={{
            width: "215.13px",
            height: "44.909px",
            borderRadius: "7.243px",
            background:"#EDE1D0",
            color: "#1D1B1B",
            fontFamily: "'Pathway Extreme', sans-serif",
            fontSize: "20.282px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "130.969%",
            letterSpacing: "0.02em",
          }}
        >
          Entre em contato
        </a>
      </div>
    </footer>
  );
}
