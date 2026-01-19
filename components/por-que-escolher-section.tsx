import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const beneficios = [
  "Até 30% de Economia (planos com e sem coparticipação).",
  "Para você, sua família ou sua empresa a partir de 2 pessoas.",
  "Médico na Tela - Telemedicina com prescrição médica.",
]

export function PorQueEscolherSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Mobile Layout */}
          <div className="flex flex-col lg:hidden">
            {/* H1 - Topo centralizado */}
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3a5c] mb-6 leading-tight text-center">
              Por Que Indicamos os Planos de Saúde SulAmérica?
            </h2>

            {/* Imagem - Abaixo do H1 */}
            <div className="w-full flex justify-center mb-8">
              <div className="relative w-full max-w-md">
                <div className="bg-gray-100 rounded-2xl p-2">
                  <img
                    src="https://blog.sst.com.br/wp-content/uploads/2023/01/ambulatorio-medico-empresas.jpg"
                    alt="Profissional de saúde com tablet"
                    className="rounded-xl object-cover w-full aspect-[16/9]"
                  />
                </div>
              </div>
            </div>

            {/* Conteúdo - Abaixo da imagem */}
            <div className="text-center">
              <p className="text-[#64748b] text-sm sm:text-base mb-6 leading-relaxed">
                Indicamos a <span className="font-semibold text-[#1a3a5c]">SulAmérica Saúde</span> pois possui planos
                especiais para você ou para sua empresa, inclusive MEI. A operadora oferece planos empresariais de
                qualidade, com excelente custo-benefício.
              </p>

              <ul className="space-y-3 mb-8 text-left max-w-md mx-auto">
                {beneficios.map((beneficio, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-[#1a3a5c] font-bold mt-1">•</span>
                    <span className="text-[#1a3a5c] text-sm sm:text-base">{beneficio}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
                <Link href="/cotacao" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-[#f97316] hover:bg-[#ea580c] text-white rounded-full px-8 sm:px-10 text-base sm:text-lg font-semibold shadow-lg py-6">
                    Cotação Online
                  </Button>
                </Link>
                <Link href="/corretora/contato" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full px-8 sm:px-10 text-base sm:text-lg font-semibold shadow-lg flex items-center justify-center gap-3 py-6">
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
            </div>
          </div>

          {/* Desktop Layout - Lado a lado como antes */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Imagem à esquerda */}
            <div className="relative">
              <div className="bg-gray-100 rounded-2xl p-2">
                <img
                  src="https://blog.sst.com.br/wp-content/uploads/2023/01/ambulatorio-medico-empresas.jpg"
                  alt="Profissional de saúde com tablet"
                  className="rounded-xl object-cover w-full aspect-[4/3]"
                />
              </div>
            </div>

            {/* Conteúdo à direita */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1a3a5c] leading-tight">
                Por Que Indicamos os Planos de Saúde SulAmérica?
              </h2>

              <p className="text-[#64748b] text-base lg:text-lg leading-relaxed">
                Indicamos a <span className="font-semibold text-[#1a3a5c]">SulAmérica Saúde</span> pois possui planos
                especiais para você ou para sua empresa, inclusive MEI. A operadora oferece planos empresariais de
                qualidade, com excelente custo-benefício.
              </p>

              <ul className="space-y-3">
                {beneficios.map((beneficio, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-[#1a3a5c] font-bold mt-1">•</span>
                    <span className="text-[#1a3a5c] text-base">{beneficio}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-row items-center gap-4">
                <Link href="/cotacao">
                  <Button className="bg-[#f97316] hover:bg-[#ea580c] text-white rounded-full px-10 text-lg font-semibold shadow-lg py-6">
                    Cotação Online
                  </Button>
                </Link>
                <Link href="/corretora/contato">
                  <Button className="bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full px-10 text-lg font-semibold shadow-lg flex items-center justify-center gap-3 py-6">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
