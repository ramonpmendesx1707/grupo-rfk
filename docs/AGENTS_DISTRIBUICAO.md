# Instruções para agentes de IA — RFK

Leia README.md, DEPLOY_MANUAL.md, docs/INSTALACAO_IA.md, package.json e .gitignore. O objetivo é manter o site institucional e seu catálogo, sem alterar identidade ou inventar conteúdo durante uma instalação.

- A distribuição portátil executa React/TypeScript por Vite e gera dist-static. Preserve componentes, estilos, assets, licenças, pnpm-lock.yaml e pnpm-workspace.yaml.
- Não execute next dev/build nem exija Cloudflare Workers: o site portátil não possui backend. Pacotes adicionais do starter permanecem no lockfile para reprodução, mesmo sem uso na página.
- Use pnpm install --frozen-lockfile, pnpm exec tsc --noEmit e pnpm build. Relate bloqueios reais sem alterar versões silenciosamente.
- Nenhuma senha, chave de IA, banco ou API comercial é necessária. Não crie credenciais ou integrações sem pedido.
- O botão WhatsApp abre uma conversa. O contato comercial prepara texto para cópia/e-mail; nunca descreva isso como envio automático ou cadastro recebido.
- Preserve primeira vitrine Refriko, Moema, Furioso; nove marcas ao expandir; cliques em ambas as sequências do carrossel; mídia compacta para Refriko e Moema.
- Teste teclado, Escape, toque, larguras móveis, filtros, seleção, vídeos e mapas conforme o checklist.
- Não atribua autoria do código ou das marcas a pessoas não informadas. Licenças de terceiros permanecem aplicáveis; não invente licença open source para o projeto.
- Não publique, altere DNS nem envie mensagens como efeito colateral de instalação local. A publicação deve atender a uma solicitação do responsável.
- Para subir no GitHub, confirme destino e visibilidade se não informados; preserve histórico existente e não use force push. Exclua ambientes, tokens, cookies, node_modules e dist-static do commit.
