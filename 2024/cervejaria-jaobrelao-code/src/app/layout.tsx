import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const lingLengLang = localFont({
  src: "./fonts/LingLengLang.woff",
  weight: "400",
  style: 'normal',
  variable: '--font-lingLengLang',
});
const bebasNeue = localFont({
  src: [
    {
      path: './fonts/Bebas-Neue-Pro-Book.woff',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/Bebas-Neue-Pro-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Bebas-Neue-Pro-Bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
})

export const metadata: Metadata = {
  title: "Cervejaria Jãobrelão | A cerveja que traz a cidade e o campo num gole só!",
  description: "Cervejaria Jãobrelão, uma cervejaria cigana que desenvolve suas próprias receitas e produz em uma das melhores fábricas de produção de cerveja terceirizada.",
}

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${bebasNeue.className} ${lingLengLang.variable} antialiased`}
      >         
        <Header />       
        {children}
        <Footer />
      </body>
    </html>
  );
}
