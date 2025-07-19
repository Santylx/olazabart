import '../styles/globals.css';
import Header from '../components/Header';

export const metadata = {
  title: 'OlazabalArt',
  description: 'Santiago Rodríguez Olazábal - Official website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
