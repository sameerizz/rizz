import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Providers } from "./providers";
import ClientLayout from "./client-layout";

// Load Montserrat with all weights for better typography
const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Sameer Siddiqui - Digital Explorer",
  description: "AI, wealth, the future — writing to escape the rat race",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable}`} suppressHydrationWarning>
      <body className={`${montserrat.className} font-montserrat flex flex-col min-h-screen w-full overflow-x-hidden`}>
        <Providers>
          <ClientLayout>
            <div className="abstract-shape abstract-shape-1"></div>
            <div className="abstract-shape abstract-shape-2"></div>
            <div className="abstract-line abstract-line-1"></div>
            <div className="abstract-line abstract-line-2"></div>
            <div className="abstract-grid"></div>
            <Header />
            <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-12 relative">
              {children}
            </main>
            <Footer />
          </ClientLayout>
        </Providers>
      </body>
    </html>
  );
}
