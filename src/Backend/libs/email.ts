import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function enviarEmailBoasVindas(nome: string, email: string, senhaTemp: string): Promise<void> {
    const firstName = nome.trim().split(" ")[0] ?? nome.trim()

    await resend.emails.send({
        from: "Maya Yamamoto <onboarding@resend.dev>",
        to: email,
        subject: "Bem-vindo(a) ao Sistema Maya Yamamoto — Suas credenciais de acesso",
        text:
            `Olá, ${firstName}!\n\n` +
            `Você foi cadastrado(a) no Sistema Maya Yamamoto de Fisioterapia RPG.\n\n` +
            `Suas credenciais de acesso ao aplicativo são:\n\n` +
            `  E-mail: ${email}\n` +
            `  Senha temporária: ${senhaTemp}\n\n` +
            `Ao fazer seu primeiro acesso, você será solicitado(a) a completar seu cadastro e alterar sua senha.\n\n` +
            `Em caso de dúvidas, entre em contato com a sua fisioterapeuta.\n\n` +
            `Atenciosamente,\nEquipe Maya Yamamoto`,
    })
}