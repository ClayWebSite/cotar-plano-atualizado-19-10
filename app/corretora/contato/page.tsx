"use client"

import type React from "react"
import Image from "next/image"
import { useState, Suspense } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { WhatsAppModal } from "@/components/whatsapp-modal"

const operadorasConfig: Record<string, { name: string; title: string }> = {
  sulamerica: { name: "SulAmérica", title: "Cotar Plano SulAmérica" },
  amil: { name: "Amil", title: "Cotar Plano Amil" },
  bradesco: { name: "Bradesco Saúde", title: "Cotar Plano Bradesco" },
  medsenior: { name: "MedSênior", title: "Cotar Plano MedSênior" },
}

function ContatoContent() {
  const searchParams = useSearchParams()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [ddd, setDdd] = useState("")
  const [phone, setPhone] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const operadoraParam = searchParams.get("operadora") || "sulamerica"
  const operadora = operadorasConfig[operadoraParam] || operadorasConfig.sulamerica

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || !email || !ddd || !phone) {
      alert("Por favor, preencha todos os campos")
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert("Por favor, insira um e-mail válido")
      return
    }

    if (ddd.length < 2 || phone.length < 8) {
      alert("Por favor, insira um telefone válido")
      return
    }

    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 relative">
                <Image src="/images/imagem-20para-20pagina.png" alt="Logo" fill className="object-contain" />
              </div>
              <span className="text-[#1a3a5c] font-bold text-sm md:text-base">{operadora.title}</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="/#inicio" className="text-[#1a3a5c] hover:text-[#f97316] font-medium">
                Início
              </Link>
              <Link href="/#vantagens" className="text-[#1a3a5c] hover:text-[#f97316] font-medium">
                Vantagens
              </Link>
              <Link href="/#duvidas" className="text-[#1a3a5c] hover:text-[#f97316] font-medium">
                Dúvidas
              </Link>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <Link href="/cotacao">
                <Button className="bg-[#f97316] hover:bg-[#ea580c] text-white rounded-full px-8 py-4 text-base font-semibold shadow-md">
                  Cotação Online
                </Button>
              </Link>
              <Link href={`/corretora/contato?operadora=${operadoraParam}`}>
                <Button className="bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full px-8 py-6 text-base font-semibold shadow-md flex items-center gap-3">
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

            <button className="md:hidden p-2 text-[#1a3a5c]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col gap-4">
                <Link href="/#inicio" className="text-[#1a3a5c] hover:text-[#f97316] font-medium">
                  Início
                </Link>
                <Link href="/#vantagens" className="text-[#1a3a5c] hover:text-[#f97316] font-medium">
                  Vantagens
                </Link>
                <Link href="/#duvidas" className="text-[#1a3a5c] hover:text-[#f97316] font-medium">
                  Dúvidas
                </Link>
                <div className="flex flex-col gap-3 pt-4">
                  <Link href="/cotacao">
                    <Button className="bg-[#f97316] hover:bg-[#ea580c] text-white rounded-full w-full py-4 text-base font-semibold">
                      Cotação Online
                    </Button>
                  </Link>
                  <Link href={`/corretora/contato?operadora=${operadoraParam}`}>
                    <Button className="bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full w-full py-6 font-semibold shadow-md flex items-center justify-center gap-3">
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

      {/* Main Content */}
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-xl">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="mb-6 pb-4 border-b border-gray-200">
              <h1 className="text-xl font-bold text-[#1a3a5c] mb-1">
                Inicie uma conversa conosco através do WhatsApp.
              </h1>
              <p className="text-sm text-gray-500">Insira as Informações Abaixo para Cotar {operadora.name}.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-[#1a3a5c] text-sm font-medium mb-2">
                  Nome <span className="text-red-500">*</span>
                </label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full max-w-sm border-gray-300 rounded"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-[#1a3a5c] text-sm font-medium mb-2">
                  E-mail <span className="text-red-500">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full max-w-sm border-gray-300 rounded"
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div className="mb-8 pb-6 border-b border-gray-200">
                <label className="block text-[#1a3a5c] text-sm font-medium mb-2">
                  Seu Número do WhatsApp <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-3 max-w-xs">
                  <div className="w-16">
                    <Input
                      type="text"
                      value={ddd}
                      onChange={(e) => setDdd(e.target.value.replace(/\D/g, "").slice(0, 2))}
                      maxLength={2}
                      className="text-center border-gray-300 rounded"
                      required
                    />
                    <p className="text-xs text-gray-400 mt-1">DDD</p>
                  </div>
                  <div className="flex-1">
                    <Input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 9))}
                      maxLength={9}
                      className="border-gray-300 rounded"
                      required
                    />
                    <p className="text-xs text-gray-400 mt-1">Celular</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mb-6">
                <Button
                  type="submit"
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full px-10 py-6 text-base font-semibold flex items-center gap-3"
                >
                  Iniciar Conversa
                  <Image
                    src="https://i.imgur.com/Gg6d75L.png"
                    alt="WhatsApp"
                    width={28}
                    height={28}
                    className="w-7 h-7"
                  />
                </Button>
              </div>

              <p className="text-xs text-gray-500 leading-relaxed">
                Ao preencher o formulário, concordo em receber informações sobre plano de saúde e seguros e concordo com
                a{" "}
                <Link href="/politica-de-privacidade" className="text-[#3b82f6] hover:underline">
                  Política de Privacidade
                </Link>
              </p>
            </form>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
            <div className="flex justify-center md:justify-start">
              <div className="w-48 h-48 relative">
                <Image
                  src="/images/corretor-20abilitado.png"
                  alt="Corretor Habilitado"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Sobre Nós */}
            <div>
              <h3 className="text-[#1a3a5c] font-bold text-lg mb-4">Sobre Nós</h3>
              <p className="text-gray-700 font-semibold mb-4">
                © Copyright Cote Planos de Saúde
                <br />- Todos os Direitos Reservados.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ao preencher qualquer formulário neste site você estará concordando em receber informações e cotações
                sobre seguros e planos de saúde, de acordo com a nossa{" "}
                <Link href="/politica-de-privacidade" className="text-[#f97316] hover:underline">
                  Política de Privacidade
                </Link>
                , regida em conformidade com a Lei Geral de Proteção de Dados Pessoais <strong>(LGPD)</strong>.
              </p>
            </div>

            {/* Contato */}
            <div>
              <h3 className="text-[#1a3a5c] font-bold text-lg mb-4">Contato</h3>

              <div className="flex items-center gap-2 mb-1">
                <Phone className="w-4 h-4 text-[#1a3a5c]" />
                <p className="text-gray-700 font-semibold">Telefone:</p>
              </div>
              <a href="tel:+5561986785640" className="text-gray-600 mb-3 block hover:text-[#f97316]">
                (61) 98678-5640
              </a>

              <div className="flex items-center gap-2 mb-1">
                <Image src="https://i.imgur.com/Gg6d75L.png" alt="WhatsApp" width={16} height={16} />
                <p className="text-gray-700 font-semibold">WhatsApp:</p>
              </div>
              <a
                href="https://wa.me/5561986785640"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 block hover:text-[#25D366]"
              >
                (61) 98678-5640
              </a>
            </div>

            {/* Menu */}
            <div>
              <h3 className="text-[#1a3a5c] font-bold text-lg mb-4">Menu</h3>
              <nav className="flex flex-col gap-2">
                <Link href="/#inicio" className="text-[#f97316] hover:underline">
                  Início
                </Link>
                <Link href="/#vantagens" className="text-[#f97316] hover:underline">
                  Vantagens
                </Link>
                <Link href="/#duvidas" className="text-[#f97316] hover:underline">
                  Dúvidas
                </Link>
                <Link href="/cotacao" className="text-[#f97316] hover:underline">
                  Cotação Online
                </Link>
                <Link href="/corretora/contato" className="text-[#f97316] hover:underline">
                  Cote no WhatsApp
                </Link>
              </nav>
            </div>
          </div>

          {/* Bottom Credit */}
          <div className="mt-10 pt-6 border-t border-gray-200 text-center">
            <p className="text-gray-600">
              Desenvolvido por{" "}
              <a
                href="https://wa.me/5543996660225?text=Olá! Vi seu trabalho no site e gostaria de mais informações."
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3b82f6] hover:underline"
              >
                Clay Web Sites
              </a>
            </p>
          </div>
        </div>
      </footer>

      {showModal && (
        <WhatsAppModal
          name={name}
          email={email}
          ddd={ddd}
          phone={phone}
          operadoraNome={operadora.name}
          onClose={handleCloseModal}
        />
      )}
    </div>
  )
}

export default function ContatoWhatsAppPage() {
  return (
    <Suspense fallback={null}>
      <ContatoContent />
    </Suspense>
  )
}
