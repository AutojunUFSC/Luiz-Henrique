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
          className="inline-flex items-center px-6 py-3 mr-15 rounded-md bg-[#f3ead4] text-[#0f1726] text-[13px] font-semibold tracking-wide hover:bg-[#e9dcb8] transition"
        >
          Entre em contato
        </a>
      </div>
    </footer>
  );
}
