// app/layout.tsx

import "../styles/globals.css";

export const metadata = {
  title: "Canal Seguro de Denúncias",
  description: "Sistema seguro e independente para recebimento de relatos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
