import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, scope } = req.body ?? {}

  if (!email || !scope) {
    return res.status(400).json({ error: 'Missing required fields: email and scope' })
  }

  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeScope = escapeHtml(scope).replace(/\n/g, '<br>')

  const { error } = await resend.emails.send({
    from: 'DLSBox <contact@dlsbox.com>',
    to: ['contact@dlsbox.com'],
    replyTo: String(email),
    subject: 'Novo contato pelo site DLSBox',
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;color:#0f172a">
        <h2 style="margin:0 0 24px;font-size:22px;font-weight:700">Novo contato pelo site DLSBox</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr>
            <td style="padding:12px 0;border-bottom:1px solid #e2e8f0;font-weight:600;width:120px">Nome</td>
            <td style="padding:12px 0;border-bottom:1px solid #e2e8f0">${safeName || '—'}</td>
          </tr>
          <tr>
            <td style="padding:12px 0;border-bottom:1px solid #e2e8f0;font-weight:600">E-mail</td>
            <td style="padding:12px 0;border-bottom:1px solid #e2e8f0">${safeEmail}</td>
          </tr>
          <tr>
            <td style="padding:12px 16px 0 0;font-weight:600;vertical-align:top">Necessidade</td>
            <td style="padding:12px 0 0;line-height:1.6">${safeScope}</td>
          </tr>
        </table>
        <p style="margin:32px 0 0;font-size:12px;color:#94a3b8">
          Mensagem recebida via formulário em dlsbox.com
        </p>
      </div>
    `,
  })

  if (error) {
    console.error('[api/contact] Resend error:', error)
    return res.status(500).json({ error: 'Failed to send email' })
  }

  return res.status(200).json({ ok: true })
}
