"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone } from "lucide-react"
import { usePathname } from "next/navigation"

function getOperadoraInfo(pathname: string) {
  if (pathname.includes("sulamer"))
    return { operadora: "sulamerica", basePath: "/corretora-autorizada-sulamer", color: "#f97316" }
  if (pathname.includes("amill"))
    return { operadora: "amil", basePath: "/corretora-autorizada-amill", color: "#004a93" }
  if (pathname.includes("bradsco"))
    return { operadora: "bradesco", basePath: "/corretora-autorizada-bradsco", color: "#cc092f" }
  if (pathname.includes("medsenr"))
    return { operadora: "medsenior", basePath: "/corretora-autorizada-medsenr", color: "#00a859" }
  return { operadora: "", basePath: "", color: "#f97316" }
}

export function Footer() {
  const pathname = usePathname()
  const operadoraInfo = getOperadoraInfo(pathname)

  const isOperadoraPage = operadoraInfo.basePath !== ""
  const baseHref = isOperadoraPage ? operadoraInfo.basePath : "/"
  const cotacaoHref = isOperadoraPage ? `/cotacao?operadora=${operadoraInfo.operadora}` : "/cotacao"
  const contatoHref = isOperadoraPage ? `/corretora/contato?operadora=${operadoraInfo.operadora}` : "/corretora/contato"
  const linkColor = operadoraInfo.color

  return (
    <footer className="bg-white border-t border-gray-100 py-16 lg:py-20 xl:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
          {/* Column 1 - Corretor Habilitado Badge */}
          <div className="flex justify-center sm:justify-start">
            <div className="w-44 h-44 lg:w-52 lg:h-52 relative">
              <Image src="/images/corretor-20abilitado.png" alt="Corretor Habilitado" fill className="object-contain" />
            </div>
          </div>

          {/* Column 2 - Sobre Nós */}
          <div className="text-center sm:text-left">
            <h3 className="text-[#1a3a5c] font-bold text-lg lg:text-xl mb-5">Sobre Nós</h3>
            <p className="text-gray-700 font-semibold mb-4 text-base">
              © Copyright Cote Planos de Saúde
              <br />- Todos os Direitos Reservados.
            </p>
            <p className="text-gray-500 text-sm lg:text-base leading-relaxed">
              Ao preencher qualquer formulário neste site você estará concordando em receber informações e cotações
              sobre seguros e planos de saúde, de acordo com a nossa{" "}
              <Link
                href="/politica-de-privacidade"
                className="hover:underline font-medium"
                style={{ color: linkColor }}
              >
                Política de Privacidade
              </Link>
              , regida em conformidade com a Lei Geral de Proteção de Dados Pessoais <strong>(LGPD)</strong>.
            </p>
          </div>

          {/* Column 3 - Contato */}
          <div className="text-center sm:text-left">
            <h3 className="text-[#1a3a5c] font-bold text-lg lg:text-xl mb-5">Contato</h3>

            <div className="flex items-center gap-2 justify-center sm:justify-start mb-1">
              <Phone className="w-4 h-4 text-[#1a3a5c]" />
              <p className="text-gray-600 font-semibold text-base">Telefone:</p>
            </div>
            <a
              href="tel:+5561986785640"
              className="text-gray-500 mb-4 text-base block hover:opacity-80"
              style={{ color: undefined }}
              onMouseEnter={(e) => (e.currentTarget.style.color = linkColor)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
            >
              (61) 98678-5640
            </a>

            <div className="flex items-center gap-2 justify-center sm:justify-start mb-1">
              <Image src="https://i.imgur.com/Gg6d75L.png" alt="WhatsApp" width={16} height={16} />
              <p className="text-gray-600 font-semibold text-base">WhatsApp:</p>
            </div>
            <a
              href="https://wa.me/5561986785640?text=Olá! Gostaria de informações sobre planos de saúde."
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 text-base block hover:text-[#25D366] break-all"
            >
              (61) 98678-5640
            </a>
          </div>

          {/* Column 4 - Menu */}
          <div className="text-center sm:text-left">
            <h3 className="text-[#1a3a5c] font-bold text-lg lg:text-xl mb-5">Menu</h3>
            <nav className="flex flex-col gap-3">
              <Link href={`${baseHref}#inicio`} className="hover:underline text-base" style={{ color: linkColor }}>
                Início
              </Link>
              <Link href={`${baseHref}#vantagens`} className="hover:underline text-base" style={{ color: linkColor }}>
                Vantagens
              </Link>
              <Link href={`${baseHref}#duvidas`} className="hover:underline text-base" style={{ color: linkColor }}>
                Dúvidas
              </Link>
              <Link href={cotacaoHref} className="hover:underline text-base" style={{ color: linkColor }}>
                Cotação Online
              </Link>
              <Link href={contatoHref} className="hover:underline text-base" style={{ color: linkColor }}>
                Cote no WhatsApp
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Credit */}
        <div className="mt-14 lg:mt-20 pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-500 text-base">
            Desenvolvido por{" "}
            <a
              href="https://wa.me/5543996660225?text=Olá! Vi seu trabalho no site e gostaria de mais informações."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3b82f6] hover:underline font-medium"
            >
              Clay Web Sites
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
