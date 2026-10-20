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
  title: "Auriverde | Etec Bento Quirino",
  description: "Projeto de estudantes da Etec Bento Quirino que cuida e preserva a colmeia das abelhas Jataí, promovendo a conscientização ambiental.",
  keywords: ["Auriverde", "Etec Bento Quirino", "Abelhas Jataí", "Conscientização Ambiental", "Preservação da Colmeia", "abelhas sem ferrão", "biodiversidade", "meio ambiente", "educação ambiental", "projeto estudantil"],
  authors: [{ name: "Auriverde", url: "https://auriverde.vercel.app" }],
  creator: "Auriverde",
  openGraph: {
    title: "Auriverde | Etec Bento Quirino",
    description:
      "Projeto de estudantes da Etec Bento Quirino que cuida e preserva a colmeia das abelhas Jataí, promovendo a conscientização ambiental.",
    url: "https://auriverde.vercel.app",
    siteName: "Auriverde",
    images: ["/images/auriverde.png"],
    locale: "pt_BR",
    type: "website",  
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-br"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
