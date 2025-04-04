// app/layout.tsx

export const metadata = {
    title: 'Canal Seguro Independente',
    description: 'Canal de denúncias com sigilo e segurança.',
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
  