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

export default function TermosDeUso() {
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
            Termos de Uso
          </h1>
          <p className="text-sm text-slate-400 mb-12">Última atualização: maio de 2025</p>

          <Section title="1. Aceitação dos termos">
            <p>
              Ao acessar e utilizar o site da DLSBox Soluções Digitais ("DLSBox", "nós" ou "nosso"), você concorda
              com estes Termos de Uso. Se não concordar com alguma parte destes termos, por favor, não utilize o
              site.
            </p>
          </Section>

          <Section title="2. Descrição dos serviços">
            <p>
              A DLSBox oferece serviços de desenvolvimento de software, incluindo aplicações web, SaaS, APIs e
              plataformas digitais. Os serviços prestados são definidos individualmente em contratos ou propostas
              comerciais firmadas com cada cliente.
            </p>
            <p>
              O conteúdo deste site é fornecido para fins informativos e não constitui uma oferta formal de serviços.
            </p>
          </Section>

          <Section title="3. Uso do site">
            <p>Ao utilizar este site, você concorda em:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Fornecer informações verdadeiras no formulário de contato</li>
              <li>Não utilizar o site para fins ilegais ou não autorizados</li>
              <li>Não tentar interferir no funcionamento do site ou de seus servidores</li>
              <li>Não reproduzir, distribuir ou modificar o conteúdo sem autorização prévia</li>
            </ul>
          </Section>

          <Section title="4. Propriedade intelectual">
            <p>
              Todo o conteúdo deste site — incluindo textos, imagens, logotipos, código-fonte e design — é de
              propriedade exclusiva da DLSBox ou de seus licenciantes e está protegido pelas leis de direitos
              autorais aplicáveis.
            </p>
            <p>
              É vedada a reprodução, cópia ou uso comercial de qualquer material sem autorização expressa e por
              escrito da DLSBox.
            </p>
          </Section>

          <Section title="5. Limitação de responsabilidade">
            <p>
              A DLSBox não se responsabiliza por quaisquer danos diretos, indiretos, incidentais ou consequenciais
              decorrentes do uso ou da impossibilidade de uso deste site.
            </p>
            <p>
              As informações contidas neste site são fornecidas "como estão", sem garantias de qualquer tipo,
              expressas ou implícitas, incluindo, sem limitação, garantias de adequação a um propósito específico.
            </p>
          </Section>

          <Section title="6. Links externos">
            <p>
              Este site pode conter links para sites de terceiros. A DLSBox não tem controle sobre o conteúdo
              desses sites e não se responsabiliza por suas práticas de privacidade ou conteúdo.
            </p>
          </Section>

          <Section title="7. Alterações nos termos">
            <p>
              Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. Alterações entram em
              vigor imediatamente após a publicação nesta página. O uso continuado do site após qualquer alteração
              constitui aceitação dos novos termos.
            </p>
          </Section>

          <Section title="8. Lei aplicável">
            <p>
              Estes termos são regidos pelas leis brasileiras. Fica eleito o foro da comarca de domicílio da DLSBox
              para dirimir quaisquer controvérsias decorrentes deste instrumento.
            </p>
          </Section>

          <Section title="9. Contato">
            <p>
              Dúvidas sobre estes termos? Entre em contato:{' '}
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
