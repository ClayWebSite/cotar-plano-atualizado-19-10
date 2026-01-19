import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const beneficiosPorQue = [
  "Até 30% de Economia (planos com e sem coparticipação).",
  "Para você, sua família ou sua empresa a partir de 2 pessoas.",
  "Médico na Tela - Telemedicina com prescrição médica.",
]

const vantagens = [
  {
    iconUrl: "https://i.imgur.com/db3fjjp.png",
    title: "Qualidade e Segurança",
    description:
      "Conte com a solidez e segurança da operadora para garantir o melhor atendimento. Qualidade incomparável.",
  },
  {
    iconUrl: "https://i.imgur.com/HwAhW6M.png",
    title: "Reembolso",
    description: "Consulte com profissional da sua escolha e receba reembolso da operadora.",
    hasLink: true,
  },
  {
    iconUrl: "https://i.imgur.com/UMEsO3I.png",
    title: "Benefícios Exclusivos",
    description: "A operadora oferece acesso a descontos em farmácias e em aluguéis de veículos, vacinas e muito mais.",
  },
]

const faqs = [
  {
    question: "Como Vejo Valores dos Planos?",
    answer:
      "Para consultar os valores dos planos de saúde SulAmérica, basta clicar no botão 'Cotação Online' ou entrar em contato conosco pelo WhatsApp.",
  },
  {
    question: "Como Vejo a Rede Credenciada dos Planos?",
    answer:
      "A rede credenciada da SulAmérica é uma das mais completas do Brasil. Basta solicitar uma cotação e nossos corretores enviarão todas as informações.",
  },
  {
    question: "Quais os Benefícios de Ter o Plano de Saúde SulAmérica?",
    answer:
      "Os planos SulAmérica oferecem cobertura nacional, atendimento 24 horas, telemedicina, programas de prevenção e bem-estar.",
  },
]

export default function CorretoraSulamericaPage() {
  return (
    <main className="min-h-screen">
      <Header customTitle="Cotar Plano SulAmérica" />

      {/* Hero Section */}
      <>
        <div className="h-16 lg:h-20" />
        <section
          id="inicio"
          className="relative min-h-[500px] sm:min-h-[550px] lg:min-h-[600px] xl:min-h-[700px] flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-black">
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-5 lg:mb-6 max-w-4xl mx-auto leading-tight">
              Cote Conosco o Seu Plano de Saúde SulAmérica
            </h1>

            <p className="text-base sm:text-lg text-white/90 mb-3 sm:mb-4 lg:mb-5 max-w-2xl mx-auto leading-relaxed lg:text-2xl">
              Você precisa estar com a saúde em dia para continuar conquistando os seus objetivos.
            </p>

            <p className="text-sm font-semibold text-white mb-8 sm:mb-10 lg:mb-12 max-w-xl mx-auto sm:text-2xl">
              Faça uma cotação agora mesmo. Veja valores, rede credenciada e muito mais.
            </p>
            {/* End of headline change */}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Link href="/cotacao?operadora=sulamerica" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-[#f97316] hover:bg-[#ea580c] text-white rounded-full px-8 sm:px-10 lg:px-12 py-5 sm:py-6 text-sm sm:text-base lg:text-lg font-semibold shadow-xl">
                  Cotação Online
                </Button>
              </Link>
              <Link href="/corretora/contato?operadora=sulamerica" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full px-8 sm:px-10 lg:px-12 py-5 sm:py-6 text-sm sm:text-base lg:text-lg font-semibold shadow-xl flex items-center justify-center gap-3">
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
        </section>
      </>

      {/* Vantagens Section - Layout horizontal compacto */}
      <section id="vantagens" className="py-8 sm:py-10 lg:py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-8 max-w-6xl mx-auto">
            {vantagens.map((vantagem, index) => (
              <div key={index} className="flex items-start gap-4 flex-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center">
                  <img
                    src={vantagem.iconUrl || "/placeholder.svg"}
                    alt={vantagem.title}
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-bold text-[#1a3a5c] mb-1">{vantagem.title}</h3>
                  <p className="text-[#64748b] text-xs sm:text-sm leading-relaxed">{vantagem.description}</p>
                  {vantagem.hasLink && (
                    <Link
                      href="/cotacao?operadora=sulamerica"
                      className="inline-block mt-1 text-[#f97316] text-xs sm:text-sm font-semibold hover:underline"
                    >
                      Conheça os Planos!
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por Que Indicamos Section - Layout conforme imagem */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Mobile Layout */}
            <div className="flex flex-col lg:hidden">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3a5c] mb-6 leading-tight text-center">
                Por Que Indicamos os
                <br />
                Planos de Saúde
                <br />
                SulAmérica?
              </h2>

              {/* Image below H1 on mobile */}
              <div className="w-full flex justify-center mb-6">
                <div className="relative w-full max-w-md">
                  <div className="bg-gray-100 rounded-2xl p-2">
                    <img
                      src="https://blog.sst.com.br/wp-content/uploads/2023/01/ambulatorio-medico-empresas.jpg"
                      alt="Profissional de saúde com tablet"
                      className="rounded-xl object-cover w-full aspect-[4/3]"
                    />
                  </div>
                </div>
              </div>

              <p className="text-[#64748b] text-sm sm:text-base mb-6 leading-relaxed">
                Indicamos a <span className="font-semibold text-[#1a3a5c]">SulAmérica Saúde</span> pois possui planos
                especiais para você ou para sua empresa, inclusive MEI. A operadora oferece planos empresariais de
                qualidade, com excelente custo-benefício.
              </p>

              <ul className="space-y-3 mb-8">
                {beneficiosPorQue.map((beneficio, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-[#1a3a5c] font-bold mt-1">•</span>
                    <span className="text-[#1a3a5c] text-sm sm:text-base">{beneficio}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Link href="/cotacao?operadora=sulamerica" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-[#f97316] hover:bg-[#ea580c] text-white rounded-full px-6 sm:px-8 py-6 text-base sm:text-lg font-semibold shadow-lg">
                    Cotação Online
                  </Button>
                </Link>
                <Link href="/corretora/contato?operadora=sulamerica" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full px-6 sm:px-8 py-6 text-base sm:text-lg font-semibold shadow-lg flex items-center justify-center gap-3">
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

            {/* Desktop Layout - side by side */}
            <div className="hidden lg:flex lg:flex-row items-start gap-8 lg:gap-16">
              {/* Content - Lado esquerdo */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a3a5c] mb-6 lg:mb-8 leading-tight">
                  Por Que Indicamos os
                  <br />
                  Planos de Saúde
                  <br />
                  SulAmérica?
                </h2>

                <p className="text-[#64748b] text-sm sm:text-base lg:text-lg mb-6 leading-relaxed">
                  Indicamos a <span className="font-semibold text-[#1a3a5c]">SulAmérica Saúde</span> pois possui planos
                  especiais para você ou para sua empresa, inclusive MEI. A operadora oferece planos empresariais de
                  qualidade, com excelente custo-benefício.
                </p>

                <ul className="space-y-3 mb-8">
                  {beneficiosPorQue.map((beneficio, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-[#1a3a5c] font-bold mt-1">•</span>
                      <span className="text-[#1a3a5c] text-sm sm:text-base">{beneficio}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <Link href="/cotacao?operadora=sulamerica" className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto bg-[#f97316] hover:bg-[#ea580c] text-white rounded-full px-6 sm:px-8 py-6 text-base sm:text-lg font-semibold shadow-lg">
                      Cotação Online
                    </Button>
                  </Link>
                  <Link href="/corretora/contato?operadora=sulamerica" className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full px-6 sm:px-8 py-6 text-base sm:text-lg font-semibold shadow-lg flex items-center justify-center gap-3">
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

              {/* Imagem - Lado direito */}
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md">
                  <div className="bg-gray-100 rounded-2xl p-2">
                    <img
                      src="https://blog.sst.com.br/wp-content/uploads/2023/01/ambulatorio-medico-empresas.jpg"
                      alt="Profissional de saúde com tablet"
                      className="rounded-xl object-cover w-full aspect-[4/3]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="duvidas" className="py-12 sm:py-16 lg:py-20 bg-[#f8fafc]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1a3a5c] text-center mb-2 sm:mb-3">
            Alguma Dúvida?
          </h2>
          <p className="text-[#64748b] text-center text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 max-w-xl mx-auto">
            Encontre respostas para as perguntas mais frequentes
          </p>

          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl border-none shadow-sm hover:shadow-md transition-shadow px-4 sm:px-6"
              >
                <AccordionTrigger className="text-[#1a3a5c] font-semibold text-left hover:no-underline py-4 sm:py-5 text-sm sm:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#64748b] leading-relaxed pb-4 sm:pb-5 text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-10 sm:mt-12">
            <Link href="/cotacao?operadora=sulamerica" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-[#f97316] hover:bg-[#ea580c] text-white rounded-full px-8 sm:px-10 py-6 text-base sm:text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105">
                Cotação Online
              </Button>
            </Link>
            <Link href="/corretora/contato?operadora=sulamerica" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full px-8 sm:px-10 py-6 text-base sm:text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3">
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
      </section>

      <Footer />
    </main>
  )
}
