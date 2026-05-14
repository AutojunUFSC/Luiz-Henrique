import logo from "@/assets/logo-le.png";

const links = [
  { href: "#servicos", label: "SERVIÇOS" },
  { href: "#quem-somos", label: "QUEM SOMOS" },
  { href: "#faq", label: "PERGUNTAS FREQUENTES" },
  { href: "#depoimentos", label: "DEPOIMENTOS" },
  { href: "#contato", label: "CONTATO" },
];

export function Footer() {
  return (
    <footer className="relative bg-[#0b1a30] overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.04) 0 1px, transparent 1px), url('/src/assets/pattern-bg.png')",
          backgroundSize: "auto, 480px auto",
          backgroundRepeat: "no-repeat, repeat",
          mixBlendMode: "overlay",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-[#b8a572]/40" />
      <div className="container mx-auto px-6 h-[110px] flex items-center justify-between relative">
        <a href="#inicio" className="flex items-center" aria-label="Luiz Ely Advocacia">
          <img src={logo} alt="Luiz Ely Advocacia" className="h-12 w-auto" />
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
          className="inline-flex items-center px-6 py-3 rounded-md bg-[#f3ead4] text-[#0f1726] text-[13px] font-semibold tracking-wide hover:bg-[#e9dcb8] transition"
        >
          Entre em contato
        </a>
      </div>
    </footer>
  );
}
