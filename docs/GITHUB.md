# Preparar o repositório RFK

1. Extraia RFK_GitHub_Projeto.zip e abra a pasta Grupo_RFK.
2. Preserve README.md, AGENTS.md, CONTRIBUTING.md, DEPLOY_MANUAL.md, docs, fontes, imagens, componentes, arquivos de configuração e lockfile.
3. Instale e compile conforme o README. Não suba node_modules, dist-static ou arquivos de ambiente.
4. Crie um repositório na conta escolhida. Nome sugerido: `grupo-rfk-site`. Defina a visibilidade conforme a decisão do responsável.
5. Envie o código pelo cliente Git de preferência. Se o repositório já existir, use uma branch e preserve o histórico.

Descrição sugerida: Site institucional do Grupo RFK com catálogo interativo, galerias, vídeos, unidades no mapa e jornada comercial. React, TypeScript e Vite.

Tópicos: `react`, `typescript`, `vite`, `responsive-design`, `institutional-website`.

O arquivo `.github/workflows/ci.yml` instala as dependências, valida TypeScript e compila em pushes e pull requests. Ele não publica o site nem precisa de segredos. Para implantar, conecte o repositório ao provedor e configure saída dist-static.

## Prompt para outra IA

```text
Prepare este projeto RFK para meu GitHub. Leia README.md, AGENTS.md,
DEPLOY_MANUAL.md, docs/INSTALACAO_IA.md, package.json e .gitignore.
Preserve visual, mídia original, nove marcas e funcionalidades existentes.
Não atualize dependências, redesenhe nem crie integrações por iniciativa própria.
Confirme conta, nome e visibilidade se ainda não informados. Use apenas acesso
GitHub autorizado. Nunca coloque tokens em URLs, arquivos ou documentação.
Instale pelo lockfile, valide TypeScript e build. Relate o que foi efetivamente
executado e qualquer bloqueio. Revise arquivos antes do commit; exclua credenciais,
node_modules, dist-static e caches. Preserve histórico remoto e não faça force push.
Entregue URL do repositório, branch, commit e resultados. Publicar o código não
significa migrar a hospedagem ou alterar DNS; faça isso apenas quando solicitado.
```
