import { Link } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold text-slate-800 mb-3">{title}</h2>
      <div className="text-slate-600 leading-relaxed space-y-3">{children}</div>
    </section>
  )
}

export default function Privacidade() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F7F2] text-foreground font-sans">
      <Header />
      <main className="flex-1 w-full pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-700 transition-colors mb-10"
          >
            ← Voltar ao início
          </Link>

          <h1 className="text-4xl font-bold text-slate-900 mb-2" style={{ fontFamily: '"Sora", sans-serif' }}>
            Política de Privacidade
          </h1>
          <p className="text-sm text-slate-400 mb-12">Última atualização: maio de 2025</p>

          <Section title="1. Introdução">
            <p>
              A DLSBox Soluções Digitais ("DLSBox", "nós" ou "nosso") respeita sua privacidade e está comprometida
              com a proteção dos seus dados pessoais. Esta política descreve quais informações coletamos, como as
              utilizamos e quais são seus direitos.
            </p>
          </Section>

          <Section title="2. Dados que coletamos">
            <p>Coletamos apenas os dados que você nos fornece voluntariamente por meio do formulário de contato:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Nome completo</li>
              <li>Endereço de e-mail</li>
              <li>Mensagem enviada</li>
            </ul>
            <p>
              Não coletamos dados de forma automática além dos logs padrão do servidor (endereço IP, tipo de
              navegador, páginas acessadas) para fins de segurança e diagnóstico.
            </p>
          </Section>

          <Section title="3. Como usamos seus dados">
            <p>Utilizamos as informações coletadas exclusivamente para:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Responder à sua mensagem ou solicitação</li>
              <li>Enviar informações sobre nossos serviços, caso solicitado</li>
              <li>Melhorar a experiência de uso do site</li>
            </ul>
          </Section>

          <Section title="4. Compartilhamento com terceiros">
            <p>
              Não vendemos, alugamos nem compartilhamos seus dados pessoais com terceiros para fins comerciais.
              Podemos compartilhar dados apenas quando exigido por lei ou para proteger nossos direitos legais.
            </p>
            <p>
              Utilizamos o serviço Resend para envio de e-mails transacionais. Os dados transmitidos estão sujeitos
              à política de privacidade da Resend (resend.com).
            </p>
          </Section>

          <Section title="5. Cookies">
            <p>
              Este site pode utilizar cookies técnicos essenciais para o funcionamento correto das páginas. Não
              utilizamos cookies de rastreamento ou publicidade. Você pode desativar cookies no seu navegador, mas
              isso pode afetar algumas funcionalidades do site.
            </p>
          </Section>

          <Section title="6. Seus direitos (LGPD)">
            <p>
              Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Confirmar a existência de tratamento dos seus dados</li>
              <li>Acessar seus dados</li>
              <li>Corrigir dados incompletos ou desatualizados</li>
              <li>Solicitar a exclusão dos seus dados</li>
              <li>Revogar o consentimento a qualquer momento</li>
            </ul>
            <p>Para exercer qualquer desses direitos, entre em contato pelo e-mail abaixo.</p>
          </Section>

          <Section title="7. Contato">
            <p>
              Dúvidas sobre esta política? Entre em contato:{' '}
              <a
                href="mailto:contato@dlsbox.com"
                className="text-blue-600 hover:underline"
              >
                contato@dlsbox.com
              </a>
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
