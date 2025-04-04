// app/layout.tsx

import "../styles/globals.css"; // Importa Tailwind

export const metadata = {
  title: "Canal Seguro de Denúncias",
  description: "Relate de forma anônima e segura",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
