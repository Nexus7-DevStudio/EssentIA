# 🧪 GUIA RÁPIDO DE TESTE

## ⚡ Teste em 5 Minutos

### 1. Iniciar Servidor Local
```powershell
cd "c:\Users\Windows 10\OneDrive\Área de Trabalho\EssentIA1"
python -m http.server 8000
```

### 2. Abrir no Navegador
```
http://localhost:8000
```

---

## ✅ Checklist Visual - Desktop (1920px)

### Header
- [ ] Logo aparece à esquerda (180px)
- [ ] Menu horizontal no centro (SOLUÇÕES, SOBRE, CASES, FAQ, CONTEÚDO, MÉTODO)
- [ ] Botão AGENDAR DIAGNÓSTICO rosa à direita (345px)
- [ ] Altura do header: 160px
- [ ] Background preto com gradiente sutil

### Footer
- [ ] Logo à esquerda
- [ ] Menu horizontal no centro (mesmo do header)
- [ ] Botão AGENDAR DIAGNÓSTICO rosa à direita
- [ ] Copyright no centro (© 2026 EssentIA Social...)
- [ ] Links legais abaixo (Termos | Política)
- [ ] 6 ícones de redes sociais à direita
  - Instagram
  - TikTok
  - LinkedIn
  - X (Twitter)
  - Google
  - Email
- [ ] Altura total: 260px

### WhatsApp Flutuante
- [ ] Círculo verde no canto inferior direito (bottom: 54px, right: 42px)
- [ ] Tamanho: 115px
- [ ] Ícone WhatsApp branco centralizado
- [ ] Hover: aumenta com zoom

### Navegação
- [ ] Clicar logo → vai para index.html
- [ ] Clicar SOLUÇÕES → vai para index.html#solucoes
- [ ] Clicar SOBRE → vai para index.html#sobre
- [ ] Clicar CASES → vai para index.html#cases
- [ ] Clicar FAQ → vai para index.html#faq
- [ ] Clicar CONTEÚDO → vai para blog.html
- [ ] Clicar MÉTODO → vai para index.html#metodo
- [ ] Clicar AGENDAR → vai para index.html#diagnostico
- [ ] Clicar Termos de Uso → vai para termos-de-uso.html
- [ ] Clicar Política → vai para politica-privacidade.html

---

## ✅ Checklist Visual - Tablet (768px)

### Header
- [ ] Logo menor (140px)
- [ ] Fonte menu reduzida (18px)
- [ ] Altura do header reduzida (120px)
- [ ] Menu ainda horizontal

### Footer
- [ ] Mantém grid 3 colunas
- [ ] Logo ajustada (160px)
- [ ] Redes sociais menores (28px)
- [ ] Altura reduzida (220px)

### Navegação
- [ ] Todos os links funcionam igual

---

## ✅ Checklist Visual - Mobile (375px)

### Header
- [ ] Logo à esquerda (90px)
- [ ] Botão hamburguer à direita (☰)
- [ ] Altura reduzida (100px)
- [ ] Sem botão AGENDAR (desaparece)

### Menu Hamburger
- [ ] Clicar hamburguer → menu abre overlay preto
- [ ] Menu aparece com lista vertical
  - SOLUÇÕES
  - SOBRE
  - CASES
  - FAQ
  - CONTEÚDO
  - MÉTODO
  - AGENDAR DIAGNÓSTICO (botão rosa)
- [ ] Clicar em qualquer link → fecha menu
- [ ] Clicar hamburguer novamente → fecha menu
- [ ] Hamburguer roda (▬ → ✕)

### Footer
- [ ] Empilhado verticalmente (1 coluna)
- [ ] Ordem: Logo → Menu → Botão → Redes → Copyright → Links
- [ ] Logo centralizada (120px)
- [ ] Menu vertical com spacing
- [ ] Redes sociais centralizadas (28px)
- [ ] Texto pequeno (14px)

### WhatsApp Flutuante
- [ ] Tamanho reduzido (90px)
- [ ] Posição ajustada (bottom: 24px, right: 20px)
- [ ] Ainda funcional

### Navegação
- [ ] Todos os links funcionam
- [ ] Menu hamburger fecha após clicar

---

## 🧩 Teste de Componentes Específicos

### Logo
```
Desktop:  180px largura
Tablet:   140px largura
Mobile:   90px largura
Sempre:   altura auto (mantém proporção)
```

### Menu
```
Desktop:  Horizontal, gap 34-62px
Tablet:   Horizontal, gap reduzido
Mobile:   Vertical em overlay, gap 16px
```

### Botão CTA
```
Desktop:  345px × 58px, 22px fonte
Tablet:   280px × 52px, 18px fonte
Mobile:   100% da largura (em overlay)
Sempre:   Rosa #ff3f8f
```

### Footer
```
Desktop:  Grid 3 colunas, 260px altura
Tablet:   Grid 3 colunas, 220px altura
Mobile:   Grid 1 coluna, altura auto
Sempre:   Fundo preto #000
```

---

## 🎯 Teste de Funcionalidades JavaScript

### Menu Toggle (Mobile)
```
1. Abrir DevTools (F12)
2. Ativar Responsive Mode (Ctrl+Shift+M)
3. Definir para iPhone 375px
4. Clicar hamburguer
   ✓ Menu abre overlay preto
   ✓ Hamburguer vira X
   ✓ Body tem classe menu-open
5. Clicar link menu
   ✓ Menu fecha
   ✓ Vai para página correta
6. Redimensionar para 1024px
   ✓ Menu hamburguer desaparece
   ✓ Menu horizontal aparece
```

### FAQ Accordion
```
1. Navegar para #faq no index.html
2. Ver grid com 8 perguntas
3. Clicar em uma pergunta
   ✓ Resposta aparece com transição suave
   ✓ Seta rotaciona 90°
   ✓ aria-expanded muda para true
4. Clicar novamente
   ✓ Resposta desaparece
   ✓ Seta volta original
   ✓ aria-expanded muda para false
5. Clicar múltiplas questões
   ✓ Todas podem estar abertas (accordion múltiplo)
```

---

## 🔍 Teste de Responsividade

### DevTools Breakpoints
```
Clique em Responsive Mode (F12 + Ctrl+Shift+M)
```

**Mobile (375px)**
```
✓ Logo 90px
✓ Menu hamburguer visível
✓ Botão CTA desaparecido
✓ Footer empilhado 1 coluna
```

**Tablet (768px)**
```
✓ Logo 140px
✓ Menu hamburguer desaparece
✓ Menu horizontal aparece
✓ Footer ajustado (grid 3 cols)
```

**Laptop (1024px)**
```
✓ Logo 160px
✓ Menu horizontal completo
✓ Botão CTA visível
✓ Footer full 260px
```

**Desktop (1920px)**
```
✓ Logo 180px
✓ Espaçamento máximo
✓ Header/Footer bem proporcionados
```

---

## 🔗 Teste de Links

### Internos (Âncoras)
| Link | Esperado | Status |
|------|----------|--------|
| #solucoes | Seção Soluções | ✅ |
| #sobre | Seção Sobre | ✅ |
| #cases | Seção Cases | ✅ |
| #faq | Seção FAQ | ✅ |
| #metodo | Seção Método | ✅ |
| #diagnostico | Seção Diagnóstico | ✅ |

### Externos
| Link | Esperado | Status |
|------|----------|--------|
| blog.html | Página Blog | ✅ |
| termos-de-uso.html | Página Termos | ✅ |
| politica-privacidade.html | Página Política | ✅ |
| WhatsApp | App WhatsApp | ✅ |
| Instagram | Instagram.com | ✅ |
| TikTok | TikTok.com | ✅ |
| LinkedIn | LinkedIn.com | ✅ |
| X | X.com | ✅ |
| Google | Google.com | ✅ |
| Email | Cliente email | ✅ |

---

## 🎨 Teste de Cores

### Header
```
Background: Preto #000 com gradiente
Text: Branco #fff
Hover: Rosa #ff3f8f
Button: Rosa #ff3f8f com sombra
```

### Footer
```
Background: Preto #000
Text: Branco #fff
Hover: Rosa #ff3f8f
Links: Branco com hover rosa
Redes: Branco com hover rosa
```

### WhatsApp
```
Background: Verde #25d366
Ícone: Branco
Hover: Zoom 1.1x
Shadow: Sombra verde suave
```

---

## 📱 Teste em Dispositivos Reais

### Smartphone (iOS/Android)
```
1. Scannear QR Code do localhost
   → Ou digitar IP local (ex: 192.168.1.100:8000)
2. Testar em modo portrait (375px)
   ✓ Menu hamburger funciona
   ✓ Logo aparece corretamente
   ✓ Footer se adapta
   ✓ WhatsApp flutuante visível
3. Girar para landscape (667px)
   ✓ Layout se adapta
   ✓ Menu reaparece/hamburguer some
```

### Tablet (iPad)
```
1. Acessar em modo landscape (768px)
   ✓ Menu horizontal aparece
   ✓ Footer ajustado
   ✓ Header 120px
2. Acessar em modo portrait (375px)
   ✓ Menu hamburguer aparece
```

---

## 🐛 Debug (Se algo não funcionar)

### F12 DevTools → Console
```javascript
// Verificar se elementos existem
document.querySelector('.site-header')      // deve retornar element
document.querySelector('.site-toggle')      // deve retornar button
document.querySelector('.site-nav')         // deve retornar nav

// Verificar classes
document.querySelector('.site-header').className  // deve ter site-header
```

### F12 DevTools → Elements
```
1. Clicar no elemento
2. Ver CSS aplicado
3. Verificar se media queries estão funcionando
4. Checar margin/padding
```

### F12 DevTools → Network
```
1. Abrir aba Network
2. Recarregar página (F5)
3. Verificar se todos os arquivos carregam:
   ✓ index.html (ou blog.html, etc)
   ✓ style.css
   ✓ main.js
   ✓ logo.png
   ✓ Imagens background
```

---

## ⚡ Performance (Opcional)

### Lighthouse Score
```
F12 → Lighthouse → Generate Report

Esperado:
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: > 90
```

### Tempo de Carregamento
```
Esperado: < 2 segundos (local)
F12 → Network → Reload
Ver tempo total de carregamento
```

---

## ✅ Checklist Final

Após completar todos os testes acima, verificar:

- [ ] Header funcional em todos os tamanhos
- [ ] Footer funcional em todos os tamanhos
- [ ] Menu hamburger em mobile
- [ ] Todos os links navegam corretamente
- [ ] WhatsApp flutuante visível e funcional
- [ ] Redes sociais carregam
- [ ] Responsividade suave (sem saltos)
- [ ] Cores corretas (preto, branco, rosa)
- [ ] Logo mantém proporção
- [ ] Transições suaves (0.25s)
- [ ] Sem erros no console (F12)
- [ ] Funciona em Chrome, Firefox, Safari, Edge

---

## 🎯 Resultado Esperado

✅ Ao final dos testes, você terá:
- Site completamente responsivo (320px - 1920px)
- Header/Footer padronizado em todas as 5 páginas
- Logo oficial da EssentIA Social aparecendo
- Navegação funcional (6 links no menu)
- WhatsApp flutuante operacional
- Redes sociais no footer
- Menu hamburger em mobile
- FAQ accordion funcionando
- Pronto para converter em WordPress

---

**Status:** ✅ Pronto para teste
**Tempo estimado:** 5-10 minutos
**Dúvidas:** Verificar documentação em RESUMO_TECNICO.md
