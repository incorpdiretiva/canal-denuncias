'use client';
import { useState } from 'react';
import Head from 'next/head';
import { db } from '../../lib/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

export default function CanalSeguro() {
  const [denuncia, setDenuncia] = useState({
    empresa: '',
    identificacao: 'nao',
    nome: '',
    email: '',
    tipo: '',
    relato: '',
    data: '',
    local: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setDenuncia((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const protocolo = Math.floor(Math.random() * 1000000);

    try {
      await addDoc(collection(db, 'denuncias'), {
        ...denuncia,
        criadoEm: Timestamp.now(),
        protocolo,
      });

      alert('Denúncia enviada com sucesso! Protocolo: #' + protocolo);
      setDenuncia({
        empresa: '',
        identificacao: 'nao',
        nome: '',
        email: '',
        tipo: '',
        relato: '',
        data: '',
        local: '',
      });
    } catch (error) {
      alert('Erro ao enviar denúncia. Tente novamente.');
      console.error('Erro:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Head>
        <title>Canal Seguro Independente</title>
      </Head>

      <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-4">Canal Seguro de Denúncias</h1>
        <p className="mb-6 text-sm text-gray-600">Este canal é gerenciado por entidade externa independente. Sua identidade será preservada.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Empresa</label>
            <input
              type="text"
              name="empresa"
              value={denuncia.empresa}
              onChange={handleChange}
              placeholder="Nome da empresa"
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Deseja se identificar?</label>
            <select name="identificacao" value={denuncia.identificacao} onChange={handleChange} className="w-full border p-2 rounded">
              <option value="nao">Não</option>
              <option value="sim">Sim</option>
            </select>
          </div>

          {denuncia.identificacao === 'sim' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="nome" value={denuncia.nome} placeholder="Seu nome" className="border p-2 rounded w-full" onChange={handleChange} />
              <input type="email" name="email" value={denuncia.email} placeholder="Seu e-mail" className="border p-2 rounded w-full" onChange={handleChange} />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium">Tipo de denúncia</label>
            <select name="tipo" value={denuncia.tipo} onChange={handleChange} className="w-full border p-2 rounded">
              <option value="">Selecione</option>
              <option value="assedio-moral">Assédio Moral</option>
              <option value="assedio-sexual">Assédio Sexual</option>
              <option value="fraude">Fraude ou Desvio</option>
              <option value="discriminacao">Discriminação</option>
              <option value="outros">Outros</option>
            </select>
          </div>

          <textarea name="relato" value={denuncia.relato} rows={5} placeholder="Descreva o ocorrido com detalhes..." className="w-full border p-2 rounded" onChange={handleChange}></textarea>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="date" name="data" value={denuncia.data} className="border p-2 rounded w-full" onChange={handleChange} />
            <input type="text" name="local" value={denuncia.local} placeholder="Local do ocorrido" className="border p-2 rounded w-full" onChange={handleChange} />
          </div>

          <div className="flex items-center">
            <input type="checkbox" required className="mr-2" />
            <span className="text-sm">Declaro que este relato é verdadeiro e baseado em minha experiência.</span>
          </div>

          <button type="submit" disabled={loading} className="bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700">
            {loading ? 'Enviando...' : 'Enviar denúncia'}
          </button>
        </form>

        <p className="mt-6 text-xs text-gray-500 text-center">Desenvolvido por InCorp Diretiva</p>
      </div>
    </div>
  );
}
