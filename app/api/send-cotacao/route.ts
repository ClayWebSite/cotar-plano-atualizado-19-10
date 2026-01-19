import { NextResponse } from "next/server"

type CotacaoData = {
  numeroPessoas: string
  tipoPlano: string
  nome: string
  ddd: string
  telefone: string
  email: string
  operadora: string
  cidade?: string
  estado?: string
  assunto?: string
  mensagem?: string
}

const OPERADORA_EMAILS: Record<string, { email: string; nome: string }> = {
  amil: { email: "coteamilsuccesso@gmail.com", nome: "Amil" },
  bradesco: { email: "cotebradescosucesso@gmail.com", nome: "Bradesco Saúde" },
  medsenior: { email: "cotemedseniorsucesso@gmail.com", nome: "MedSênior" },
  sulamerica: { email: "cotesulamericasucesso@gmail.com", nome: "SulAmérica" },
  default: { email: "coteamilsuccesso@gmail.com", nome: "Plano de Saúde" },
}

const OPERADORA_API_KEYS: Record<string, string> = {
  amil: "re_hdcDn9LX_QJTqSFKPekNQ2MrXpgt7tULr",
  bradesco: "re_5438EYHT_6tcYhMxuvaLvDfowGHpSPhmQ",
  medsenior: "re_5Y5EFFMa_EbR85yCD36yYqPcm6kNpNZkf",
  sulamerica: "re_RbpBf7fy_FqfQ1kr8t7ZhtLJ53rRmKfr9",
}

export async function POST(request: Request) {
  try {
    const data: CotacaoData = await request.json()

    if (!data.nome || !data.email || !data.telefone || !data.ddd) {
      return NextResponse.json({ error: "Dados incompletos" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json({ error: "E-mail inválido" }, { status: 400 })
    }

    if (data.ddd.length < 2 || data.telefone.length < 8) {
      return NextResponse.json({ error: "Telefone inválido" }, { status: 400 })
    }

    const operadoraInfo = OPERADORA_EMAILS[data.operadora] || OPERADORA_EMAILS.default
    const tipoPlanoText = data.tipoPlano === "pessoa_fisica" ? "Pessoa Física / Individual" : "Empresarial (MEI)"

    const resendApiKey = OPERADORA_API_KEYS[data.operadora] || OPERADORA_API_KEYS.amil

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: `Cotação ${operadoraInfo.nome} <onboarding@resend.dev>`,
        to: operadoraInfo.email,
        reply_to: data.email,
        subject: `Nova Cotação - ${data.nome} - ${operadoraInfo.nome}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1a3a5c; border-bottom: 3px solid #0ea5e9; padding-bottom: 10px;">
              Nova Solicitação de Cotação
            </h2>
            
            <div style="background-color: #f0f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #0ea5e9; margin-top: 0;">Dados do Cliente</h3>
              <p><strong>Operadora:</strong> ${operadoraInfo.nome}</p>
              <p><strong>Nome:</strong> ${data.nome}</p>
              <p><strong>Telefone:</strong> (${data.ddd}) ${data.telefone}</p>
              <p><strong>E-mail:</strong> ${data.email}</p>
              <p><strong>Idades dos Beneficiários:</strong> ${data.numeroPessoas}</p>
              <p><strong>Tipo de Plano:</strong> ${tipoPlanoText}</p>
              ${data.cidade ? `<p><strong>Cidade:</strong> ${data.cidade}</p>` : ""}
              ${data.estado ? `<p><strong>Estado:</strong> ${data.estado}</p>` : ""}
              ${data.assunto ? `<p><strong>Assunto:</strong> ${data.assunto}</p>` : ""}
            </div>
            
            ${
              data.mensagem
                ? `
            <div style="background-color: #fff8e1; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #f97316; margin-top: 0;">Mensagem Adicional</h3>
              <p style="white-space: pre-wrap;">${data.mensagem}</p>
            </div>
            `
                : ""
            }
            
            <p style="color: #666; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
              Enviado automaticamente pelo formulário do site em ${new Date().toLocaleString("pt-BR")}
            </p>
          </div>
        `,
      }),
    })

    if (!emailResponse.ok) {
      const errorData = await emailResponse.json()
      return NextResponse.json(
        { error: "Erro ao enviar cotação. Por favor, tente novamente mais tarde." },
        { status: 500 },
      )
    }

    const result = await emailResponse.json()

    return NextResponse.json({ success: true, message: "Cotação enviada com sucesso!" })
  } catch (error) {
    return NextResponse.json({ error: "Erro ao processar sua solicitação. Tente novamente." }, { status: 500 })
  }
}
