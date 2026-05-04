# Otton Crystais - Boutique de Luxo Digital

Este projeto é uma plataforma de e-commerce de alto padrão desenvolvida para a **Otton Crystais**, focada em proporcionar uma experiência de usuário editorial, minimalista e sofisticada. A aplicação utiliza tecnologias modernas para garantir performance excepcional e uma interface "Dark Luxury" refinada.

## 💎 Sobre o Projeto

A Otton Crystais é uma boutique digital que combina a elegância clássica com a modernidade tecnológica. O site foi projetado para destacar a exclusividade dos produtos, utilizando uma estética de "Dark Mode" com tipografia premium e animações suaves.

### Principais Funcionalidades

- **Catálogo Editorial:** Exibição de produtos com foco em imagens de alta qualidade e layout limpo.
- **Navegação Inteligente:** Sistema de rotas otimizado com TanStack Router.
- **Experiência Multilíngue:** Suporte para múltiplos idiomas (Português, Inglês, Espanhol e Francês).
- **Design Responsivo:** Interface adaptada para todos os dispositivos, mantendo o padrão de luxo.
- **Fluxo de Conversão:** Integração direta com canais de atendimento (WhatsApp) para consultoria personalizada.

## 🚀 Tecnologias Utilizadas

O projeto foi construído com o que há de mais moderno no ecossistema web:

- **[React 19](https://react.dev/):** Biblioteca principal para a interface.
- **[TanStack Start/Router](https://tanstack.com/router/latest):** Framework Full-stack e gerenciamento de rotas tipadas.
- **[Tailwind CSS v4](https://tailwindcss.com/):** Estilização utilitária de alta performance.
- **[TypeScript](https://www.typescriptlang.org/):** Garantia de segurança e tipagem em todo o código.
- **[Radix UI](https://www.radix-ui.com/):** Componentes acessíveis e não estilizados como base da UI.
- **[Vite](https://vitejs.dev/):** Ferramenta de build extremamente rápida.
- **[Lucide React](https://lucide.dev/):** Conjunto de ícones minimalistas e elegantes.

## 🛠️ Instalação e Execução

Para configurar o ambiente de desenvolvimento e rodar o projeto localmente, siga os passos detalhados abaixo:

### Pré-requisitos

- **Node.js:** Versão 18 ou superior recomendada.
- **Gerenciador de pacotes:** NPM (incluído no Node.js) ou Bun.

### Passos para Configuração

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/DanniellMendss/ottoncrystais.git
   ```

2. **Acesse o diretório do projeto:**

   ```bash
   cd ottoncrystais
   ```

3. **Instale as dependências:**
   Utilize o gerenciador de sua preferência (o projeto possui `package-lock.json` e `bun.lockb`):

   ```bash
   npm install
   # ou
   bun install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   # ou
   bun run dev
   ```

O site estará disponível em `http://localhost:3000` (ou na porta especificada no terminal).

### 🏗️ Build e Produção

Para gerar a versão otimizada de produção e visualizar o resultado final:

1. **Gerar o Build:**

   ```bash
   npm run build
   ```

2. **Visualizar o Preview:**
   ```bash
   npm run preview
   ```

### ☁️ Deploy (Cloudflare)

Este projeto está configurado para deploy via **Cloudflare Pages**. Para realizar o deploy manual ou via CLI:

```bash
npx wrangler pages deploy .output
```

## 📁 Estrutura de Pastas

```text
src/
├── assets/          # Imagens, fontes e recursos estáticos
├── components/      # Componentes React reutilizáveis (UI e Layout)
├── hooks/           # Hooks customizados para lógica de estado
├── lib/             # Configurações de bibliotecas externas (ex: Utils)
├── routes/          # Definição das páginas e rotas do sistema
└── styles.css       # Estilização global e tokens do Tailwind
```

## 🎨 Design System

O projeto segue um guia de estilo rigoroso:

- **Cores:** Tons de preto, carvão e branco pérola para contraste.
- **Tipografia:** Uso de fontes serifadas para títulos (editorial) e sans-serif para leitura.
- **Animações:** Transições sutis e micro-interações para uma sensação premium.

---

Desenvolvido com ❤️ para a **Otton Crystais**.
