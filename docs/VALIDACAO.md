# Verificações da entrega

Data: 24/09/2026. Ambiente: Node 24.19.0, pnpm 11.19.0; a declaração do projeto permanece pnpm 11.25.0.

- Checagem TypeScript concluída sem erros no projeto de origem.
- Build portátil React/Vite concluído; HTML, JavaScript, CSS e public copiados para dist-static.
- Clique testado em botão da segunda sequência do carrossel: abriu Refriko corretamente.
- Ordem inicial Refriko, Moema, Furioso confirmada no navegador.
- Vídeo Refriko carregou o player “Manifesto da Marca”, com duração informada de 1 minuto.
- Composição compacta vídeo + galeria inspecionada no desktop e em iframe de 390 × 844 px; Moema exibiu ambos juntos na área inicial do modal.
- Favicon baixado do endereço declarado pelo HTML do site oficial, arquivo PNG de 36 × 36 pixels.
- 56 imagens oficiais incorporadas localmente; fonte de notícia que recusou transferência substituída por foto oficial de produto. Fontes e licenças incluídas.

Testes de navegador foram feitos em Chrome remoto; Safari e dispositivos físicos não foram testados. Não se afirma conformidade formal WCAG, pontuação Lighthouse, melhora mensurada de conversão ou garantia de disponibilidade dos serviços externos. A instalação limpa em outro computador e o domínio final devem seguir o checklist antes da substituição do site atual.

A saída portátil foi recompilada após incorporar os assets locais. Os caminhos de imagens/fontes foram conferidos contra os arquivos incluídos. A pasta de exportação passa por TypeScript e build próprios antes da compactação.

Resultado final da exportação: pnpm typecheck e pnpm build aprovados. Foram reutilizadas as dependências instaladas no ambiente de origem; uma instalação limpa pelo registro npm não foi executada nesta validação. Conferência automática: zero caminhos locais de imagens/fontes ausentes; 58 imagens e 8 arquivos tipográficos.
