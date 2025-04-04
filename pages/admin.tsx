import { useEffect, useState } from 'react';
import { db } from '../lib/firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';

type Denuncia = {
  id: string;
  empresa: string;
  tipo: string;
  relato: string;
  identificacao: string;
  nome?: string;
  email?: string;
  data: string;
  local: string;
  protocolo: number;
};

export default function AdminPanel() {
  const [denuncias, setDenuncias] = useState<Denuncia[]>([]);

  useEffect(() => {
    const carregarDenuncias = async () => {
      const ref = collection(db, 'denuncias');
      const q = query(ref, orderBy('criadoEm', 'desc'));
      const snapshot = await getDocs(q);
      const lista: Denuncia[] = [];

      snapshot.forEach(doc => {
        lista.push({ id: doc.id, ...doc.data() } as Denuncia);
      });

      setDenuncias(lista);
    };

    carregarDenuncias();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📋 Painel de Denúncias</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded shadow">
          <thead>
            <tr className="bg-gray-200 text-left text-sm font-medium">
              <th className="p-2">Protocolo</th>
              <th className="p-2">Empresa</th>
              <th className="p-2">Tipo</th>
              <th className="p-2">Relato</th>
              <th className="p-2">Identificação</th>
              <th className="p-2">Data</th>
              <th className="p-2">Local</th>
            </tr>
          </thead>
          <tbody>
            {denuncias.map((d) => (
              <tr key={d.id} className="border-t text-sm">
                <td className="p-2">{d.protocolo}</td>
                <td className="p-2">{d.empresa}</td>
                <td className="p-2">{d.tipo}</td>
                <td className="p-2 max-w-xs truncate" title={d.relato}>{d.relato}</td>
                <td className="p-2">
                  {d.identificacao === 'sim' ? `${d.nome} (${d.email})` : 'Anônimo'}
                </td>
                <td className="p-2">{d.data}</td>
                <td className="p-2">{d.local}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
