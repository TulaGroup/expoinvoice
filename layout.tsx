export const metadata = { title: 'ExpoInvoice' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body style={{ margin: 0, fontFamily: 'Inter, system-ui, Arial' }}>
        {children}
      </body>
    </html>
  );
}
