import { useState } from "react";
import contactImg from "@/assets/contact-lawyer.jpg";
import { toast } from "sonner";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject) {
      toast.error("Preencha Nome, E-mail e Motivo do contato.");
      return;
    }

    const body = [
      `Nome: ${form.name}`,
      `Telefone: ${form.phone || "não informado"}`,
      `E-mail: ${form.email}`,
      ``,
      `Mensagem:`,
      form.message || "(sem mensagem adicional)",
    ]
      .join("%0A")
      .replace(/ /g, "%20");

    const subject = encodeURIComponent(form.subject);

    window.location.href = `mailto:contato@luizely.adv.br?subject=${subject}&body=${body}`;
    toast.success("Abrindo seu cliente de e-mail...");
  };

  // Wrapper que simula border-image com gradiente via pseudo-elemento (não suportado em inline)
  // Solução: usar outline + box-shadow ou wrapper div com padding + gradiente de fundo
  const GoldBorderInput = ({
    value,
    onChange,
    placeholder,
    type = "text",
  }: {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    type?: string;
  }) => (
    <div
      style={{
        background:
          "linear-gradient(0deg, #FDDEB4, #FDDEB4), linear-gradient(91.13deg, #494646 2.83%, #C2A781 38.46%, #A68D68 55.48%, #FDDEB4 66.32%, #CAB190 81.13%, #443C30 100.06%)",
        padding: "2.22px",
        borderRadius: "4px",
      }}
    >
      <input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        style={{
          width: "100%",
          background: "rgba(87, 67, 37, 0.36)",
          border: "none",
          borderRadius: "2px",
          padding: "8px 12px",
          color: "#fff",
          fontSize: "14px",
          fontFamily: "'Pathway Extreme', sans-serif",
          outline: "none",
          boxSizing: "border-box",
        }}
        className="placeholder:text-white/50"
      />
    </div>
  );
  return (
    <section
      id="contato"
      className="py-24 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <h2
          className="text-4xl md:text-5xl font-bold text-white mb-2"
          style={{
            color: "#FFF",
            fontFamily: "'Pathway Extreme', sans-serif",
            fontSize: "58px",
            fontStyle: "normal",
            fontWeight: 800,
            lineHeight: "100%",
          }}
        >
          Contato
        </h2>
        <p
          className="text-white/80 mb-12"
          style={{
            color: "#FFF",
            fontFamily: "'Pathway Extreme', sans-serif",
            fontSize: "36px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "100%",
            marginTop: "15px",
          }}
        >
          Se interessou? Vamos agendar uma conversa
        </p>
        <div className="grid lg:grid-cols-2 gap-15 items-start">
          <div className="flex gap-6 items-start">
            <div className="rounded-2xl overflow-hidden w-[329px] h-[403px] shrink-0">
              <img
                src={contactImg}
                alt="Atendimento"
                width={329}
                height={403}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-4 mt-52">
              <div className="text-sm text-white space-y-1"
              style={{
                fontFamily: "'Pathway Extreme', sans-serif",
                letterSpacing:"1px",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
              }}>
                <p className="font-bold">DR. LUIZ ELY HENRIQUE</p>
                <p>Telefone: (00) 00000-0000</p>
                <p>WhatsApp: 00000-0000</p>
                <p>E-mail: email@gmail.com</p>
                <p>Instagram: @usuario</p>
              </div>
                <div
                  className="inline-block rounded-md w-fit"
                  style={{
                    background:
                      "linear-gradient(91.13deg, #494646 2.83%, #C2A781 38.46%, #A68D68 55.48%, #FDDEB4 66.32%, #CAB190 81.13%, #443C30 100.06%)",
                    padding: "3px",
                  }}
                >
                  <a
                    href="https://wa.me/5500000000000"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center px-5 py-2 rounded-[5px] font-semibold transition"
                    style={{
                      color: "#000000",
                      fontFamily: "'Pathway Extreme', sans-serif",
                      fontSize: "22px",
                      fontStyle: "normal",
                      fontWeight: 600,
                      backgroundColor: "rgb(255, 255, 255)", // mesma cor de fundo da seção
                    }}
                    >                
                    Entre em contato
                  </a>
                </div>
            </div>
          </div>

          {/* ── Right column: form (sem borda nem fundo) ── */}
          <div className="p-8">
            <h3
              className="text-white font-semibold mb-1"
              style={{
                fontFamily: "'Pathway Extreme', sans-serif",
                fontSize: "26px",
              }}
            >
              Envie um E-mail:
            </h3>
            <p
              className="text-white/60 mb-6 text-sm"
              style={{ fontFamily: "'Pathway Extreme', sans-serif" }}
            >
              Escreva sua mensagem abaixo, com dados para contato.
              <br />
              Será enviado um E-mail automaticamente para o escritório.
            </p>

            <form onSubmit={onSubmit}>
              <div className="flex gap-4">
                {/* Left: stacked inputs com borda gradiente + fundo marrom */}
                <div className="flex flex-col gap-3 flex-1">
                  <GoldBorderInput
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Nome"
                  />
                  <GoldBorderInput
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    placeholder="Telefone"
                  />
                  <GoldBorderInput
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    type="email"
                    placeholder="E-mail"
                  />
                  <GoldBorderInput
                    value={form.subject}
                    onChange={(e) =>
                      setForm({ ...form, subject: e.target.value })
                    }
                    placeholder="Motivo do contato"
                  />
                </div>

                {/* Right: textarea com fundo branco */}
                <div
                  style={{
                    background:
                      "linear-gradient(0deg, #FDDEB4, #FDDEB4), linear-gradient(91.13deg, #494646 2.83%, #C2A781 38.46%, #A68D68 55.48%, #FDDEB4 66.32%, #CAB190 81.13%, #443C30 100.06%)",
                    padding: "2.22px",
                    borderRadius: "4px",
                    flex: 1,
                    display: "flex",
                  }}
                >
                  <textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Escreva aqui sua mensagem.."
                    style={{
                      width: "100%",
                      background: "#ffffff",
                      border: "none",
                      borderRadius: "2px",
                      padding: "10px 12px",
                      color: "#333",
                      fontSize: "14px",
                      fontFamily: "'Pathway Extreme', sans-serif",
                      outline: "none",
                      resize: "none",
                      minHeight: "152px",
                    }}
                  />
                </div>
              </div>

              {/* Botão ENVIAR */}
              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  style={{
                    fontFamily: "'Pathway Extreme', sans-serif",
                    fontSize: "16px",
                    fontWeight: 600,
                    background: "rgba(147, 206, 241, 1)",
                    color: "#000",
                    letterSpacing: "2px",
                    padding: "8px 40px",
                    borderRadius: "4px",
                    border: "none",
                    cursor: "pointer",
                    transition: "opacity 0.2s",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.opacity = "0.85")
                  }
                  onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  ENVIAR
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}