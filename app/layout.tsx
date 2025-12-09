
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Matías Web & IA | Tu Socio Tecnológico",
  description: "Desarrollo web y automatización con IA para potenciar tu negocio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${outfit.variable} antialiased min-h-screen selection:bg-purple-500/30`}>
        {children}
      </body>
    </html>
  );
}
