# EssentIA Social - Contexto vivo do projeto

Este arquivo deve ser lido antes de criar ou alterar qualquer pagina do projeto. Ao finalizar novas paginas ou decisoes importantes, atualize este documento com o que for util para os proximos templates.

## Objetivo do projeto

Criar as 4 paginas principais do site EssentIA Social em HTML, CSS e JS limpos, com estrutura pensada para futura conversao em tema WordPress:

- Home: `index.html`
- Blog: `blog/index.html`, futuro `archive.php`
- Post individual: `post.html`, futuro `single.php`
- Termos de Uso: `termos-de-uso.html`, futuro `page-termos-de-uso.php`
- Politica de Privacidade: futuro template estatico

## Identidade visual

- Tema escuro futurista, com sensacao de IA, tecnologia, redes sociais e performance.
- Paleta principal: preto profundo, azul eletrico, roxo, rosa neon e branco.
- Botoes principais usam gradiente rosa, roxo e azul.
- Cards usam fundo escuro translucido, bordas neon e sombra suave.
- Fundos devem usar gradientes, linhas, pontos, paineis tecnologicos e elementos decorativos em CSS.
- Evitar layout branco/generico.
- Tipografia atual: `Sora` para titulos e `Space Grotesk` para texto e interface.

## Estrutura tecnica

- CSS principal: `assets/css/style.css`
- JS principal: `assets/js/main.js`
- Logo horizontal: `logo/96e44a52-939f-4792-a0a8-6a1f3f467e9d.png`
- Favicon/simbolo da aba: `assets/img/favicon.png`
- Imagem destacada do post individual: `assets/img/post-featured-ai-content.svg`
- Usar HTML semantico, CSS mobile-first, classes reutilizaveis e sem IDs aleatorios.
- Nao usar CSS inline.
- Nao usar posicionamento absoluto como base de layout.
- Usar `container`, `section`, `section__header`, `cards-grid`, `card`, `button`, `site-header`, `site-footer` como blocos compartilhados.
- Usar `clamp()` para fontes principais.
- Garantir que nenhum elemento estoure a largura em mobile.

## Componentes globais

- Header sticky com logo, menu e CTA.
- Footer reutilizavel com logo, menu, links legais e CTA.
- Menu mobile com botao hamburguer controlado por `main.js`.
- FAQ accordion acessivel com `aria-expanded`.
- Botao flutuante de WhatsApp em todas as paginas.
- Todos os CTAs de diagnostico devem apontar para WhatsApp da empresa.
- Numero WhatsApp da empresa: `5519998477151`.
- Link padrao de diagnostico:
  `https://wa.me/5519998477151?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20EssentIA%20Social%20e%20quero%20agendar%20um%20diagn%C3%B3stico.`

## Home implementada

A home foi recriada do zero, sem copiar a estrutura do HTML exportado do Great Pages/WordPages. Ela usa apenas a referencia visual, textual e de organizacao.

Secoes criadas:

- Header sticky com navegacao e CTA.
- Hero com titulo principal, texto, CTAs, bullets e visual tecnologico em CSS.
- Diagnostico/formulario com nome, email, aceite LGPD e CTA.
- Problema/desafio/consequencia com 4 cards numerados.
- Metodo EssentIA em 5 etapas.
- Principios com 4 cards, frase destaque e valores.
- Numeros/metricas.
- Cases/depoimentos com 3 cards.
- CTA de proximo case abaixo dos depoimentos.
- FAQ com 8 perguntas e respostas.
- Preview do blog com 3 cards.
- Footer reutilizavel.
- Favicon com o simbolo da logo em `assets/img/favicon.png`.
- Botao flutuante de WhatsApp global.
- Icones inline em areas de beneficios, metodo, principios, valores, CTA de case e hero do blog.

Marcacoes para WordPress ja deixadas no HTML:

- `header.php`
- `footer.php`
- `template-parts/sections/hero-home.php`
- `template-parts/sections/diagnostic-form.php`
- `template-parts/sections/social-challenge.php`
- `template-parts/sections/method.php`
- `template-parts/sections/principles.php`
- `template-parts/sections/stats.php`
- `template-parts/sections/cases.php`
- `template-parts/sections/faq.php`
- `template-parts/sections/blog-preview.php`

## Regras para proximas paginas

- Reaproveitar header, footer, WhatsApp flutuante, favicon e classes compartilhadas.
- Em paginas internas, menu deve apontar para as secoes da home com `/#solucoes`, `/#sobre`, `/#cases`, `/#faq`, `/blog` e `/#metodo`.
- Em paginas internas, usar `page-hero` para hero simples.
- Em listagens futuras, usar `archive-grid`, `post-card` e links simulados preparados para slugs.
- Em posts individuais, usar `post-hero`, `post-layout`, `post-sidebar`, `post-toc`, `post-content`, `article-section`, `article-callout`, `article-cta` e `related-posts`.
- Em paginas legais/institucionais, usar `legal-page`, `legal-hero`, `legal-content`, `legal-card`, `legal-section` e `legal-cta`.
- No fim de cada nova pagina concluida, registrar aqui:
  - pagina criada
  - classes novas importantes
  - decisoes visuais ou tecnicas
  - proximos cuidados para WordPress

## Blog implementado

Pagina criada em `blog/index.html`, preparada para futuramente virar `archive.php`.

Estrutura:

- Header igual ao da home, com links para secoes da home e CTA de WhatsApp.
- Favicon carregado no `head`.
- Hero simples com titulo `Blog` e subtitulo pedido.
- Elementos decorativos de blog/tecnologia em CSS e SVG inline: documento, lapis, chat, notebook e coracao.
- Grid responsivo com 6 posts mockados.
- Cada post tem visual/imagem placeholder em CSS, categoria, titulo, resumo e link `Ler artigo`.
- Links simulados para `/blog/nome-do-artigo`.
- Footer igual ao da home.
- Botao flutuante de WhatsApp global.

Classes novas/reutilizaveis importantes:

- `page-hero`, `page-hero__content`, `page-hero__title`, `page-hero__text`, `page-hero__scene`
- `decor-icon`, `decor-device`
- `archive-section`, `archive-grid`
- `post-card__content`
- `whatsapp-float`
- `icon-bubble`, `process-card__icon`, `value-item__icon`
- `next-case`, `next-case__icon`, `next-case__actions`
- `social-links`, `social-link`
- `text-nowrap`

Decisoes tecnicas:

- `main.js` agora suporta multiplos formularios com `[data-diagnostic-form]`.
- O envio do formulario da home valida os campos e abre o WhatsApp com mensagem generica, sem incluir nome/email no link.
- Os CTAs de diagnostico usam mensagens diferentes para home e blog, mas sempre apontam para o numero `5519998477151`.
- Tipografia foi ajustada por breakpoint com `clamp()` sem depender de `vw` para tamanho de fonte.
- `letter-spacing` foi normalizado para `0` nos componentes.

Proximos cuidados para WordPress:

- Extrair header/footer para `header.php` e `footer.php`.
- Extrair botao flutuante de WhatsApp para um template-part global.
- Converter os cards do blog para loop dinamico com `WP_Query` ou loop padrao do `archive.php`.
- Trocar placeholders visuais dos posts por `the_post_thumbnail()` quando houver imagens destacadas.
- Manter `PROJECT_CONTEXT.md` atualizado ao criar Termos de Uso e Politica de Privacidade.

## Post individual implementado

Pagina criada em `post.html`, preparada para futuramente virar `single.php`.

Estrutura:

- Header igual ao da home/blog, com links para secoes da home, `/blog` e CTA de WhatsApp.
- Favicon carregado no `head` usando `assets/img/favicon.png`.
- Hero do artigo com breadcrumb, categoria, titulo, resumo, data, tempo de leitura e imagem destacada.
- Imagem destacada em SVG criada em `assets/img/post-featured-ai-content.svg`, com visual de IA, marketing e metricas.
- Conteudo principal isolado em `<article class="post-content">`.
- Sumario interno em `<aside class="post-sidebar">` com links ancora para Introducao, Estrategia, Producao, Performance e Conclusao.
- Callouts internos usando `article-callout` e variante `article-callout--blue`.
- CTA final com link de diagnostico para WhatsApp.
- Secao de artigos relacionados com 3 cards prontos para futuro loop.
- Footer igual ao da home/blog e botao flutuante de WhatsApp global.

Classes novas importantes:

- `post-hero`, `post-hero__grid`, `post-hero__content`, `post-hero__title`, `post-hero__subtitle`, `post-hero__meta`, `post-hero__figure`
- `breadcrumb`
- `post-body-section`, `post-layout`, `post-sidebar`, `post-toc`, `post-toc__title`
- `post-content`, `post-content__header`, `post-content__title`
- `article-section`, `article-list`, `article-callout`, `article-callout--blue`, `article-cta`
- `related-posts`

Decisoes tecnicas:

- O layout do post usa grid responsivo e leitura com largura maxima confortavel.
- O sumario aparece acima do artigo no mobile e fica sticky na lateral em desktop.
- O CTA de diagnostico do post usa mensagem especifica de artigo, mas sempre aponta para `5519998477151`.
- Os links relacionados usam slugs simulados no formato `/blog/nome-do-artigo`.
- O HTML contem comentarios indicando campos dinamicos futuros do WordPress: categoria, titulo, resumo, data, imagem destacada, conteudo e posts relacionados.

Proximos cuidados para WordPress:

- Converter `post.html` em `single.php`.
- Trocar campos estaticos por `the_title()`, `the_excerpt()`, `the_category()`, `the_date()`, `the_content()` e `the_post_thumbnail()`.
- Gerar o sumario automaticamente a partir dos headings ou manter como bloco/template-part manual.
- Transformar artigos relacionados em `WP_Query` por categoria/tag.
- Reaproveitar header, footer e WhatsApp flutuante como template-parts globais.

## Termos de Uso implementado

Pagina criada em `termos-de-uso.html`, preparada para futuramente virar `page-termos-de-uso.php`.

Estrutura:

- Header igual ao restante do site, com links para secoes da home, `/blog` e CTA de WhatsApp.
- Favicon carregado no `head` usando `assets/img/favicon.png`.
- Hero institucional com breadcrumb `Inicio > Termos de Uso`, titulo, subtitulo e ultima atualizacao.
- Conteudo legal em `<article class="legal-card">`, com largura maxima confortavel para leitura.
- Dez secoes obrigatorias: aceitacao, sobre, uso do site, propriedade intelectual, formularios, servicos, responsabilidade, links externos, alteracoes e contato.
- CTA final discreto com link para WhatsApp.
- Footer global com logo, menu, Blog, Politica de Privacidade, CTA e copyright.
- Botao flutuante de WhatsApp global.

Classes novas importantes:

- `legal-page`
- `legal-hero`, `legal-hero__inner`, `legal-hero__title`, `legal-hero__text`, `legal-hero__updated`
- `legal-content`, `legal-content__header`
- `legal-card`
- `legal-section`
- `legal-cta-section`, `legal-cta`

Decisoes tecnicas:

- A pagina legal usa card central escuro com borda neon suave para melhorar leitura e manter identidade futurista.
- O conteudo ficou mais largo e legivel do que a referencia antiga dos prints, evitando texto pequeno demais.
- Os CTAs da pagina usam mensagem especifica de Termos de Uso, sempre apontando para `5519998477151`.
- O HTML contem comentarios indicando futura conversao para `page-termos-de-uso.php` e template-parts de hero/header/footer.

Proximos cuidados para WordPress:

- Converter `termos-de-uso.html` em `page-termos-de-uso.php`.
- Trocar titulo, subtitulo e conteudo por campos editaveis do WordPress quando necessario.
- Manter o bloco legal em template reutilizavel para a Politica de Privacidade.
- Reaproveitar o mesmo padrao visual e classes `legal-*` na proxima pagina institucional.
