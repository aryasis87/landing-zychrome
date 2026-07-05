import "./globals.css";
import { Chivo, Poppins } from 'next/font/google';

const chivo = Chivo({ variable: '--font-chivo', subsets: ['latin'], weight: ['600', '700', '900'] });
const poppins = Poppins({ variable: '--font-poppins', weight: ['400', '600', '700'], subsets: ['latin'], display: 'swap' });

const __jsonld = {"@context":"https://schema.org","@type":"WebSite","name":"Zychrome","description":"Webinar interaktif","url":"https://zychrome.pintuweb.com","inLanguage":"id"};

export const metadata = {
  metadataBase: new URL("https://zychrome.pintuweb.com"),
  title: "Zychrome — Webinar Interaktif Para Ahli",
  description: "Zychrome: optimalkan skill kamu melalui webinar interaktif dan inspiratif dari para ahli terbaik.",
  applicationName: "Zychrome",
  keywords: ["webinar", "kelas online", "skill", "pelatihan", "webinar interaktif"],
  authors: [{ name: "Zychrome" }],
  creator: "Zychrome",
  publisher: "Zychrome",
  alternates: { canonical: "https://zychrome.pintuweb.com" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://zychrome.pintuweb.com",
    siteName: "Zychrome",
    title: "Zychrome — Webinar Interaktif Para Ahli",
    description: "Zychrome: optimalkan skill kamu melalui webinar interaktif dan inspiratif dari para ahli terbaik.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Zychrome — Webinar Interaktif Para Ahli" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zychrome — Webinar Interaktif Para Ahli",
    description: "Zychrome: optimalkan skill kamu melalui webinar interaktif dan inspiratif dari para ahli terbaik.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${chivo.variable} ${poppins.variable}`}>
        {children}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
