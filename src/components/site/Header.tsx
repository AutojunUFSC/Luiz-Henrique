import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-le.png";
import headerBg from "@/assets/header-bg.png";

const links = [
  { href: "#servicos", label: "SERVIÇOS" },
  { href: "#quem-somos", label: "QUEM SOMOS" },
  { href: "#faq", label: "PERGUNTAS FREQUENTES" },
  { href: "#depoimentos", label: "DEPOIMENTOS" },
  { href: "#contato", label: "CONTATO" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header
      className="absolute top-0 left-0 right-0 z-50"
      style={{ 
        height: "116px", 
        backgroundImage: `url(${headerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        boxShadow: "0px 8px 48.9px 0px rgba(0,0,0,0.23), 0px 5px 7.5px 0px rgba(0,0,0,0.25)" }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between" style={{ height: "116px" }}
>
        <a href="#inicio" className="flex items-center ml-10" aria-label="Luiz Ely Advocacia">
          <img src={logo} alt="Luiz Ely Advocacia" className="h-14 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-10 ml-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium tracking-[0.08em] text-[#1a1a1a] hover:text-[#b8a572] transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="inline-flex items-center justify-center hover:opacity-90 transition"
          style={{
            width: "215.13px",
            height: "44.909px",
            borderRadius: "7.243px",
            background: "#001E2C",
            color: "#FFF",
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

        <button
          className="lg:hidden text-[#1a1a1a]"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden absolute left-0 right-0 top-[116px] header-cream border-t border-[#e6dcc6] z-50">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[13px] font-medium tracking-[0.08em] text-[#1a1a1a]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#0f1726] text-white text-[13px] font-semibold"
            >
              Entre em contato
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
