import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function PoliticaDePrivacidadePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 relative">
                <Image src="/images/imagem-20para-20pagina.png" alt="Logo" fill className="object-contain" />
              </div>
              <span className="text-[#1a3a5c] font-bold text-lg">Cotar Plano SulAmérica</span>
            </Link>
            <div className="flex items-center gap-3">
              <Link href="/">
                <Button className="bg-[#f97316] hover:bg-[#ea580c] text-white rounded-full font-semibold px-6 py-4 text-sm md:text-base">
                  Voltar ao Site
                </Button>
              </Link>
              <Link href="/corretora/contato" className="hidden md:block">
                <Button className="bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full font-semibold px-6 py-6 text-base flex items-center gap-3">
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
      </header>

      {/* Main Content */}
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a3a5c] mb-8">Política de Privacidade</h1>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-6">
              A sua privacidade é importante para nós. É política do <strong>Cote Planos de Saúde</strong> respeitar a
              sua privacidade em relação a qualquer informação sua que possamos coletar no site{" "}
              <strong>Cotar Plano SulAmérica</strong>.
            </p>

            <h2 className="text-xl font-bold text-[#1a3a5c] mt-8 mb-4">1. Informações que coletamos</h2>
            <p className="mb-6">
              Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço.
              Fazemos isso por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que
              estamos coletando e como será usado.
            </p>
            <p className="mb-6">As informações que podemos coletar incluem:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Nome completo</li>
              <li>Endereço de e-mail</li>
              <li>Número de telefone e WhatsApp</li>
              <li>Informações sobre o tipo de plano desejado</li>
              <li>Quantidade de beneficiários</li>
            </ul>

            <h2 className="text-xl font-bold text-[#1a3a5c] mt-8 mb-4">2. Como usamos suas informações</h2>
            <p className="mb-6">Utilizamos as informações coletadas para:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Entrar em contato para fornecer cotações de planos de saúde</li>
              <li>Enviar informações relevantes sobre seguros e planos de saúde</li>
              <li>Melhorar nossos serviços e atendimento ao cliente</li>
              <li>Cumprir obrigações legais e regulatórias</li>
            </ul>

            <h2 className="text-xl font-bold text-[#1a3a5c] mt-8 mb-4">3. Proteção de dados</h2>
            <p className="mb-6">
              Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando
              armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem
              como acesso, divulgação, cópia, uso ou modificação não autorizados.
            </p>

            <h2 className="text-xl font-bold text-[#1a3a5c] mt-8 mb-4">4. Compartilhamento de informações</h2>
            <p className="mb-6">
              Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando
              exigido por lei ou com as operadoras de planos de saúde para fins de cotação.
            </p>

            <h2 className="text-xl font-bold text-[#1a3a5c] mt-8 mb-4">5. Seus direitos (LGPD)</h2>
            <p className="mb-6">
              Em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018), você tem os
              seguintes direitos:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Confirmação da existência de tratamento de dados</li>
              <li>Acesso aos seus dados pessoais</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados</li>
              <li>Anonimização, bloqueio ou eliminação de dados desnecessários</li>
              <li>Portabilidade dos dados a outro fornecedor de serviço</li>
              <li>Eliminação dos dados pessoais tratados com o consentimento</li>
              <li>Revogação do consentimento</li>
            </ul>

            <h2 className="text-xl font-bold text-[#1a3a5c] mt-8 mb-4">6. Cookies</h2>
            <p className="mb-6">
              Nosso site pode usar cookies para melhorar sua experiência. Os cookies são arquivos de texto que são
              colocados no seu computador para fins de manutenção de registros padrão e para rastrear padrões de
              comportamento dos visitantes do site.
            </p>

            <h2 className="text-xl font-bold text-[#1a3a5c] mt-8 mb-4">7. Consentimento</h2>
            <p className="mb-6">
              Ao preencher qualquer formulário em nosso site, você consente em receber informações e cotações sobre
              seguros e planos de saúde, de acordo com esta Política de Privacidade.
            </p>

            <h2 className="text-xl font-bold text-[#1a3a5c] mt-8 mb-4">8. Contato</h2>
            <p className="mb-6">
              Se você tiver alguma dúvida sobre esta Política de Privacidade ou sobre como tratamos seus dados pessoais,
              entre em contato conosco:
            </p>
            <ul className="list-none mb-6 space-y-2">
              <li>
                <strong>Telefone:</strong> (61) 98678-5640
              </li>
              <li>
                <strong>WhatsApp:</strong> (61) 98678-5640
              </li>
            </ul>

            <h2 className="text-xl font-bold text-[#1a3a5c] mt-8 mb-4">9. Alterações nesta política</h2>
            <p className="mb-6">
              Reservamos o direito de modificar esta política de privacidade a qualquer momento. Quaisquer alterações
              serão publicadas nesta página. O uso continuado do site após quaisquer alterações constitui aceitação das
              mesmas.
            </p>

            <p className="mt-8 text-sm text-gray-500">
              <strong>Última atualização:</strong> Janeiro de 2026
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
