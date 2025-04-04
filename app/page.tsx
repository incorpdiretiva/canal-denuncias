// app/page.tsx

"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-blue-50 text-gray-800 font-sans">
      {/* HERO */}
      <section className="bg-blue-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Canal Seguro de Denúncias</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Canal operado por consultoria externa e independente. Sua identidade será preservada.
        </p>
        <div className="mt-8 flex justify-center gap-4">
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
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">Como funciona?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div>
            <h3 className="font-bold text-blue-600 mb-2">🔒 Anonimato garantido</h3>
            <p>Você pode optar por não se identificar. Nenhum dado pessoal é rastreado.</p>
          </div>
          <div>
            <h3 className="font-bold text-blue-600 mb-2">📤 Canal externo</h3>
            <p>Operado pela InCorp Diretiva, garantindo imparcialidade total na apuração.</p>
          </div>
          <div>
            <h3 className="font-bold text-blue-600 mb-2">🔍 Investigação ética</h3>
            <p>Relatos analisados com seriedade por profissionais especializados.</p>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="text-center text-xs text-gray-500 py-6">
        Desenvolvido por InCorp Diretiva
      </footer>
    </div>
  );
}
