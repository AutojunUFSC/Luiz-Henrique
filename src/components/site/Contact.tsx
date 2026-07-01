"use client";

import { useState } from "react";
// Certifique-se de que o caminho da imagem está correto no seu projeto
import contactImg from "@/assets/Foto_Secao_contato.jpeg";
import { toast } from "sonner";

// 1. O INPUT CONTINUA FORA DA FUNÇÃO PRINCIPAL
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
      width: "100%",
      maxWidth: "202.885px",
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

  // 2. NOVO ESTADO: Para controlar se o formulário está carregando
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 3. FUNÇÃO DE ENVIO ATUALIZADA (agora é async)
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject) {
      toast.error("Preencha Nome, E-mail e Motivo do contato.");
      return;
    }

    setIsSubmitting(true);
    // Cria um ID para o toast para podermos atualizá-lo depois
    const toastId = toast.loading("Enviando sua mensagem..."); 

    try {
      // ⚠️ ATENÇÃO: COLOQUE A SUA URL DO FORMSPREE AQUI ABAIXO
      const FORMSPREE_URL = "https://formspree.io/f/mykqnvna";

      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        // Mapeando os dados do formulário para o Formspree
        body: JSON.stringify({
          Nome: form.name,
          Telefone: form.phone || "Não informado",
          Email: form.email,
          Assunto: form.subject,
          Mensagem: form.message || "Sem mensagem adicional",
        }),
      });

      if (response.ok) {
        // Deu tudo certo!
        toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.", {
          id: toastId, // Atualiza o toast de "carregando"
        });
        
        // Limpa os campos após o envio
        setForm({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        // Erro do lado do servidor (ex: bloqueio de spam)
        toast.error("Ocorreu um erro ao enviar. Tente novamente mais tarde.", {
          id: toastId,
        });
      }
    } catch (error) {
      // Erro de conexão (ex: usuário sem internet)
      toast.error("Erro de conexão. Verifique sua internet.", { id: toastId });
    } finally {
      setIsSubmitting(false); // Libera o botão novamente
    }
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
          <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-start">
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
                <p>Telefone: (49) 99116-0683</p>
                <p>E-mail: email@gmail.com</p>
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
                  href="https://wa.me/55049991160683"
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
              <div className="flex flex-col lg:flex-row gap-4 ml-0 lg:ml-[5px] mr-0 lg:mr-[20px]">
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

              {/* 4. BOTÃO COM ESTADO DE LOADING */}
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
                    disabled={isSubmitting} // Desativa o botão se estiver enviando
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
                      cursor: isSubmitting ? "not-allowed" : "pointer",
                      transition: "opacity 0.2s",
                      opacity: isSubmitting ? 0.7 : 1, // Fica mais opaco ao enviar
                    }}
                    onMouseOver={(e) => {
                      if (!isSubmitting) e.currentTarget.style.opacity = "0.85";
                    }}
                    onMouseOut={(e) => {
                      if (!isSubmitting) e.currentTarget.style.opacity = "1";
                    }}
                  >
                    {isSubmitting ? "ENVIANDO..." : "ENVIAR"}
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