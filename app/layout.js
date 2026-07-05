import "./globals.css";
import { Chivo, Poppins } from 'next/font/google';

const chivo = Chivo({ variable: '--font-chivo', subsets: ['latin'], weight: ['600', '700', '900'] });
const poppins = Poppins({ variable: '--font-poppins', weight: ['400', '600', '700'], subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'Zychrome — Webinar Interaktif Para Ahli',
  description: 'Zychrome: optimalkan skill kamu melalui webinar interaktif dan inspiratif dari para ahli terbaik.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${chivo.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
