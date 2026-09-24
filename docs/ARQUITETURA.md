# Estrutura e manutenção

O site possui uma página institucional com seções e janelas de detalhes, todas compartilhando o mesmo estado React. Não há API, autenticação, armazenamento persistente ou CMS.

| Arquivo | Responsabilidade |
| --- | --- |
| app/page.tsx | Página, menu, catálogo, carrossel, unidades, contato, filmes e rodapé |
| app/data.ts | Nove marcas, categorias, cinco unidades e referências |
| app/brand-details.ts | Apresentações, sabores, galeria e vídeos confirmados de quatro marcas |
| app/brand-showcase.tsx | Janela padronizada de produto e seleção de mídia |
| app/globals.css | Tema RFK, layout, estados, responsividade e animações |
| components/ui | Componentes de diálogo, abas, seleção e biblioteca visual |
| lib/utils.ts | Composição de classes |
| public/images | Fotografias e imagens incluídas |
| public/fonts | Fontes locais e CSS |
| public/favicon-rfk.png | Ícone oficial da aba |
| portable/main.tsx | Entrada React da distribuição independente |
| index.html | Metadados da distribuição estática |
| vite.config.ts | Configuração Vite do pacote GitHub |
| package.json / pnpm-lock.yaml | Scripts, dependências e versões reproduzíveis |

## Onde editar

- Telefone WhatsApp: link `wa.me` em app/page.tsx.
- E-mail e contato: app/page.tsx; alterar tanto rodapé quanto mailto do resumo.
- Unidades: array units em app/data.ts; o mapa usa o endereço selecionado.
- Marca: objeto em app/data.ts; detalhes ricos em app/brand-details.ts.
- Vídeos: IDs em brand-details.ts; filme institucional em page.tsx.
- Destaques iniciais: array Refriko/Moema/Furioso na seleção visible em page.tsx.
- Política/rodapé: textos e diálogo de privacidade em page.tsx.
- SEO da distribuição: index.html. A proposta começa com noindex.

## Estado e acessibilidade

Filtros, favoritos comerciais e campos são mantidos apenas em memória. Recarregar reinicia a experiência. Diálogos usam componentes Radix, com foco controlado e Escape; abas expõem seleção; botões têm rótulos; efeitos respeitam movimento reduzido. O carrossel oferece pausa e a cópia visual permanece clicável sem duplicar a sequência de Tab.

## Diferença em relação à origem

O ambiente publicado usa Vinext para servir a página. O pacote portátil utiliza os mesmos componentes dentro de React/Vite e não inclui a camada de hospedagem ou autenticação da plataforma. Como a experiência não usa endpoints de servidor, seus filtros, modais, seleção e links funcionam na saída estática. As dependências declaradas foram preservadas para não alterar a resolução original.
