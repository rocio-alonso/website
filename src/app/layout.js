import '@/app/globals.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const SITE_URL = "https://rocioalonso.com";
const SITE_DESCRIPTION =
  "Rocío Alonso, artista visual y pintora en Barcelona. Descubre sus obras, exposiciones y clases de pintura y dibujo en su estudio de Vila de Gràcia.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Rocío Alonso | Artista visual en Barcelona",
    template: "%s | Rocío Alonso",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Rocío Alonso",
    "artista Barcelona",
    "pintora Barcelona",
    "arte contemporáneo",
    "clases de pintura Barcelona",
    "clases de dibujo Gràcia",
    "taller de arte Barcelona",
  ],
  authors: [{ name: "Rocío Alonso", url: SITE_URL }],
  creator: "Rocío Alonso",
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Rocío Alonso",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rocío Alonso",
  url: SITE_URL,
  jobTitle: "Artista visual",
  email: "mailto:rocioalonsoart@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Barcelona",
    addressCountry: "ES",
  },
  sameAs: ["https://www.instagram.com/rocioalonsoarte/"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
