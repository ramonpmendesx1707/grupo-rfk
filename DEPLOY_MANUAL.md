# Publicação manual — Grupo RFK

## 1. Entenda os dois pacotes

- **RFK_Hospedagem_Completa.zip**: pasta `site-pronto/` com HTML, CSS, JavaScript, imagens e fontes, mais `codigo-fonte/` para manutenção e recompilação.
- **RFK_GitHub_Projeto.zip**: projeto fonte, componentes, configurações, lockfile, documentação e fluxo de integração contínua. A saída compilada não é versionada.

O site é público e não usa login, banco de dados ou segredos. Nenhuma credencial da hospedagem original acompanha a entrega. Os comandos do pacote portátil usam Vite, sem depender de ChatGPT Sites, Vinext ou Cloudflare Workers para executar o frontend.

## 2. Hospedagem comum / cPanel / Apache / Nginx

1. Faça backup do site que será substituído.
2. Crie um subdomínio de homologação para revisar a nova versão.
3. Envie **o conteúdo** de `site-pronto/` para a pasta pública do subdomínio. `index.html` deve ficar diretamente nessa pasta, junto de `assets/`, `images/`, `fonts/` e favicon.
4. Ative HTTPS e abra o endereço por navegador. Não basta abrir index.html por file://.
5. Teste navegação, filtros, galerias, vídeos, mapas e contato.
6. Após aprovação da empresa, publique a mesma versão no domínio definitivo. Preserve o backup para reversão.

A distribuição está configurada para a raiz de um domínio ou subdomínio. Publicação sob `/alguma-pasta/` exige adaptar os caminhos absolutos das imagens, fontes e favicon e a opção `base` do Vite. Prefira um subdomínio dedicado.

Nenhum runtime Node ou PHP é necessário no servidor quando você envia a versão pronta. O navegador precisa executar JavaScript.

## 3. Hospedagem ligada ao GitHub

Use a pasta do pacote GitHub como raiz do repositório. Em um provedor com suporte a sites estáticos, configure:

- Comando de instalação: `pnpm install --frozen-lockfile`
- Comando de build: `pnpm build`
- Diretório publicado: `dist-static`
- Node: versão compatível com `engines` em package.json
- Variáveis obrigatórias: nenhuma

Netlify, Cloudflare Pages e serviços equivalentes podem servir a saída estática; a configuração de conta, domínio, preços e limites pertence ao provedor. GitHub Pages também serve arquivos estáticos, mas repositórios publicados em subpastas precisam da adaptação de caminhos descrita acima. O workflow incluído verifica e compila; ele não faz implantação automática.

## 4. Recompilar após editar

```bash
pnpm install --frozen-lockfile
pnpm exec tsc --noEmit
pnpm build
pnpm start
```

Publique todo o conteúdo de `dist-static/`. Nunca envie node_modules, arquivos de ambiente, caches, configurações de editor ou tokens ao servidor público.

## 5. Serviços externos e contato

- Vídeos: YouTube, carregados ao clicar.
- Localização: Google Maps por endereço; não requer chave de API nesta implementação.
- Atendimento: WhatsApp por link wa.me; não existe chatbot.
- Contato comercial: rascunho copiável e abertura do cliente de e-mail; não envia formulário a servidor.
- Loja e carreiras: links externos, sem sincronização de catálogo, preço, estoque ou vagas.
- Imagens/fontes: consulte `docs/ASSETS.md` para inventário local e eventual material externo.

## 6. Antes da substituição definitiva

A entrega preserva os textos de demonstração e a diretiva `noindex,nofollow` para não indexar a proposta antes da aprovação. Após validação do responsável RFK, ajuste o rodapé, privacidade, contatos, direitos de uso, domínio e indexação em `index.html`; no código de origem hospedado, também em `app/layout.tsx`. O link Código de ética aponta para `/codigo-etica/` no domínio atual: ao substituí-lo, preserve essa página ou atualize o destino. Não apague páginas existentes sem definir redirecionamentos. A versão portátil tem uma página com seções, não replica todas as rotas do WordPress original.

Não foram incluídos analytics, CRM, recebimento de formulários ou painel administrativo. São evoluções que exigem implementação própria. Fotos, logotipos e vídeos permanecem sujeitos aos direitos de seus titulares.
