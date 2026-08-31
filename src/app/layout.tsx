import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asociación Zubia Social Euskadi",
  description: "Asociación Sociocultural de Apoyo a las Personas Migrantes en Vitoria-Gasteiz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body 
        suppressHydrationWarning 
        className="min-h-full flex flex-col bg-slate-50 text-slate-900"
      >
        {children}
      </body>
    </html>
  );
}