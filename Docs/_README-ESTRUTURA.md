# Arquitetura de Sincronização de Páginas Secundárias

Este diretório contém a documentação e os recursos para manter a consistência visual e funcional entre a página principal (`index.html`) e as páginas secundárias (como `politica-de-privacidade.html` e `termos-e-condicoes.html`).

## Template Canônico
O arquivo [_nav-footer-template.html](_nav-footer-template.html) contém a estrutura canônica para:
1. **Cabeçalho/Navegação (`<nav>`)**: Padrão unificado de links, logotipo e botão de hambúrguer para mobile.
2. **Menu Gaveta (`<aside class="drawer">`)**: Drawer mobile responsivo para navegação.
3. **Rodapé (`<footer>`)**: Grid de 4 colunas com marca, navegação, informações legais, contatos e link para o gerenciador de Cookies.
4. **Widget de WhatsApp**: Widget flutuante com balão de mensagem e efeito de digitação.
5. **Lightbox de Vídeo**: Modal de exibição de vídeos sem sair da página atual.
6. **Banner & Modal de Cookies (LGPD)**: Estrutura em conformidade com a LGPD integrada ao rodapé.

## Regras de Profundidade (`{{BASE}}`)
Ao adicionar o template canônico em uma nova página secundária, substitua o placeholder `{{BASE}}` com o caminho relativo correto baseado na profundidade da pasta:

- **Página na raiz** (ex: `termos-e-condicoes.html`, `politica-de-privacidade.html`):
  Substitua `{{BASE}}` por `""` (vazio).
  *Exemplo:* `href="index.html"`, `src="assets/logo..."`

- **Página em subpasta** (ex: `blog/artigo-1.html`, `servicos/previdenciario.html`):
  Substitua `{{BASE}}` por `../`
  *Exemplo:* `href="../index.html"`, `src="../assets/logo..."`

---

## Checklist de Qualidade Pré-Entrega

Antes de finalizar qualquer alteração em páginas secundárias, realize as seguintes verificações:

- [ ] **Links**: Todos os `href` apontam para caminhos válidos e relativos à pasta atual. Ao clicar em links da nav/footer em páginas secundárias, o usuário deve ser redirecionado para a seção correta da página principal (ex: `index.html#areas`).
- [ ] **Assets e Mídia**: Imagens, logotipos, fontes e scripts carregam sem erros 404.
- [ ] **Menu Mobile**: O botão hambúrguer abre e fecha corretamente o drawer de navegação e todos os links funcionam.
- [ ] **LGPD / Cookies**: O banner de consentimento é exibido na primeira visita, o modal de personalização abre/salva corretamente e o link "Cookie" no rodapé abre as preferências.
- [ ] **WhatsApp Widget**: O widget flutuante e o balão de mensagem estão posicionados corretamente e o clique redireciona para o WhatsApp oficial com o texto de contato.
- [ ] **Design Responsivo**: A página e seus componentes se adaptam sem quebras em dispositivos mobile, tablets e desktops.
