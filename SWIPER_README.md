# Landing Page Premium - DLSBox

## Stack Profissional Implementada

Seguindo as melhores práticas para landing pages premium, implementamos:

### 🎨 **Bibliotecas Core**
- **Lenis** - Rolagem suave premium
- **GSAP** - Animações profissionais com ScrollTrigger
- **SwiperJS** - Carrosséis modernos
- **Lucide React** - Ícones modernos e consistentes
- **Framer Motion** - Microinterações em React
- **Tailwind CSS** - Estilização rápida e responsiva

### 🧭 **Header Premium Implementado**

#### **Funcionalidades**
- ✅ Logo SVG refinado (DLSBoxLogo 3D)
- ✅ Menu compacto com navegação suave
- ✅ CTA destacado com Framer Motion
- ✅ Efeito blur ao rolar (backdrop-blur-xl)
- ✅ Estado ativo nas seções (detecção automática)
- ✅ Animação suave no hover (scale, translate)
- ✅ Mobile com hamburger elegante
- ✅ Menu fullscreen com transição spring
- ✅ Header reduz altura ao rolar (20→14 no mobile)
- ✅ Sombra sutil ao rolar
- ✅ Logo compacto ao rolar

#### **Navegação**
```
DLSBOX          Sobre  Serviços  Áreas  Portfólio  Tecnologias  Processo  Contato        Falar com especialista
```

#### **Seções Mapeadas**
- `#sobre` → Intro (Sobre nós)
- `#servicos` → Services (Serviços)
- `#areas` → Areas (Áreas)
- `#projetos` → Products (Portfólio)
- `#tecnologias` → TechCarousel (Tecnologias)
- `#processo` → Process (Processo)
- `#contato` → Contact (Contato)

#### **Animações Framer Motion**
- Header slide down na entrada
- Logo hover scale
- Links hover lift (-1px)
- CTA button scale + glow
- Mobile menu spring animation
- Active tab indicator com layoutId

#### **Estados Visuais**
- **Inicial**: Altura 20 (80px), blur suave
- **Scrolled**: Altura 14 (56px), blur intenso, sombra
- **Active Section**: Destaque azul com fundo

---

## Componentes Implementados

### 🎠 **TechCarousel**
Carrossel infinito de tecnologias usando SwiperJS.

```tsx
import { TechCarousel } from '@/components/TechCarousel'
```

### 🛠️ **Solutions**
Cards de soluções com Lucide React e animações GSAP.

```tsx
import { Solutions } from '@/components/Solutions'
```

### ⚙️ **Process**
Seção de processo com 5 etapas e conectores visuais.

```tsx
import { Process } from '@/components/Process'
```

### 🎯 **FinalCTA**
Call-to-action com Framer Motion para interações premium.

```tsx
import { FinalCTA } from '@/components/FinalCTA'
```

---

## Hooks Personalizados

### 🌊 **useLenis**
Rolagem suave global da página.

```tsx
import { useLenis } from '@/hooks/useLenis'

function App() {
  useLenis()
  return <div>...</div>
}
```

### 🎬 **useGsapAnimations**
Animações GSAP automatizadas.

```tsx
import { useGsapAnimations } from '@/hooks/useGsapAnimations'

function Component() {
  useGsapAnimations()
  return <div>...</div>
}
```

---

## Classes GSAP para Animações

### 📝 **gsap-title**
Animação de entrada para títulos.

```tsx
<h1 className="gsap-title">Título animado</h1>
```

### 👁️ **gsap-reveal**
Elementos que aparecem na rolagem.

```tsx
<div className="gsap-reveal">Conteúdo que aparece</div>
```

### 🌊 **gsap-float**
Animação de flutuação suave.

```tsx
<div className="gsap-float">Elemento flutuante</div>
```

### 🎭 **gsap-entrance**
Animação de entrada para seções.

```tsx
<section className="gsap-entrance">Seção completa</section>
```

---

## Como Usar Cada Biblioteca

### 1. Lenis (Rolagem Suave)
```tsx
// Já implementado globalmente no App.tsx
// Rolagem suave automática em toda a página
```

### 2. GSAP + ScrollTrigger
```tsx
// Já implementado via hook useGsapAnimations
// Adicione classes CSS para animações automáticas
```

### 3. SwiperJS em React
```tsx
import { Swiper, SwiperSlide } from '@/components/ui/swiper'

<Swiper navigation={true} pagination={true}>
  <SwiperSlide>Slide 1</SwiperSlide>
  <SwiperSlide>Slide 2</SwiperSlide>
</Swiper>
```

### 4. Lucide React
```tsx
import { Code2, Database, Rocket } from 'lucide-react'

<Code2 className="h-8 w-8 text-blue-600" />
```

### 5. Framer Motion
```tsx
import { motion } from 'framer-motion'

<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Botão animado
</motion.div>
```

---

## Estrutura de Arquivos

```
src/
├── hooks/
│   ├── useLenis.ts              # Rolagem suave
│   └── useGsapAnimations.ts     # Animações GSAP
├── components/
│   ├── ui/
│   │   └── swiper.tsx           # Componente Swiper
│   ├── Header.tsx               # Header premium
│   ├── TechCarousel.tsx         # Carrossel de tecnologias
│   ├── Solutions.tsx            # Cards de soluções
│   ├── Process.tsx              # Seção de processo
│   └── FinalCTA.tsx             # Call-to-action
└── pages/
    └── Index.tsx                # Página principal
```

---

## Performance

### ✅ **Otimizações Implementadas**
- Import dinâmico do Swiper (SSR-safe)
- Lazy loading de animações
- ScrollTrigger otimizado
- Lenis para rolagem suave
- Framer Motion com hardware acceleration

### 🎯 **Métricas Alvo**
- **Lighthouse**: 95+ em todas as categorias
- **Core Web Vitals**: Verde em todos
- **Loading**: < 2s no mobile

---

## Desenvolvimento

### 🏃 **Rodar Projeto**
```bash
npm run dev
```

### 📦 **Build**
```bash
npm run build
```

### 🎨 **Design System**
- **Cores**: Azul (#2563eb) como primária
- **Tipografia**: System fonts otimizadas
- **Espaçamento**: Baseado em 4px (0.25rem)
- **Border radius**: 0.75rem (12px) padrão

---

## Suporte

Para dúvidas sobre implementação:
- **Lenis**: [lenis.studio](https://lenis.studio)
- **GSAP**: [greensock.com](https://greensock.com)
- **SwiperJS**: [swiperjs.com](https://swiperjs.com)
- **Framer Motion**: [framer.com/motion](https://framer.com/motion)
- **Lucide**: [lucide.dev](https://lucide.dev)

## Componentes Implementados

### 🎠 **TechCarousel**
Carrossel infinito de tecnologias usando SwiperJS.

```tsx
import { TechCarousel } from '@/components/TechCarousel'
```

### 🛠️ **Solutions**
Cards de soluções com ícones Lucide React e animações GSAP.

```tsx
import { Solutions } from '@/components/Solutions'
```

### 🎯 **FinalCTA**
Call-to-action com Framer Motion para interações premium.

```tsx
import { FinalCTA } from '@/components/FinalCTA'
```

---

## Hooks Personalizados

### 🌊 **useLenis**
Rolagem suave global da página.

```tsx
import { useLenis } from '@/hooks/useLenis'

function App() {
  useLenis()
  return <div>...</div>
}
```

### 🎬 **useGsapAnimations**
Animações GSAP automatizadas.

```tsx
import { useGsapAnimations } from '@/hooks/useGsapAnimations'

function Component() {
  useGsapAnimations()
  return <div>...</div>
}
```

---

## Classes GSAP para Animações

### 📝 **gsap-title**
Animação de entrada para títulos.

```tsx
<h1 className="gsap-title">Título animado</h1>
```

### 👁️ **gsap-reveal**
Elementos que aparecem na rolagem.

```tsx
<div className="gsap-reveal">Conteúdo que aparece</div>
```

### 🌊 **gsap-float**
Animação de flutuação suave.

```tsx
<div className="gsap-float">Elemento flutuante</div>
```

### 🎭 **gsap-entrance**
Animação de entrada para seções.

```tsx
<section className="gsap-entrance">Seção completa</section>
```

---

## Como Usar Cada Biblioteca

### 1. Lenis (Rolagem Suave)
```tsx
// Já implementado globalmente no App.tsx
// Rolagem suave automática em toda a página
```

### 2. GSAP + ScrollTrigger
```tsx
// Já implementado via hook useGsapAnimations
// Adicione classes CSS para animações automáticas
```

### 3. SwiperJS em React
```tsx
import { Swiper, SwiperSlide } from '@/components/ui/swiper'

<Swiper navigation={true} pagination={true}>
  <SwiperSlide>Slide 1</SwiperSlide>
  <SwiperSlide>Slide 2</SwiperSlide>
</Swiper>
```

### 4. Lucide React
```tsx
import { Code2, Database, Rocket } from 'lucide-react'

<Code2 className="h-8 w-8 text-blue-600" />
```

### 5. Framer Motion
```tsx
import { motion } from 'framer-motion'

<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Botão animado
</motion.div>
```

---

## Estrutura de Arquivos

```
src/
├── hooks/
│   ├── useLenis.ts              # Rolagem suave
│   └── useGsapAnimations.ts     # Animações GSAP
├── components/
│   ├── ui/
│   │   └── swiper.tsx           # Componente Swiper
│   ├── TechCarousel.tsx         # Carrossel de tecnologias
│   ├── Solutions.tsx            # Cards de soluções
│   └── FinalCTA.tsx             # Call-to-action
└── pages/
    └── Index.tsx                # Página principal
```

---

## Próximos Passos

### 🎯 **Funcionalidades a Implementar**
- [ ] Formulário de contato com validação
- [ ] Integração com Supabase para leads
- [ ] Animações de parallax
- [ ] Lottie para animações complexas
- [ ] Three.js para elementos 3D (futuramente)

### 🚀 **Deploy**
- [ ] Configurar Vercel/Netlify
- [ ] Otimizar Core Web Vitals
- [ ] Implementar analytics

### 📱 **Mobile**
- [ ] Testar responsividade
- [ ] Otimizar performance mobile
- [ ] Progressive Web App

---

## Performance

### ✅ **Otimizações Implementadas**
- Import dinâmico do Swiper (SSR-safe)
- Lazy loading de animações
- ScrollTrigger otimizado
- Lenis para rolagem suave

### 🎯 **Métricas Alvo**
- **Lighthouse**: 95+ em todas as categorias
- **Core Web Vitals**: Verde em todos
- **Loading**: < 2s no mobile

---

## Desenvolvimento

### 🏃 **Rodar Projeto**
```bash
npm run dev
```

### 📦 **Build**
```bash
npm run build
```

### 🎨 **Design System**
- **Cores**: Azul (#2563eb) como primária
- **Tipografia**: System fonts otimizadas
- **Espaçamento**: Baseado em 4px (0.25rem)
- **Border radius**: 0.75rem (12px) padrão

---

## Suporte

Para dúvidas sobre implementação:
- **Lenis**: [lenis.studio](https://lenis.studio)
- **GSAP**: [greensock.com](https://greensock.com)
- **SwiperJS**: [swiperjs.com](https://swiperjs.com)
- **Framer Motion**: [framer.com/motion](https://framer.com/motion)
- **Lucide**: [lucide.dev](https://lucide.dev)