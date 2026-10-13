# 🌹 Rosas do Deserto

### Uma coleção viva de formas, cores e delicadeza no coração do Brasil

[![Site](https://img.shields.io/badge/site-rosol.vercel.app-20251f?style=for-the-badge&logo=vercel&logoColor=white)](https://rosol.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16-111111?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-20232a?style=for-the-badge&logo=react&logoColor=61dafb)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

**Rosas do Deserto** é um espaço digital dedicado à beleza singular dos adeniums, plantas conhecidas por seus troncos esculturais, raízes expressivas e flores de cores marcantes. O projeto apresenta a coleção de Natanael Ferreira, em Alagoas, Brasil, por meio de uma experiência visual contemporânea, elegante e acolhedora.

A proposta combina fotografia botânica, uma identidade visual escura e sofisticada, tipografia editorial e pequenos detalhes de interação. O resultado é uma galeria que deixa as plantas ocuparem o centro do palco: cada flor, pétala e forma recebe espaço para ser apreciada.

**Explore a coleção:** https://rosol.vercel.app

---

## 🌺 A beleza das rosas-do-deserto

A rosa-do-deserto, conhecida botanicamente como *Adenium*, chama atenção pelo contraste entre a robustez do caudex e a delicadeza das flores. Suas formas parecem esculpidas lentamente, enquanto as cores variam entre tons suaves, contrastes intensos e combinações surpreendentes.

Este site foi pensado para valorizar essa personalidade botânica. Em vez de competir com as fotografias, o design cria um ambiente de contemplação, com fundos profundos, tons naturais e uma composição que aproxima o visitante da coleção.

- **Formas esculturais:** destaque para os caudexes e as silhuetas únicas de cada planta.
- **Flores cheias de personalidade:** uma galeria para observar cores, pétalas e detalhes.
- **Cultivo como expressão de cuidado:** cada exemplar faz parte de uma coleção construída com tempo e atenção.
- **Fotografia em primeiro plano:** imagens apresentadas como parte essencial da narrativa visual.

## ✨ O que você encontra no site

- **Galeria fotográfica:** uma seleção visual das rosas-do-deserto da coleção.
- **Visualização ampliada:** interação com as imagens para observar os detalhes das plantas.
- **Experiência multilíngue:** conteúdo em português brasileiro, russo e inglês.
- **Seletor de idioma com bandeiras SVG:** ícones vetoriais próprios para uma apresentação consistente.
- **Navegação fixa e translúcida:** acesso rápido às seções sem perder a identidade visual.
- **Direção de arte botânica:** paleta escura, tons de rosa empoeirado, verde-sálvia e areia.
- **Atmosfera sonora opcional:** controle para reproduzir ou pausar o áudio ambiente.
- **Layout responsivo:** adaptação a diferentes tamanhos de tela.
- **Acessibilidade:** textos alternativos, foco visível por teclado e respeito à preferência por movimento reduzido.
- **Vercel Web Analytics:** acompanhamento de métricas de uso na versão publicada.

## 🎨 Identidade visual

A linguagem visual foi criada para unir o universo natural das plantas a uma estética editorial contemporânea.

| Elemento | Intenção |
| --- | --- |
| Preto e verde quase negros | Criar profundidade e dar protagonismo às fotografias |
| Rosa suave e rosa empoeirado | Dialogar com as pétalas sem exagerar na saturação |
| Verde-sálvia e tons de areia | Trazer referências discretas à natureza e ao solo |
| Tipografia editorial | Equilibrar elegância, leitura e personalidade |
| Transparências e gradientes | Acrescentar profundidade sem sobrecarregar a interface |
| Animações sutis | Tornar a navegação mais viva, preservando a tranquilidade visual |

A interface evita o aspecto de catálogo genérico. A intenção é transmitir a sensação de uma pequena exposição botânica digital, na qual cada imagem contribui para contar a história da coleção.

## 🪴 Tecnologias utilizadas

- [Next.js 16](https://nextjs.org/) para a aplicação web.
- [React 19](https://react.dev/) para os componentes e a interface.
- [TypeScript](https://www.typescriptlang.org/) para tipagem estática.
- [Tailwind CSS 4](https://tailwindcss.com/) para os estilos.
- [Lucide](https://lucide.dev/) para os ícones.
- [Vercel](https://vercel.com/) para publicação e Web Analytics.

## 🚀 Como executar localmente

### Pré-requisitos

- Node.js compatível com a versão do Next.js utilizada.
- pnpm instalado.

### 1. Clone o repositório

```bash
git clone https://github.com/sunmeat/desert.git
cd desert
```

### 2. Instale as dependências

```bash
pnpm install
```

### 3. Inicie o ambiente de desenvolvimento

```bash
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### 4. Gere a versão de produção

```bash
pnpm build
pnpm start
```

## 🗂️ Estrutura do projeto

```text
app/
  globals.css       Estilos globais e comportamento responsivo
  layout.tsx        Layout raiz, metadados e Analytics
  page.tsx          Página principal, idiomas, galeria e interações
components/
  ui/
    button.tsx      Componente de botão reutilizável
lib/
  utils.ts          Funções utilitárias
public/
  images/           Fotografias das rosas-do-deserto
  audio/            Arquivo de áudio ambiente
  icon.svg          Ícone do site
```

## 🌍 Idiomas

O português brasileiro é o idioma padrão. A interface também pode ser explorada em russo e inglês.

| Código | Idioma |
| --- | --- |
| PT | Português brasileiro |
| RU | Русский |
| EN | English (United States) |

Os textos são organizados na página principal, permitindo alternar o idioma sem recarregar toda a página.

## 📷 Fotografias e conteúdo

As imagens utilizadas no site ficam em `public/images/`. Para atualizar a galeria:

1. Adicione as novas fotografias à pasta de imagens.
2. Atualize a lista de imagens e suas legendas em `app/page.tsx`.
3. Confira os textos alternativos e as versões traduzidas quando aplicável.
4. Verifique a apresentação em telas grandes e pequenas.

Procure manter imagens com boa iluminação, foco nítido e enquadramentos que mostrem tanto a planta inteira quanto os detalhes das flores. A consistência fotográfica ajuda a galeria a funcionar como uma coleção, e não apenas como um conjunto de imagens isoladas.

O áudio ambiente atual está em `public/audio/atmosfera-placeholder.wav` e pode ser substituído pela faixa definitiva quando estiver disponível.

## ☁️ Publicação

O projeto pode ser publicado na Vercel:

1. Importe o repositório do GitHub na Vercel.
2. Mantenha as configurações padrão de build para Next.js, salvo necessidade específica.
3. Publique a branch principal.
4. Com a integração automática ativa, novos commits poderão iniciar novas publicações.

**Site publicado:** https://rosol.vercel.app

## 💬 Contato

Para conversar sobre a coleção ou entrar em contato com Natanael:

- **WhatsApp:** [+55 82 98211-0203](https://wa.me/5582982110203)

---

Feito para celebrar a beleza singular das rosas-do-deserto e transformar uma coleção de plantas em uma experiência botânica digital. 🌱
