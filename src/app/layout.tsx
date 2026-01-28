import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import CallToAction from "./components/CallToAction";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Conciliadora en Derecho en Bogotá | Leidy Tirado",
  description:
    "Asesoría legal y conciliación en derecho en Bogotá y Colombia. Consulta jurídica profesional por WhatsApp con Leidy Tirado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TopBar />
        <NavBar />
        {children}
        <CallToAction />
        <Footer />
      </body>
    </html>
  );
}
