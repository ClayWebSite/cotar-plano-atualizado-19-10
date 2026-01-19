"use client"

import type React from "react"
import { useState, Suspense } from "react"
import { User, Mail, Phone, Building2, Users, MapPin, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"

type FormData = {
  nomeCompleto: string
  email: string
  telefone: string
  tipoPlano: string
  idades: string
  cidade: string
  estado: string
  mensagem: string
}

const OPERADORA_INFO: Record<string, { nome: string; assunto: string }> = {
  amil: { nome: "Amil", assunto: "Cotação Plano Amil" },
  bradesco: { nome: "Bradesco Saúde", assunto: "Cotação Plano Bradesco" },
  medsenior: { nome: "MedSênior", assunto: "Cotação Plano MedSênior" },
  sulamerica: { nome: "SulAmérica", assunto: "Cotação Plano SulAmérica" },
  default: { nome: "de Saúde", assunto: "Cotação Plano de Saúde" },
}

const ESTADOS_BRASIL = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
]

const WHATSAPP_NUMBER = "5561986785640"

function CotacaoForm({ operadoraParam }: { operadoraParam: string }) {
  const [formData, setFormData] = useState<FormData>({
    nomeCompleto: "",
    email: "",
    telefone: "",
    tipoPlano: "",
    idades: "",
    cidade: "",
    estado: "",
    mensagem: "",
  })
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const operadoraInfo = OPERADORA_INFO[operadoraParam] || OPERADORA_INFO.default

  const validateForm = () => {
    const newErrors: Partial<FormData> = {}

    if (!formData.nomeCompleto.trim()) newErrors.nomeCompleto = "Obrigatório"

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim() || !emailRegex.test(formData.email)) newErrors.email = "E-mail inválido"

    if (!formData.telefone.trim() || formData.telefone.replace(/\D/g, "").length < 10)
      newErrors.telefone = "Telefone inválido"

    if (!formData.tipoPlano) newErrors.tipoPlano = "Selecione"

    if (!formData.idades.trim()) newErrors.idades = "Obrigatório"

    if (!formData.cidade.trim()) newErrors.cidade = "Obrigatório"

    if (!formData.estado) newErrors.estado = "Selecione"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    if (numbers.length <= 2) return `(${numbers}`
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value)
    setFormData({ ...formData, telefone: formatted })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    const telefoneClean = formData.telefone.replace(/\D/g, "")
    const ddd = telefoneClean.slice(0, 2)
    const numero = telefoneClean.slice(2)

    try {
      const response = await fetch("/api/send-cotacao", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: formData.nomeCompleto,
          email: formData.email,
          ddd: ddd,
          telefone: numero,
          numeroPessoas: formData.idades,
          tipoPlano: formData.tipoPlano === "empresarial" ? "empresarial" : "pessoa_fisica",
          operadora: operadoraParam,
          cidade: formData.cidade,
          estado: formData.estado,
          mensagem: formData.mensagem,
          assunto: operadoraInfo.assunto,
        }),
      })

      if (!response.ok) {
        throw new Error("Erro ao enviar cotação")
      }

      // Redirecionar para WhatsApp após envio bem-sucedido
      const tipoPlanoText = formData.tipoPlano === "empresarial" ? "Empresarial (MEI)" : "Individual/Familiar"

      const message = `*${operadoraInfo.assunto}*

*Nome:* ${formData.nomeCompleto}
*E-mail:* ${formData.email}
*Telefone:* ${formData.telefone}
*Tipo:* ${tipoPlanoText}
*Idades:* ${formData.idades}
*Cidade:* ${formData.cidade} - ${formData.estado}
${formData.mensagem ? `*Obs:* ${formData.mensagem}` : ""}`

      const encodedMessage = encodeURIComponent(message)
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`

      window.open(whatsappUrl, "_blank")
    } catch (error) {
      alert("Erro ao enviar cotação. Por favor, tente novamente.")
    }
  }

  const inputClasses = (error?: string) =>
    `w-full pl-9 pr-3 py-2.5 text-sm border rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/50 focus:border-[#0ea5e9] ${
      error ? "border-red-400 bg-red-50/50" : "border-gray-200 bg-white hover:border-gray-300"
    }`

  const selectClasses = (error?: string) =>
    `w-full pl-9 pr-8 py-2.5 text-sm border rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/50 focus:border-[#0ea5e9] appearance-none bg-white cursor-pointer ${
      error ? "border-red-400 bg-red-50/50" : "border-gray-200 hover:border-gray-300"
    }`

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#f0f9ff] via-white to-[#f0fdf4]">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm py-3 px-4 border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between max-w-4xl">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 relative">
              <Image src="/images/imagem-20para-20pagina.png" alt="Logo" fill className="object-contain" />
            </div>
            <span className="text-[#1a3a5c] font-bold text-sm sm:text-base">Cotar Plano {operadoraInfo.nome}</span>
          </Link>
          <Link href="/" className="text-[#f97316] hover:text-[#ea580c] font-medium text-sm transition-colors">
            Voltar
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-6 sm:py-10">
        <div className="w-full max-w-lg">
          {/* Card */}
          <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 overflow-hidden border border-gray-100">
            {/* Top accent */}
            <div className="h-1.5 bg-gradient-to-r from-[#0ea5e9] via-[#38bdf8] to-[#22d3ee]" />

            <div className="p-5 sm:p-6">
              {/* Header */}
              <div className="text-center mb-5">
                <h1 className="text-xl sm:text-2xl font-bold text-[#1a3a5c] mb-1">Solicite sua Cotação</h1>
                <p className="text-gray-500 text-sm">{operadoraInfo.assunto}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                {/* Nome e Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">
                      Nome Completo <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Seu nome"
                        value={formData.nomeCompleto}
                        onChange={(e) => setFormData({ ...formData, nomeCompleto: e.target.value })}
                        className={inputClasses(errors.nomeCompleto)}
                      />
                    </div>
                    {errors.nomeCompleto && <p className="text-red-500 text-xs mt-0.5">{errors.nomeCompleto}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">
                      E-mail <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={inputClasses(errors.email)}
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-xs mt-0.5">{errors.email}</p>}
                  </div>
                </div>

                {/* Telefone e Tipo */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">
                      Telefone <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="tel"
                        placeholder="(11) 99999-9999"
                        value={formData.telefone}
                        onChange={handlePhoneChange}
                        maxLength={15}
                        className={inputClasses(errors.telefone)}
                      />
                    </div>
                    {errors.telefone && <p className="text-red-500 text-xs mt-0.5">{errors.telefone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">
                      Tipo de Plano <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <select
                        value={formData.tipoPlano}
                        onChange={(e) => setFormData({ ...formData, tipoPlano: e.target.value })}
                        className={selectClasses(errors.tipoPlano)}
                      >
                        <option value="">Selecione</option>
                        <option value="individual">Individual / Familiar</option>
                        <option value="empresarial">Empresarial (MEI)</option>
                      </select>
                      <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                    {errors.tipoPlano && <p className="text-red-500 text-xs mt-0.5">{errors.tipoPlano}</p>}
                  </div>
                </div>

                {/* Idades */}
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Idades dos titulares e dependentes <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Users className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Ex: 35, 32, 8, 5"
                      value={formData.idades}
                      onChange={(e) => setFormData({ ...formData, idades: e.target.value })}
                      className={inputClasses(errors.idades)}
                    />
                  </div>
                  <p className="text-gray-400 text-xs mt-0.5">Separe as idades por vírgula</p>
                  {errors.idades && <p className="text-red-500 text-xs mt-0.5">{errors.idades}</p>}
                </div>

                {/* Cidade e Estado */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">
                      Cidade <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Sua cidade"
                        value={formData.cidade}
                        onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                        className={inputClasses(errors.cidade)}
                      />
                    </div>
                    {errors.cidade && <p className="text-red-500 text-xs mt-0.5">{errors.cidade}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">
                      Estado <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <select
                        value={formData.estado}
                        onChange={(e) => setFormData({ ...formData, estado: e.target.value })}
                        className={selectClasses(errors.estado)}
                      >
                        <option value="">UF</option>
                        {ESTADOS_BRASIL.map((estado) => (
                          <option key={estado} value={estado}>
                            {estado}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                    {errors.estado && <p className="text-red-500 text-xs mt-0.5">{errors.estado}</p>}
                  </div>
                </div>

                {/* Mensagem */}
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Observações <span className="text-gray-400">(opcional)</span>
                  </label>
                  <textarea
                    placeholder="Alguma informação adicional?"
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    rows={2}
                    className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/50 focus:border-[#0ea5e9] hover:border-gray-300 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#25D366] to-[#20bd5a] hover:from-[#20bd5a] hover:to-[#1da851] text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg shadow-[#25D366]/25 hover:shadow-xl hover:shadow-[#25D366]/30 flex items-center justify-center gap-2 mt-4"
                >
                  <Image
                    src="https://i.imgur.com/Gg6d75L.png"
                    alt="WhatsApp"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  Solicitar Cotação via WhatsApp
                </button>
              </form>

              {/* Trust badges */}
              <div className="flex items-center justify-center gap-4 mt-5 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Dados seguros
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Resposta rápida
                </div>
              </div>
            </div>
          </div>

          {/* Footer text */}
          <p className="text-center text-xs text-gray-400 mt-4 px-4">
            Ao enviar, você concorda com nossa{" "}
            <Link href="/politica-de-privacidade" className="text-[#0ea5e9] hover:underline">
              Política de Privacidade
            </Link>
          </p>
        </div>
      </main>
    </div>
  )
}

function CotacaoFormWrapper() {
  const searchParams = useSearchParams()
  const operadoraParam = searchParams.get("operadora") || "default"
  return <CotacaoForm operadoraParam={operadoraParam} />
}

export default function CotacaoPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f0f9ff] via-white to-[#f0fdf4]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0ea5e9]" />
        </div>
      }
    >
      <CotacaoFormWrapper />
    </Suspense>
  )
}
