import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ScrollAnimations } from "@/components/scroll-animations"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cotar Plano SulAmérica | Corretora de Planos de Saúde",
  description:
    "Cote seu plano de saúde SulAmérica com corretores especializados. Veja valores, rede credenciada e benefícios exclusivos.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/images/imagem-20para-20pagina.png",
      },
    ],
    apple: "/images/imagem-20para-20pagina.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`font-sans antialiased`}>
        <ScrollAnimations />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
