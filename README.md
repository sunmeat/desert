# Rosas do Deserto

A dark, editorial showcase for Natanael Ferreira’s personal collection of desert roses in Alagoas, Brazil. The site brings together botanical photography, thoughtful typography, subtle motion, and a multilingual experience inspired by the patience and sculptural beauty of adeniums.

**Live site:** https://rosol.vercel.app  
**Instagram:** https://www.instagram.com/natan_ferreira002/

## Highlights

- **Three languages:** Brazilian Portuguese, Russian, and English.
- **Country flags:** custom SVG flags in the language switcher.
- **Responsive navigation:** a fixed, translucent header that stays above page content.
- **Photo galleries:** editorial image grid, collection preview, and an interactive lightbox.
- **Botanical storytelling:** dedicated sections about desert roses, the collection, and Natanael.
- **Ambient audio control:** optional background atmosphere with play and pause.
- **Contact links:** direct access to Instagram and WhatsApp.
- **Accessible details:** descriptive image text, keyboard focus styles, dialog labels, and reduced-motion support.
- **Vercel Web Analytics:** analytics enabled for production.

## Built with

- [Next.js](https://nextjs.org/) 16
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Lucide](https://lucide.dev/) icons
- [Vercel](https://vercel.com/) deployment and Analytics

## Getting started

### Requirements

- Node.js compatible with the installed Next.js version
- pnpm

### Install dependencies

```bash
pnpm install
```

### Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Create a production build

```bash
pnpm build
pnpm start
```

## Project structure

```text
app/
  globals.css       Global styles, layout, responsive behavior
  layout.tsx        Root layout, metadata, and Vercel Analytics
  page.tsx          Landing page, translations, gallery, and interactions
components/
  ui/
    button.tsx      Shared button component
lib/
  utils.ts          Utility helpers
public/
  images/           Desert rose photography
  audio/            Ambient audio asset
  icon.svg          Site icon
```

## Localization

Brazilian Portuguese is the default language. Visitors can switch between:

| Code | Language |
| --- | --- |
| PT | Português brasileiro |
| RU | Русский |
| EN | English (United States) |

The selected language updates the page content in place without a full page reload.

## Content and assets

The photographs in `public/images/` power the hero, collection gallery, and social preview grid. Replace or add images there and update the gallery list and localized captions in `app/page.tsx` when changing the collection.

The ambient audio file is located at `public/audio/atmosfera-placeholder.wav`. Replace it with the final audio track when one is ready.

## Deployment

The project is configured for a standard Next.js deployment on Vercel. Connect the GitHub repository to Vercel and deploy the default branch. New commits can then trigger automatic deployments.

## Credits

Created as a digital home for Natanael Ferreira’s desert rose collection in Alagoas, Brazil.

- Instagram: [@natan_ferreira002](https://www.instagram.com/natan_ferreira002/)
- WhatsApp: [+55 82 98211 0203](https://wa.me/5582982110203)
