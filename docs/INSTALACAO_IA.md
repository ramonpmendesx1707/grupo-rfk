# Instalação reproduzível — Grupo RFK

Este roteiro pertence à distribuição portátil do site institucional RFK. Preserve identidade, conteúdo e comportamento; instalar não implica redesenhar nem atualizar dependências.

## Ambiente e instalação

Requisitos declarados: Node.js >=22.13.0 e pnpm 11.25.0. Git é necessário apenas para versionamento. A distribuição foi compilada com Node 24.19.0 e pnpm 11.19.0, preservando o lockfile. Não existe senha padrão, banco de dados, chave de API ou integração com CRM a configurar.

```bash
npm install -g pnpm@11.25.0
pnpm install --frozen-lockfile
pnpm dev
```

Execute na raiz que contém package.json. Abra o endereço informado no terminal. Em Windows, macOS ou Linux, os comandos são os mesmos. Não desative certificados nem altere o lockfile para esconder erros de instalação.

## Compilação

```bash
pnpm exec tsc --noEmit
pnpm build
pnpm start
```

`pnpm build` gera `dist-static/`. `pnpm start` apenas serve uma prévia local dessa pasta. Para produção, publique seus arquivos em uma hospedagem estática com HTTPS; não mantenha o servidor de desenvolvimento exposto.

A distribuição portátil usa React + Vite diretamente, aproveitando os mesmos componentes do site publicado. O ambiente de origem usa Vinext/Cloudflare; ele não é necessário para a distribuição estática. Não substitua os comandos por `next build`.

## Verificação funcional

- Conferir favicon RFK e fotografia original da fábrica.
- Confirmar primeira vitrine: Refriko, Moema, Furioso; expandir para nove marcas.
- Buscar marca, mudar categoria e verificar estado sem resultados.
- Clicar em logos de ambas as metades do carrossel, inclusive após sua primeira passagem. Pausar e retomar.
- Abrir Refriko e Moema; conferir filme, imagem e opções de embalagem/sabor. Fechar interrompe o player.
- Alterar sabores do Furioso; conferir que fotos e embalagens mudam juntas.
- Selecionar marcas; abrir jornada comercial; preencher segmento, cidade e UF; verificar resumo. Copiar não envia. E-mail só envia após confirmação no aplicativo do visitante.
- Conferir destino WhatsApp: https://wa.me/5541999751171. Não enviar mensagem de teste automaticamente.
- Alternar as cinco unidades; verificar endereço no mapa e link de rota.
- Abrir menu móvel, tocar em seção e confirmar fechamento. Testar modal, galeria e botões em 390 px e 320 px, além de desktop.
- Verificar navegação por teclado, fechamento por Escape, foco visível e preferência de movimento reduzido.

YouTube, Google Maps, WhatsApp, loja, vagas e links externos precisam de internet e continuam sujeitos à disponibilidade dos serviços.

## Diagnóstico

| Sintoma | Ação |
| --- | --- |
| Tela vazia ao abrir index.html pelo explorador | Use HTTP/HTTPS; não abra via file://. |
| Arquivos 404 após publicar | Envie todo o conteúdo de dist-static à raiz do domínio/subdomínio, incluindo assets, images e fonts. |
| Favicon antigo | Atualize o cache do navegador e confirme favicon-rfk.png na raiz. |
| YouTube/Maps não carregam | Verifique conexão, bloqueadores e restrições dos serviços externos. |
| Falha com lockfile congelado | Confirme pnpm, raiz e acesso ao registro; registre o erro sem regenerar dependências silenciosamente. |
| Alterações não aparecem | Compile novamente e publique toda a nova saída; invalide o cache do provedor. |
| Não chegou pedido comercial | O fluxo prepara um texto e abre e-mail; não há API de envio automático. |

Relate instalação, TypeScript, build e testes visuais separadamente. Não apresente verificações anteriores como testes da instalação atual.
