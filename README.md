# Jose Carlos Muñoz - CV App

[![CI](https://github.com/JoseMunozO/cv-jose/actions/workflows/ci.yml/badge.svg)](https://github.com/JoseMunozO/cv-jose/actions/workflows/ci.yml)

Editable CV built with React, TypeScript and Vite. The project is designed as a portfolio-ready resume app with print styles for exporting a clean A4 PDF.

## Features

- Centralized CV data in `src/data/cv.ts`
- Responsive React layout
- Print-optimized A4 styling
- Direct PDF download through the `Ladda ner PDF` button
- No backend or database required

## Getting Started

```bash
npm install
npm run dev
```

## Edit Content

Update the CV content in:

```text
src/data/cv.ts
```

## Export PDF

Run the app and click `Ladda ner PDF`. The browser downloads `jose-carlos-munoz-cv.pdf`.

## Scripts

```bash
npm run dev
npm run build
npm run lint
```

## Quality

The repository includes GitHub Actions CI for pull requests and pushes. The workflow installs dependencies with `npm ci`, runs ESLint and builds the production bundle.

## Notes

The old CV screenshots in `docs/` are kept as design references only. The current layout is rebuilt from scratch for a cleaner professional CV and portfolio presentation.
