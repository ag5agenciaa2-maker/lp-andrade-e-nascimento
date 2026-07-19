# Pendências do Schema.org — Andrade & Nascimento Sociedade de Advogados
Data: 19/07/2026

## 🔴 CRÍTICOS
- **CNPJ**: não informado em nenhuma fonte (Raiz nem Dossiê). Schema não inclui `taxID`/`vatID`. Se o cliente fornecer, adicionar.
- **Email institucional**: não informado (Dossiê cita fragmento incompleto do Instagram, não confiável). Schema não inclui `email`.

## 🟡 IMPORTANTES
- **Total de avaliações vs. fonte**: usamos `reviewCount: 26` e `ratingValue: 5.0` do Pleper export (fonte primária, confiável). Confirmar periodicamente se o número de avaliações no Google mudou, pois esse dado fica desatualizado com o tempo.
- **Segundo telefone/WhatsApp**: Raiz e Dossiê trazem apenas um número (21) 97578-5413, usado tanto como telefone quanto WhatsApp. Não há telefone fixo separado, então não foi necessário array `telephone` nem bloco `contactPoint` (ETAPA 4.5 não se aplica — só um número).
- **Horário do fim de semana**: confirmado como "Fechado" (Dossiê), por isso `openingHoursSpecification` cobre apenas segunda a sexta, 09:00–18:00 (valor da Raiz, que diverge do Dossiê que citava 09h–17h — Raiz prevalece por ser fonte primária/Pleper-adjacente).

## 🔵 COMPLEMENTARES
- **Facebook/LinkedIn**: não informados em nenhuma fonte. `sameAs` ficou apenas com Google Maps (CID) e Instagram.
- **Foto de founder/Person com imagem**: não há fotos individuais nomeadas de cada advogada (apenas foto de equipe conjunta), então o bloco `employee` ficou sem `image`. Se retratos individuais forem fornecidos, adicionar `image` em cada `Person`.
- **Google Business Profile ID** (`1519617156623946408`, do Pleper) não tem propriedade padrão no vocabulário schema.org além do CID/Place ID já usados — omitido por não ser um identificador Schema.org reconhecido (CID e Place ID já cobrem a necessidade da ETAPA 1.6).

## 🟢 FAQ
- Bloco FAQPage já existia no HTML anterior (5 perguntas sobre INSS/trabalhista) e foi preservado integralmente dentro do novo `@graph`, apenas movido para `@id: #faq` e sem alterações de conteúdo.

## ✅ Resolvidos Automaticamente
- **Domínio AG5**: `http://www.andradeenascimento.ag5agencia.site/` aplicado em canonical, OG, Twitter, JSON-LD (`url`, `@id`), robots.txt, sitemap.xml e llms.txt de todas as páginas (substituiu o placeholder `SEUDOMINIO.com.br`).
- **@type**: `LegalService` (era `Attorney` na versão anterior; skill determina LegalService como padrão AG5 para escritórios).
- **alternateName**: gerado pela fórmula obrigatória → `Advogado Paciência RJ - Andrade & Nascimento | Direito Previdenciário | Direito Trabalhista` (aplicado também em `WebSite.name` e usado como base do `OfferCatalog.name`).
- **legalName**: `Andrade e Nascimento Sociedade de Advogados` (nome oficial do Dossiê).
- **Google CID + Place ID**: encontrados no Pleper export (Docs/Dossiê-Site.md) → `identifier` (PropertyValue Google CID `2167542285558217260` + Google Place ID `ChIJ63oXXnblmwARLPpVfjmoFB4`), `hasMap` e `sameAs[0]` = `https://maps.google.com/?cid=2167542285558217260` (substituiu o link genérico `share.google/...` que estava no HTML antigo).
- **Coordenadas GPS**: `-22.92004140, -43.63310180` (Pleper export, fonte primária — já batiam com o HTML anterior).
- **foundingDate**: `2023-06-09` (Dossiê: "Data da Abertura: 09/06/2023").
- **currenciesAccepted**: `BRL` e **paymentAccepted** adicionados (inferência de negócio nacional brasileiro comum ao segmento — dado não crítico/sensível).
- **areaServed**: bairro base Paciência + 5 bairros reais informados no Dossiê (Campo Grande, Santa Cruz, Cosmos, Inhoaíba, Sepetiba, dentre a lista mais ampla do cliente) + cidade Rio de Janeiro + país Brasil (atendimento nacional confirmado).
- **aggregateRating**: mantido `5.0` / `26` avaliações — dado real e verídico do Pleper export (nota E contagem visíveis).
- **hasOfferCatalog**: 5 áreas de atuação reais (Previdenciário, Trabalhista, Família, Consumidor, Cível), extraídas do Dossiê/HTML.
- **employee**: Caroline Andrade (OAB/RJ 240.863) e Gabriela Nascimento (OAB/RJ 243.079), nomes e registros reais do Dossiê.
- **@graph estruturado**: adicionados blocos `WebSite` (#website) e `WebPage` (#webpage) que não existiam na versão anterior, ligando `LegalService` (#negocio) como `about`/`publisher`, conforme ETAPA 2 da skill.
