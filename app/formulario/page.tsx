// app/formulario/page.tsx

"use client";

import { useState } from "react";

export default function Formulario() {
  const [empresa, setEmpresa] = useState("");
  const [identificacao, setIdentificacao] = useState("nao");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [tipo, setTipo] = useState("");
  const [relato, setRelato] = useState("");
  const [data, setData] = useState("");
  const [local, setLocal] = useState("");
  const [confirmacao, setConfirmacao] = useState(false);
  const [protocolo, setProtocolo] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const numero = Math.floor(Math.random() * 1000000);
    setProtocolo(`#${numero}`);
  };

  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-center text-blue-800 mb-6">
          Envie seu relato com segurança
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
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
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded w-full"
          >
            Enviar denúncia
          </button>
        </form>

        {protocolo && (
          <div className="mt-6 bg-green-100 border border-green-300 text-green-700 p-4 rounded text-center">
            Denúncia enviada com sucesso! Protocolo: <strong>{protocolo}</strong>
          </div>
        )}

        <p className="mt-6 text-xs text-gray-500 text-center">
          Desenvolvido por InCorp Diretiva
        </p>
      </div>
    </div>
  );
}
