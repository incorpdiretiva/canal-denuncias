"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen font-sans text-white">
      {/* Background image com filtro azul e blur */}
      <div
        className="absolute inset-0 bg-cover bg-center filter brightness-50 blur-sm"
        style={{ backgroundImage: "url('/bg.png')" }}
      ></div>

      {/* Overlay azul semi-transparente */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* HERO */}
        <section className="flex-grow flex flex-col justify-center items-center px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Canal Seguro de Denúncias
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Canal operado por consultoria externa e independente. Sua identidade será preservada.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => router.push("/formulario")}
              className="bg-white text-blue-700 font-semibold px-6 py-2 rounded hover:bg-blue-100 transition"
            >
              Enviar denúncia
            </button>
            <button
              onClick={() => router.push("/consulta")}
              className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-blue-700 transition"
            >
              Consultar protocolo
            </button>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section className="py-16 px-6 max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-10 text-white">Como funciona?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-white">
            <div>
              <h3 className="font-bold text-yellow-300 mb-2">🔒 Anonimato garantido</h3>
              <p>Você pode optar por não se identificar. Nenhum dado pessoal é rastreado.</p>
            </div>
            <div>
              <h3 className="font-bold text-yellow-300 mb-2">📤 Canal externo</h3>
              <p>Operado pela InCorp Diretiva, garantindo imparcialidade total na apuração.</p>
            </div>
            <div>
              <h3 className="font-bold text-yellow-300 mb-2">🔍 Investigação ética</h3>
              <p>Relatos analisados com seriedade por profissionais especializados.</p>
            </div>
          </div>
        </section>

        {/* RODAPÉ */}
        <footer className="text-center text-sm text-gray-300 py-6">
          Desenvolvido por InCorp Diretiva
        </footer>
      </div>
    </div>
  );
}
