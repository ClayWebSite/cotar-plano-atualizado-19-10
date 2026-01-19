"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { usePathname } from "next/navigation"

interface HeaderProps {
  customTitle?: string
}

function getBrandColor(pathname: string) {
  if (pathname.includes("sulamer")) return { main: "#f97316", hover: "#ea580c" }
  if (pathname.includes("amill")) return { main: "#004a93", hover: "#003670" }
  if (pathname.includes("bradsco")) return { main: "#cc092f", hover: "#a00725" }
  if (pathname.includes("medsenr")) return { main: "#00a859", hover: "#008a48" }
  return { main: "#f97316", hover: "#ea580c" }
}

function getOperadoraInfo(pathname: string) {
  if (pathname.includes("sulamer")) return { operadora: "sulamerica", basePath: "/corretora-autorizada-sulamer" }
  if (pathname.includes("amill")) return { operadora: "amil", basePath: "/corretora-autorizada-amill" }
  if (pathname.includes("bradsco")) return { operadora: "bradesco", basePath: "/corretora-autorizada-bradsco" }
  if (pathname.includes("medsenr")) return { operadora: "medsenior", basePath: "/corretora-autorizada-medsenr" }
  return { operadora: "", basePath: "" }
}

export function Header({ customTitle }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const brandColors = getBrandColor(pathname)
  const operadoraInfo = getOperadoraInfo(pathname)

  const isOperadoraPage = operadoraInfo.basePath !== ""
  const baseHref = isOperadoraPage ? operadoraInfo.basePath : ""
  const cotacaoHref = isOperadoraPage ? `/cotacao?operadora=${operadoraInfo.operadora}` : "/cotacao"
  const contatoHref = isOperadoraPage ? `/corretora/contato?operadora=${operadoraInfo.operadora}` : "/corretora/contato"

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link
            href={isOperadoraPage ? operadoraInfo.basePath : "/"}
            className="flex items-center gap-2 sm:gap-3 lg:gap-4"
          >
            <div className="relative flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12">
              <Image src="/images/imagem-20para-20pagina.png" alt="Logo" fill className="object-contain" sizes="48px" />
            </div>
            <span className="text-[#1a3a5c] font-bold leading-tight max-w-[140px] sm:max-w-none text-xs lg:text-xl">
              {customTitle || "Cotar Plano SulAmérica"}
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
            <Link
              href={`${baseHref}#inicio`}
              className={`text-[#1a3a5c] hover:text-${brandColors.hover} font-medium text-base xl:text-lg`}
            >
              Início
            </Link>
            <Link
              href={`${baseHref}#vantagens`}
              className={`text-[#1a3a5c] hover:text-${brandColors.hover} font-medium text-base xl:text-lg`}
            >
              Vantagens
            </Link>
            <Link
              href={`${baseHref}#duvidas`}
              className={`text-[#1a3a5c] hover:text-${brandColors.hover} font-medium text-base xl:text-lg`}
            >
              Dúvidas
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <Link href={cotacaoHref}>
              <Button
                className="text-white rounded-full font-semibold shadow-md px-8 py-4 text-base"
                style={{ backgroundColor: brandColors.main }}
              >
                Cotação Online
              </Button>
            </Link>
            <Link href={contatoHref}>
              <Button className="bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full font-semibold shadow-md flex items-center gap-3 px-8 py-4 text-base">
                Cote no WhatsApp
                <Image
                  src="https://i.imgur.com/Gg6d75L.png"
                  alt="WhatsApp"
                  width={28}
                  height={28}
                  className="w-7 h-7"
                />
              </Button>
            </Link>
          </div>

          <button className="lg:hidden p-2 text-[#1a3a5c]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-5 border-t bg-white">
            <nav className="flex flex-col gap-3">
              <Link
                href={`${baseHref}#inicio`}
                className={`text-[#1a3a5c] hover:text-${brandColors.hover} font-medium text-base py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link
                href={`${baseHref}#vantagens`}
                className={`text-[#1a3a5c] hover:text-${brandColors.hover} font-medium text-base py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                Vantagens
              </Link>
              <Link
                href={`${baseHref}#duvidas`}
                className={`text-[#1a3a5c] hover:text-${brandColors.hover} font-medium text-base py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                Dúvidas
              </Link>
              <div className="flex flex-col gap-3 pt-3 mt-2 border-t">
                <Link href={cotacaoHref} onClick={() => setIsMenuOpen(false)}>
                  <Button
                    className="text-white rounded-full w-full py-4 text-base font-semibold"
                    style={{ backgroundColor: brandColors.main }}
                  >
                    Cotação Online
                  </Button>
                </Link>
                <Link href={contatoHref} onClick={() => setIsMenuOpen(false)}>
                  <Button className="bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full font-semibold shadow-md flex items-center justify-center gap-3 w-full py-4">
                    Cote no WhatsApp
                    <Image
                      src="https://i.imgur.com/Gg6d75L.png"
                      alt="WhatsApp"
                      width={28}
                      height={28}
                      className="w-7 h-7"
                    />
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
