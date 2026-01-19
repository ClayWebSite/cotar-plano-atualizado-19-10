import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import Image from "next/image"

const faqs = [
  {
    question: "Como Vejo Valores dos Planos?",
    answer:
      "Para consultar os valores dos planos de saúde SulAmérica, basta clicar no botão 'Cotação Online' ou entrar em contato conosco pelo WhatsApp. Um de nossos corretores especializados irá apresentar as melhores opções de acordo com o seu perfil e necessidades.",
  },
  {
    question: "Como Vejo a Rede Credenciada dos Planos?",
    answer:
      "A rede credenciada da SulAmérica é uma das mais completas do Brasil. Você pode consultar hospitais, clínicas, laboratórios e profissionais disponíveis através do nosso atendimento. Basta solicitar uma cotação e nossos corretores enviarão todas as informações da rede credenciada na sua região.",
  },
  {
    question: "Quais os Benefícios de Ter o Plano de Saúde da Operadora SulAmérica?",
    answer:
      "Os planos SulAmérica oferecem cobertura nacional, atendimento 24 horas, telemedicina, programas de prevenção e bem-estar, reembolso para consultas particulares, descontos em farmácias e acesso aos melhores hospitais e profissionais de saúde do país. Além disso, você conta com um atendimento humanizado e uma empresa com mais de 125 anos de tradição no mercado.",
  },
]

export function FaqSection() {
  return (
    <section id="duvidas" className="py-20 lg:py-28 xl:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1a3a5c] text-center mb-4 lg:mb-6">
          Alguma Dúvida?
        </h2>
        <p className="text-[#64748b] text-center text-base lg:text-lg xl:text-xl mb-12 lg:mb-16 max-w-2xl mx-auto">
          Encontre respostas para as perguntas mais frequentes
        </p>

        <Accordion type="single" collapsible className="space-y-4 lg:space-y-6">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-[#f8fafc] rounded-2xl border-none shadow-sm px-6 lg:px-8"
            >
              <AccordionTrigger className="text-[#1a3a5c] font-semibold text-left hover:no-underline py-6 lg:py-7 text-base lg:text-lg xl:text-xl">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#64748b] leading-relaxed pb-6 lg:pb-7 text-base lg:text-lg">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6 mt-14 lg:mt-20">
          <Link href="/cotacao">
            <Button className="bg-[#f97316] hover:bg-[#ea580c] text-white rounded-full px-12 py-5 lg:px-16 lg:py-6 text-lg lg:text-xl font-semibold shadow-lg">
              Cotação Online
            </Button>
          </Link>
          <Link href="/corretora/contato">
            <Button className="bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full px-12 py-5 lg:px-16 lg:py-6 text-lg lg:text-xl font-semibold shadow-lg flex items-center gap-3">
              Cote no WhatsApp
              <Image
                src="https://i.imgur.com/Gg6d75L.png"
                alt="WhatsApp"
                width={32}
                height={32}
                className="w-8 h-8 lg:w-9 lg:h-9"
              />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
