# Grupo RFK — site institucional e catálogo interativo

Projeto de apresentação do Grupo RFK com portfólio de bebidas, informações industriais, localização das unidades e caminhos de contato comercial.

[Ver a proposta publicada](https://rfk-nova-experiencia.grupotodos.chatgpt.site)

## Comece por aqui

- [Instalação e checklist para operadores e agentes](docs/INSTALACAO_IA.md)
- [Publicação em outra hospedagem](DEPLOY_MANUAL.md)
- [Estrutura e manutenção](docs/ARQUITETURA.md)
- [Preparar o GitHub](docs/GITHUB.md)
- [Contribuição](CONTRIBUTING.md)
- [Histórico da entrega](IMPLEMENTACAO_AJUSTES.md)
- [Imagens, fontes e créditos](docs/ASSETS.md)
- [Resultados de validação](docs/VALIDACAO.md)

## Recursos

- Abertura com fotografia original da fábrica RFK e animação de entrada.
- Navegação por seções, menu móvel e acesso direto a contato.
- Carrossel contínuo de marcas clicável em todas as passagens, com controle de pausa.
- Catálogo com busca, categorias e expansão de três destaques para nove marcas.
- Destaques iniciais na ordem Refriko, Moema e Furioso.
- Janelas de produto; quatro marcas com conteúdo enriquecido, imagens, formatos e links oficiais.
- Galerias de embalagens; famílias Refriko e seleção de sabores Furioso.
- Filmes Refriko e Moema dentro dos respectivos detalhes; vídeo institucional no site.
- Cinco unidades com endereço, mapa Google e acesso a rotas.
- Linha do tempo animada, conteúdo de inovação, notícias e carreiras.
- Seleção de marcas e preparação de contato em três etapas, com cópia do resumo e abertura de e-mail.
- WhatsApp fixo para +55 41 99975-1171.
- Layout responsivo, foco por teclado, rótulos acessíveis e suporte a movimento reduzido.
- Favicon oficial, imagens e fontes incluídas localmente.

## Instalação rápida da distribuição portátil

Requisitos: Node.js >=22.13.0 e pnpm 11.25.0. Execute na raiz do projeto:

```bash
npm install -g pnpm@11.25.0
pnpm install --frozen-lockfile
pnpm dev
```

Abra a URL exibida no terminal. Nenhuma variável de ambiente ou chave é obrigatória.

```bash
pnpm exec tsc --noEmit
pnpm build
pnpm start
```

A saída de produção fica em **dist-static/**. Envie seu conteúdo para a raiz pública de uma hospedagem estática com HTTPS. O pacote de hospedagem também contém **site-pronto/**, já compilado. Instalar Node não é necessário para servir essa pasta pronta.

## Tecnologia

React 19, TypeScript, Vite 8, Tailwind CSS 4, componentes Radix/shadcn e ícones Lucide. As versões declaradas e o lockfile foram preservados. A origem da proposta usa Vinext/Cloudflare; a distribuição portátil usa entrada React/Vite porque o comportamento do site não depende de endpoints de servidor. Não use comandos Next.js ou exija banco de dados para esta entrega.

O conjunto de componentes do starter está incluído para manutenção; nem todos os pacotes do inventário participam da página atual. `pnpm-lock.yaml` registra versões resolvidas e dependências transitivas. `pnpm-workspace.yaml` mantém a política de instalação.

## Estrutura

| Caminho | Conteúdo |
| --- | --- |
| app/page.tsx | Página e interações principais |
| app/data.ts | Marcas, categorias e unidades |
| app/brand-details.ts | Catálogo detalhado e mídia |
| app/brand-showcase.tsx | Janela de marca |
| app/globals.css | Identidade, responsividade e animações |
| components/ui/ | Componentes da interface |
| hooks/ e lib/utils.ts | Utilitários |
| public/ | Imagens, fontes, favicon e licenças |
| portable/main.tsx | Entrada da versão estática |
| index.html | Metadados e montagem do aplicativo |
| vite.config.ts | Build portátil |
| docs/ | Instalação, manutenção, assets e validação |
| .github/workflows/ci.yml | Verificação TypeScript e build |

## Comportamento dos dados e serviços

O catálogo é editorial: não consulta preço, estoque ou disponibilidade em tempo real. As informações da RFK foram compiladas a partir dos canais e publicações referenciados. Alterações de produtos, unidades e conteúdos são feitas no código.

A seleção de marcas e os campos de contato ficam apenas em memória. O formulário comercial **prepara um rascunho**, não envia dados a um servidor. O visitante decide copiar ou enviar pelo próprio e-mail. O WhatsApp é um link direto, sem bot ou API. Vagas e loja abrem sites externos.

YouTube, Google Maps e destinos externos exigem internet. Não há login, painel administrativo, analytics, checkout, CRM ou backend de formulários. Não é necessária chave de IA, Maps, D1 ou R2.

## Hospedagem e GitHub

GitHub guarda o código; o provedor serve a saída estática. O pacote GitHub não inclui `node_modules`, arquivos de ambiente, credenciais ou a saída compilada. O workflow incluído valida o código, mas não publica automaticamente.

A configuração espera a raiz de um domínio/subdomínio. Para subpastas, adapte o `base` e os caminhos absolutos conforme DEPLOY_MANUAL.md. Utilize HTTPS para permitir recursos do navegador, como copiar texto.

## Aprovação para substituir o site atual

Esta versão mantém a identificação de proposta e `noindex,nofollow`. Antes de substituir o domínio atual, valide os conteúdos e direitos com o responsável RFK; ajuste privacidade, indexação e rodapé; preserve páginas institucionais e redirecionamentos do site anterior. A página Código de ética é um link externo que deve continuar existindo no destino final.

## Créditos e direitos

Marcas, embalagens, fotos e vídeos pertencem aos respectivos titulares. A imagem principal é a original do site RFK; não foi gerada por IA. Fotos de equipe têm origem no portal de carreiras. Créditos fotográficos e fontes são preservados na interface e documentação. Fontes DM Sans e Outfit acompanham seus avisos OFL. As dependências conservam suas licenças.

Não foi definida uma licença open source para o projeto nem atribuído autor pessoal sem informação do responsável. O repositório DAF fornecido pelo solicitante serviu de modelo de organização documental; não foram copiados dados, identidade, credenciais ou funcionalidades específicas do dashboard.

## Inventário de dependências

As versões abaixo são declarações; a resolução exata está no lockfile.

### Aplicação

| Pacote | Versão declarada |
| --- | --- |
| `@base-ui/react` | `^1.7.0` |
| `@hookform/resolvers` | `^5.7.1` |
| `@shadcn/react` | `^0.3.0` |
| `class-variance-authority` | `0.7.1` |
| `clsx` | `2.1.1` |
| `cmdk` | `^1.1.1` |
| `date-fns` | `^4.4.0` |
| `drizzle-orm` | `0.45.2` |
| `embla-carousel-react` | `^8.6.0` |
| `input-otp` | `^1.4.2` |
| `lucide-react` | `^1.31.0` |
| `next` | `16.3.4` |
| `next-themes` | `^0.4.6` |
| `radix-ui` | `^1.6.7` |
| `react` | `19.2.6` |
| `react-day-picker` | `^10.0.1` |
| `react-dom` | `19.2.6` |
| `react-hook-form` | `^7.85.0` |
| `react-resizable-panels` | `^4.12.2` |
| `recharts` | `^3.8.0` |
| `sonner` | `^2.0.8` |
| `tailwind-merge` | `3.6.0` |
| `vaul` | `^1.1.2` |
| `zod` | `^3.25.76` |

### Desenvolvimento

| Pacote | Versão declarada |
| --- | --- |
| `@cloudflare/vite-plugin` | `1.37.1` |
| `@cloudflare/workers-types` | `4.20260515.1` |
| `@tailwindcss/postcss` | `4.2.1` |
| `@types/node` | `22.19.19` |
| `@types/react` | `19.2.14` |
| `@types/react-dom` | `19.2.3` |
| `@vitejs/plugin-react` | `6.0.2` |
| `@vitejs/plugin-rsc` | `0.5.26` |
| `drizzle-kit` | `0.31.10` |
| `eslint` | `9.39.4` |
| `eslint-config-next` | `16.3.4` |
| `react-server-dom-webpack` | `19.2.6` |
| `tailwindcss` | `4.2.1` |
| `tw-animate-css` | `^1.4.0` |
| `typescript` | `5.9.3` |
| `vinext` | `1.0.0-beta.5` |
| `vite` | `8.0.13` |
| `wrangler` | `4.92.0` |

O override miniflare → sharp 0.35.4 foi preservado no conjunto de dependências.
