import { useState } from "react";
import contactImg from "@/assets/Foto_Secao_contato.jpeg";
import { toast } from "sonner";

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
          "linear-gradient(91.13deg, #494646 2.83%, #C2A781 38.46%, #A68D68 55.48%, #FDDEB4 66.32%, #CAB190 81.13%, #443C30 100.06%)",
        padding: "2.22px",
        borderRadius: "7px",
        width: "202.885px",
      }}
    >
      <input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        style={{
          width: "100%",
          background: "rgba(131, 115, 84, 1)",
          border: "none",
          borderRadius: "5px",
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

  return (
    <section id="contato" className="py-24 overflow-hidden relative z-10">
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
          {/* Coluna esquerda: foto + dados */}
          {/* ADICIONADO: flex-col para mobile, lg:flex-row para desktop */}
          <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-start">
            {/* ADICIONADO: max-w para evitar que a imagem estoure a tela no mobile */}
            <div className="rounded-2xl overflow-hidden w-full max-w-[329px] h-[403px] shrink-0">
              <img
                src={contactImg}
                alt="Atendimento"
                width={329}
                height={403}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            {/* ADICIONADO: mt-6 lg:mt-52 para corrigir o espaçamento no mobile */}
            <div className="flex flex-col gap-4 mt-6 lg:mt-52 items-center lg:items-start text-center lg:text-left">
              <div
                className="text-sm text-white space-y-1"
                style={{
                  fontFamily: "'Pathway Extreme', sans-serif",
                  letterSpacing: "1px",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                }}
              >
                <p className="font-bold">DR. LUIZ ELY HENRIQUE</p>
                <p>Telefone: (49) 9116-0683</p>
                <p>Facebook: Luizhenriqueadvocacia</p>
                <p>Instagram: @luizelyadvocacia</p>
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
                  href="https://wa.me/5504991160683"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center px-3 py-2 rounded-[5px] font-semibold transition"
                  style={{
                    color: "#000000",
                    fontFamily: "'Pathway Extreme', sans-serif",
                    fontSize: "22px",
                    fontStyle: "normal",
                    fontWeight: 600,
                    backgroundColor: "rgb(255, 255, 255)",
                  }}
                >
                  Entre em contato
                </a>
              </div>
            </div>
          </div>

          {/* Coluna direita: formulário */}
          <div className="p-8 lg:p-0 lg:mt-0 mt-10">
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
              className="text-white/60 mb-6"
              style={{
                fontFamily: "'Pathway Extreme', sans-serif",
                fontSize: "18px",
                color: "rgba(255, 255, 255, 1)",
              }}
            >
              Escreva sua mensagem abaixo, com dados para contato.
              <br />
              Será enviado um E-mail automaticamente para o escritório.
            </p>

            <form onSubmit={onSubmit}>
              {/* ADICIONADO: flex-col para empilhar os campos no mobile */}
              <div className="flex flex-col lg:flex-row gap-4 ml-0 lg:ml-[5px] mr-0 lg:mr-[20px]">
                {/* Inputs empilhados */}
                <div className="flex flex-col gap-3 w-full lg:w-auto items-center lg:items-start">
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

                {/* Espaço de texto */}
                <div
                  style={{
                    background:
                      "linear-gradient(91.13deg, #494646 2.83%, #C2A781 38.46%, #A68D68 55.48%, #FDDEB4 66.32%, #CAB190 81.13%, #443C30 100.06%)",
                    padding: "2.22px",
                    borderRadius: "16px",
                    flex: 1,
                    display: "flex",
                    width: "100%",
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
                      background: "rgba(255, 248, 242, 1)",
                      border: "none",
                      borderRadius: "14px",
                      padding: "10px 12px",
                      color: "rgba(0, 0, 0, 1)",
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
              <div className="flex justify-center lg:justify-end mt-6 mr-0 lg:mr-[20px]">
                <div
                  style={{
                    background:
                      "linear-gradient(91.13deg, #494646 2.83%, #C2A781 38.46%, #A68D68 55.48%, #FDDEB4 66.32%, #CAB190 81.13%, #443C30 100.06%)",
                    padding: "2.22px",
                    borderRadius: "7px",
                  }}
                >
                  <button
                    type="submit"
                    style={{
                      fontFamily: "'Pathway Extreme', sans-serif",
                      fontSize: "16px",
                      fontWeight: 600,
                      background: "rgba(147, 206, 241, 1)",
                      color: "#000000",
                      letterSpacing: "2px",
                      padding: "5px 25px",
                      borderRadius: "5px",
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}