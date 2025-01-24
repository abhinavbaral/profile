import './globals.css'; // This will contain your global styles

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="container mx-auto p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
