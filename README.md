# DLS Box Solucoes Digitais

Landing page da DLS Box, criada com React, Vite, TypeScript, Tailwind CSS e Supabase.

## 🚀 Stack Tecnológica

- **React 19** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool extremamente rápida
- **TypeScript** - Superset tipado do JavaScript
- **Shadcn UI** - Componentes reutilizáveis e acessíveis
- **Tailwind CSS** - Framework CSS utility-first
- **React Router** - Roteamento para aplicações React
- **React Hook Form** - Gerenciamento de formulários performático
- **Zod** - Validação de schemas TypeScript-first
- **Recharts** - Biblioteca de gráficos para React

## 📋 Pré-requisitos

- Node.js 18+
- pnpm

## 🔧 Instalação

```bash
pnpm install
```

## 💻 Scripts Disponíveis

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
pnpm start
# ou
pnpm run dev
```

Abre a aplicação em modo de desenvolvimento em [http://localhost:5173](http://localhost:5173).

### Build

```bash
# Build para produção
pnpm run build

# Build para desenvolvimento
pnpm run build:dev
```

Gera os arquivos otimizados para produção na pasta `dist/`.

### Preview

```bash
# Visualizar build de produção localmente
pnpm run preview
```

Permite visualizar a build de produção localmente antes do deploy.

### Linting e Formatação

```bash
# Executar linter
pnpm run lint

# Executar linter e corrigir problemas automaticamente
pnpm run lint:fix

# Formatar código com Oxfmt
pnpm run format
```

## 📁 Estrutura do Projeto

```
.
├── src/              # Código fonte da aplicação
├── public/           # Arquivos estáticos
├── dist/             # Build de produção (gerado)
├── node_modules/     # Dependências (gerado)
└── package.json      # Configurações e dependências do projeto
```

## 🎨 Componentes UI

Este template inclui uma biblioteca completa de componentes Shadcn UI baseados em Radix UI:

- Accordion
- Alert Dialog
- Avatar
- Button
- Checkbox
- Dialog
- Dropdown Menu
- Form
- Input
- Label
- Select
- Switch
- Tabs
- Toast
- Tooltip
- E muito mais...

## 📝 Ferramentas de Qualidade de Código

- **TypeScript**: Tipagem estática
- **Oxlint**: Linter extremamente rápido
- **Oxfmt**: Formatação automática de código

## 🔄 Workflow de Desenvolvimento

1. Instale as dependências: `pnpm install`
2. Inicie o servidor de desenvolvimento: `pnpm start`
3. Faça suas alterações
4. Verifique o código: `pnpm run lint`
5. Formate o código: `pnpm run format`
6. Crie a build: `pnpm run build`
7. Visualize a build: `pnpm run preview`

## 📦 Build e Deploy

Para criar uma build otimizada para produção:

```bash
pnpm run build
```

Os arquivos otimizados serão gerados na pasta `dist/` e estarão prontos para deploy.
