"use client"

import React from "react"

interface WhatsAppModalProps {
  name: string
  email: string
  ddd: string
  phone: string
  operadoraNome: string
  onClose: () => void
}

export function WhatsAppModal({ name, email, ddd, phone, operadoraNome, onClose }: WhatsAppModalProps) {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      const fullPhone = `5561986785640`
      const message = encodeURIComponent(
        `Olá! Meu nome é ${name}
E-mail: ${email}
Telefone: (${ddd}) ${phone}
Gostaria de cotar um plano ${operadoraNome}.`
      )
      window.open(`https://wa.me/${fullPhone}?text=${message}`, "_blank")
      onClose()
    }, 3000)

    return () => clearTimeout(timer)
  }, [name, email, ddd, phone, operadoraNome, onClose])

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg p-8 max-w-md mx-4 text-center shadow-xl">
        <div className="mb-4">
          <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-[#1a3a5c] mb-2">Obrigado!</h2>
          <p className="text-gray-600">Redirecionando para o WhatsApp...</p>
          <p className="text-gray-500 mt-2">Aguarde 3 segundos...</p>
        </div>
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#25D366]"></div>
        </div>
      </div>
    </div>
  )
}
