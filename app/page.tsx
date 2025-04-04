// app/page.tsx

"use client";

import { useState } from "react";

export default function Home() {
  const [empresa, setEmpresa] = useState("");
  const [identificacao, setIdentificacao] = useState("nao");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [tipo, setTipo] = useState("");
  const [relato, setRelato] = useState("");
  const [data, setData] = useState("");
  const [local, setLocal] = useState("");
  const [confirmacao, setConfirmacao] = useState(false);

  return (
    <div className="min-h-screen bg-blue-50 text-gray-800 font-sans">
      {/* HERO */}
      <section className="bg-blue-700 text-white py-20 text-center px-6">
        <h1 className="text-4xl font-bold mb-4">Canal Seguro de Denúncias</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Este é um canal externo, sigiloso e independente para relatar
          irregularidades com total segurança e anonimato.
        </p>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">Como funciona?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div>
            <h3 className="font-bold text-blue-600 mb-2">✅ Anonimato Garantido</h3>
            <p>Você pode optar por não se identificar. Nenhum dado pessoal é rastreado.</p>
          </div>
          <div>
            <h3 className="font-bold text-blue-600 mb-2">✅ Canal Externo</h3>
            <p>Este canal é operado por consultoria independente, fora da estrutura da empresa.</p>
          </div>
          <div>
            <h3 className="font-bold text-blue-600 mb-2">✅ Investigação Ética</h3>
            <p>Seu relato será analisado com seriedade por especialistas em integridade corporativa.</p>
          </div>
        </div>
      </section>

      {/* FORMULÁRIO */}
      <section className="bg-white py-16 px-6" id="formulario">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-center text-blue-800 mb-6">
            Envie seu relato com segurança
          </h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Simulação de envio de denúncia.");
            }}
            className="space-y-4"
          >
            <input
              type="text"
              className="w-full border rounded p-2"
              placeholder="Empresa"
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
              required
            />
            <select
              className="w-full border rounded p-2"
              value={identificacao}
              onChange={(e) => setIdentificacao(e.target.value)}
            >
              <option value="nao">Deseja se identificar? Não</option>
              <option value="sim">Sim</option>
            </select>
            {identificacao === "sim" && (
              <>
                <input
                  type="text"
                  className="w-full border rounded p-2"
                  placeholder="Seu nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
                <input
                  type="email"
                  className="w-full border rounded p-2"
                  placeholder="Seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </>
            )}
            <select
              className="w-full border rounded p-2"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              required
            >
              <option value="">Tipo de denúncia</option>
              <option value="assédio">Assédio</option>
              <option value="fraude">Fraude</option>
              <option value="conduta">Má conduta</option>
              <option value="outra">Outra</option>
            </select>
            <textarea
              className="w-full border rounded p-2"
              placeholder="Descreva o ocorrido com detalhes..."
              rows={4}
              value={relato}
              onChange={(e) => setRelato(e.target.value)}
              required
            />
            <input
              type="text"
              className="w-full border rounded p-2"
              placeholder="dd/mm/aaaa"
              value={data}
              onChange={(e) => setData(e.target.value)}
              required
            />
            <input
              type="text"
              className="w-full border rounded p-2"
              placeholder="Local do ocorrido"
              value={local}
              onChange={(e) => setLocal(e.target.value)}
              required
            />
            <label className="flex items-center space-x-2 text-sm">
              <input
                type="checkbox"
                checked={confirmacao}
                onChange={(e) => setConfirmacao(e.target.checked)}
                required
              />
              <span>
                Declaro que este relato é verdadeiro e baseado em minha experiência.
              </span>
            </label>
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded"
            >
              Enviar denúncia
            </button>
          </form>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="text-center text-xs text-gray-500 py-6">
        Desenvolvido por InCorp Diretiva
      </footer>
    </div>
  );
}
