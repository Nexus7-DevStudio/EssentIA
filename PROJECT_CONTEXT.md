# EssentIA Social - Contexto vivo do projeto

Este arquivo deve ser lido antes de criar ou alterar qualquer pagina do projeto. Ao finalizar novas paginas ou decisoes importantes, atualize este documento com o que for util para os proximos templates.

## Objetivo do projeto

Criar as 4 paginas principais do site EssentIA Social em HTML, CSS e JS limpos, com estrutura pensada para futura conversao em tema WordPress:

- Home: `index.html`
- Blog: `blog/index.html`, futuro `archive.php`
- Termos de Uso: futuro template estatico
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
