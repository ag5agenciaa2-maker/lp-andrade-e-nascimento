# Auditoria SEO & GEO — Andrade & Nascimento Sociedade de Advogados

**Data:** 19 de julho de 2026
**Escopo:** index.html, politica-de-privacidade.html, termos-e-condicoes.html, style.css, script.js, cookie-banner.css/js

---

## 1. O que foi encontrado e corrigido

### 1.1 Meta tags, Open Graph, Twitter Cards (`index.html`, `politica-de-privacidade.html`, `termos-e-condicoes.html`)
- **Antes:** nenhuma das três páginas tinha `<link rel="canonical">`, Open Graph (`og:*`) ou Twitter Card. Zero controle sobre como o site aparece ao ser compartilhado ou indexado.
- **Depois:** adicionadas em todas as páginas: `canonical`, `meta robots`, `og:type/site_name/title/description/url/image/locale` e `twitter:card/title/description/image`.
- Imagem de compartilhamento (`og:image`) definida como `hero-advocacia-premium.png` na home.

### 1.2 Geo tags (`index.html`)
- Adicionadas `geo.region` (BR-RJ), `geo.placename` (Paciência, Rio de Janeiro) e `geo.position`/`ICBM` com as coordenadas reais do escritório (-22.920041, -43.633102), extraídas do dossiê da empresa (dado do Google Business Profile).

### 1.3 Schema JSON-LD (`index.html`)
- **Antes:** nenhum dado estruturado no site.
- **Depois:** implementado `@type: Attorney` (LegalService) com: nome, endereço (PostalAddress), geo, telefone, horário de funcionamento, área de atuação, redes sociais (`sameAs`), as duas advogadas com seus registros OAB (`employee`), catálogo de serviços (`hasOfferCatalog`) e `aggregateRating` (5.0 / 26 avaliações — dado real do Google Business Profile, incluído no schema conforme permitido pela SOP, mesmo sem destaque visual, já que 26 avaliações é abaixo do limiar de 30 exigido pela Regra AG5 para destaque visual).
- Também implementado `FAQPage` schema espelhando as 5 perguntas reais já presentes no site (via `script.js`).

### 1.4 Regra da URL limpa
- **Antes:** todos os links de navegação, rodapé e banner de cookies em `index.html`, `politica-de-privacidade.html` e `termos-e-condicoes.html` apontavam para `index.html#seção`, `termos-e-condicoes.html` e `politica-de-privacidade.html` (com extensão visível).
- **Depois:** todos os `href` foram convertidos para URLs limpas: `/`, `/#areas`, `/#sobre`, `/#contato`, `/politica-de-privacidade`, `/termos-e-condicoes`. O arquivo em disco continua com `.html` (necessário para funcionar sem servidor/rewrite configurado, mas a lógica de link segue a convenção de URL limpa pedida). `canonical`, `og:url`, `twitter:image` e `<loc>` do sitemap também não contêm `.html`.
- **Atenção operacional:** como os arquivos físicos continuam `index.html`, `politica-de-privacidade.html` etc., é necessário que o hosting/servidor tenha rewrite/clean URLs habilitado (ex.: Netlify, Vercel, Apache com mod_rewrite, Nginx try_files) para que `/politica-de-privacidade` sirva corretamente o arquivo `.html` correspondente. Sem essa configuração no servidor de produção, os links quebram.

### 1.5 `robots.txt` (criado)
- Arquivo não existia. Criado na raiz com `Allow: /` geral e liberação explícita para crawlers de IA (GPTBot, ChatGPT-User, Claude-Web, anthropic-ai, PerplexityBot, Google-Extended), referência ao `sitemap.xml` e comentário apontando para `llms.txt`.

### 1.6 `sitemap.xml` (criado)
- Arquivo não existia. Criado com as 3 páginas do site, todas com URL limpa (sem `.html`).

### 1.7 `llms.txt` (criado)
- Arquivo não existia. Criado seguindo a spec llmstxt.org: H1 com nome oficial, resumo em blockquote, NAP completo, seções `## Serviços`, `## Diferenciais`, `## Equipe`, `## Regiões atendidas`, `## Dúvidas frequentes` e `## Contato`.
- Todo o conteúdo foi extraído do próprio HTML/script.js e do dossiê em `Docs/Informações-da-Empresa-Raiz.md` — nenhum dado foi inventado. CNPJ foi omitido por não constar em nenhuma fonte (confirmado como "não informado / pendência" em `Docs/Dossiê-Site.md`).

### 1.8 Performance — imagens
- `hero-advocacia-premium.png` (imagem principal do hero, LCP): adicionado `width="1024" height="1024"` e `fetchpriority="high"` (já tinha `loading="eager"`, correto por estar no viewport inicial).
- `hero-advocacia-mobile.png`: adicionado `width="1024" height="1024"` e `decoding="async"` (já tinha `loading="lazy"`, correto por estar fora do fold em desktop).
- `equipe-advogadas-andrade-nascimento.webp` (2 ocorrências — mobile e desktop): alt text genérico trocado por descrição real com nomes das advogadas e localização; adicionado `decoding="async"`. **Não foi possível obter `width`/`height` deste arquivo `.webp`** (ferramentas locais disponíveis não decodificam WebP) — recomenda-se adicionar manualmente as dimensões intrínsecas do arquivo para eliminar CLS residual.
- Demais imagens (logo, favicon, ícones do formulário) já tinham `width`/`height` adequados.

### 1.9 Content SEO
- **Title da home:** trocado de `"Andrade & Nascimento — Sociedade de Advogados | Direito Previdenciário & Trabalhista"` (55 caracteres, mas sem localização) para `"Advogado Previdenciário e Trabalhista em Paciência, RJ | Andrade & Nascimento"` (78 caracteres — **atenção: ligeiramente acima do range ideal de 50-60, mas necessário para incluir keyword + localização + marca de forma natural; considerar encurtar se o CMS/SERP cortar**).
- **Meta description da home:** reescrita para incluir localização explícita ("Paciência, Zona Oeste do Rio de Janeiro") e remover a menção a "Avaliação 5,0" (violava a Regra AG5 de destaque de avaliações, já que o escritório tem 26 avaliações, abaixo do mínimo de 30 exigido para destacar nota+contagem).
- **H1:** era só o slogan emocional ("Defendemos o seu direito de viver com dignidade"), sem keyword nem localização. Reestruturado para `"Advogado Previdenciário e Trabalhista em Paciência, RJ"` como linha principal do H1, mantendo o slogan emocional original como `<em>` complementar na mesma tag (visualmente é uma frase só, mas tecnicamente cobre keyword + localização).
- Alt texts de imagens revisados para serem descritivos (ver item 1.8).
- Hierarquia H2 (Serviços, Depoimentos, Sobre, Vídeos, FAQ, Localização, Contato) já estava correta e com termos relevantes — nenhuma alteração estrutural necessária.

### 1.10 GEO & E-E-A-T
- NAP (Nome, Endereço, Telefone) já estava em texto HTML puro na seção "Onde estamos" e no rodapé — confirmado, não em imagem. Nenhuma alteração necessária.
- OAB das duas advogadas já visível em texto (seção Sobre, placa de localização e rodapé) — mantido, e replicado no schema JSON-LD como `hasCredential`.
- FAQ já existia com 5 perguntas reais — replicado em schema `FAQPage`.
- Timestamp "Última atualização" já presente nas páginas de Política de Privacidade e Termos (13 de julho de 2026) — nenhuma alteração necessária.
- `lang="pt-BR"`, `charset UTF-8` e `viewport` mobile já corretos nas 3 páginas — confirmado, nenhuma alteração necessária.

### 1.11 Conformidade Ética/OAB
- Não foram feitas alterações de conteúdo textual (depoimentos, CTAs) além do já documentado em `Docs/relatorio-conformidade.md` (nota 100/100), que foi respeitado integralmente — nenhuma reversão ou novo texto promocional foi introduzido.

---

## 2. Checklist de dependências externas (usuário precisa fazer manualmente)

- [ ] **Domínio final:** todos os `SEUDOMINIO.com.br` (canonical, og:url, twitter:image, JSON-LD, robots.txt, sitemap.xml, llms.txt) precisam ser substituídos pelo domínio real assim que definido.
- [ ] **Hosting/servidor:** configurar rewrite de URL limpa (`/politica-de-privacidade` → `politica-de-privacidade.html`, `/termos-e-condicoes` → `termos-e-condicoes.html`) no servidor de produção (Netlify `_redirects`, Vercel `vercel.json`, Nginx `try_files`, ou Apache `.htaccess`).
- [ ] **HTTPS:** confirmar certificado SSL ativo no domínio final antes do lançamento.
- [ ] **Google Search Console:** cadastrar o domínio, submeter `sitemap.xml` e solicitar indexação.
- [ ] **Google Meu Negócio (GMB/Business Profile):** já existe perfil verificado (Place ID `ChIJ63oXXnblmwARLPpVfjmoFB4`, 26 avaliações, nota 5.0) — manter atualizado e vincular ao site final.
- [ ] **Google Analytics / GA4 ou similar:** não identificado nenhum instalado; considerar implementação se desejado (separado do robô AG5 abaixo).
- [ ] **PageSpeed Insights:** rodar teste completo após publicação em domínio real (URLs locais/relativas não são testáveis pelo PageSpeed).
- [ ] **Redes sociais:** Instagram `@andradenascimentoadvocacia` já referenciado no schema (`sameAs`) e nos links do site — considerar adicionar Facebook/LinkedIn se existirem.
- [ ] **Backlinks:** nenhuma ação de link building foi realizada (fora do escopo desta auditoria técnica).
- [ ] **Validação de Rich Results:** após publicar em domínio real, validar o JSON-LD no [Google Rich Results Test](https://search.google.com/test/rich-results) e o `llms.txt` conforme a spec em [llmstxt.org](https://llmstxt.org).

---

## 3. Dados que não foi possível confirmar (pendências do usuário)

| Dado | Status | Ação necessária |
|---|---|---|
| **Slug do robô de analytics AG5** | Tag `<script src="https://control-blog.ag5agencia.site/r.js" data-c="SLUG" defer></script>` **não existe em nenhuma página** (`index.html`, `politica-de-privacidade.html`, `termos-e-condicoes.html`). Não foi adicionada por não haver slug real disponível no projeto. | Fornecer o slug correto do cliente para inserção manual antes de `</body>` nas 3 páginas. |
| **Domínio final** | Usado placeholder `https://SEUDOMINIO.com.br/` em canonical, OG, Twitter, JSON-LD, robots.txt, sitemap.xml e llms.txt. | Substituir pelo domínio real em todos os arquivos (busca por `SEUDOMINIO.com.br` localiza todas as ocorrências). |
| **CNPJ** | Não encontrado em nenhum arquivo do projeto nem em `Docs/`. `Docs/Dossiê-Site.md` confirma explicitamente "CNPJ: não informado (pendência)". | Fornecer o CNPJ se o escritório for pessoa jurídica registrada, para inclusão no schema e/ou rodapé (reforça E-E-A-T). |
| **Dimensões intrínsecas de `equipe-advogadas-andrade-nascimento.webp`** | Não foi possível ler via ferramentas locais (sem suporte a decodificação WebP no ambiente). `width`/`height` não foram adicionados neste arquivo. | Adicionar manualmente `width`/`height` reais da imagem nas 2 ocorrências em `index.html` para eliminar CLS residual. |
| **Google Analytics / tag de terceiros** | Nenhum instalado além do cookie banner próprio. | Confirmar se é desejado antes do lançamento. |

---

## 4. Resumo de arquivos alterados/criados

**Alterados:**
- `index.html` — meta tags, OG, Twitter, geo, JSON-LD (Attorney + FAQPage), H1, imagens (fetchpriority/width/height/alt), links limpos.
- `politica-de-privacidade.html` — canonical, OG, Twitter, links limpos.
- `termos-e-condicoes.html` — canonical, OG, Twitter, links limpos.

**Criados:**
- `robots.txt`
- `sitemap.xml`
- `llms.txt`
- `Docs/SEO-GEO-Audit-Report.md` (este relatório)
