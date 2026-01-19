import Link from "next/link"

const vantagens = [
  {
    iconUrl: "/images/1.png",
    title: "Qualidade e Segurança",
    description:
      "Conte com a solidez e segurança da operadora para garantir o melhor atendimento. Qualidade incomparável.",
  },
  {
    iconUrl: "/images/2.png",
    title: "Reembolso",
    description: "Consulte com profissional da sua escolha e receba reembolso da operadora.",
    hasLink: true,
  },
  {
    iconUrl: "/images/3.png",
    title: "Benefícios Exclusivos",
    description: "A operadora oferece acesso a descontos em farmácias e em aluguéis de veículos, vacinas e muito mais.",
  },
]

export function VantagensSection() {
  return (
    <section id="vantagens" className="py-8 sm:py-10 lg:py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-8 max-w-6xl mx-auto">
          {vantagens.map((vantagem, index) => (
            <div key={index} className="flex items-start gap-4 flex-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-full border-2 border-[#f97316] flex items-center justify-center bg-white">
                <img
                  src={vantagem.iconUrl || "/placeholder.svg"}
                  alt={vantagem.title}
                  className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-sm sm:text-base font-bold text-[#1a3a5c] mb-1">{vantagem.title}</h3>
                <p className="text-[#64748b] text-xs sm:text-sm leading-relaxed">{vantagem.description}</p>
                {vantagem.hasLink && (
                  <Link
                    href="/cotacao"
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
  )
}
