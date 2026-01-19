import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <>
      <div className="h-16 lg:h-20" />

      <section
        id="inicio"
        className="relative min-h-[500px] sm:min-h-[550px] lg:min-h-[600px] xl:min-h-[700px] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-black overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://newinter7.com/wp-content/uploads/2024/12/equipe-medica-multidisciplinar-inter7.jpeg')`,
              opacity: 0.4,
              backgroundPosition: "center 20%",
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center py-10 sm:py-14 lg:py-20">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 max-w-4xl mx-auto leading-tight">
            Planos de Saúde SulAmérica
          </h1>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/90 mb-2 sm:mb-3 max-w-2xl mx-auto">
            com a Sucesso Corretora
          </p>

          <p className="text-sm sm:text-base lg:text-lg text-white/80 mb-2 sm:mb-3 lg:mb-4 max-w-2xl mx-auto leading-relaxed">
            Planos individuais, familiares e empresariais com qualidade e confiança.
          </p>

          <p className="text-xs sm:text-sm lg:text-base text-white/60 mb-6 sm:mb-8 lg:mb-10 max-w-xl mx-auto">
            Fale com um consultor e encontre o plano ideal para você!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <Link href="/cotacao" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-[#f97316] hover:bg-[#ea580c] text-white rounded-full px-10 sm:px-12 lg:px-14 py-4 sm:py-5 lg:py-6 text-base sm:text-lg lg:text-xl font-semibold shadow-xl">
                Cotação Online
              </Button>
            </Link>
            <Link href="/corretora/contato" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full px-10 sm:px-12 py-4 sm:py-5 lg:py-6 text-base font-semibold shadow-xl flex items-center justify-center gap-3 lg:px-6 sm:text-xl">
                Cote no WhatsApp
                <Image
                  src="https://i.imgur.com/Gg6d75L.png"
                  alt="WhatsApp"
                  width={32}
                  height={32}
                  className="w-7 h-7 sm:w-8 sm:h-8 lg:h-10 lg:w-10"
                />
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-20">
          <div className="flex items-center gap-1 bg-black/50 border border-white/10 rounded px-2 py-1">
            <span className="text-[#22c55e] text-[10px]">✓</span>
            <span className="text-white/70 text-[8px] sm:text-[9px] font-medium">SUSEP nº 242155608</span>
          </div>
        </div>
      </section>
    </>
  )
}
