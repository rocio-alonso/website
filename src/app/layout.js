import '@/app/globals.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import AnimateEntrance from "./components/AnimateEntrance/AnimateEntrance";

export const metadata = {
  title: "Rocio Alonso",
  description: "Artista viviendo en Barcelona",
   icons: {
    icon: "/favicon.ico", // Ruta del favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
