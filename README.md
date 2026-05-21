# Priyanshu Bisht Portfolio

A modern developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

The site is designed to feel clean, premium, fast, and trustworthy, with a stronger focus on real engineering presentation than flashy landing-page effects.

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Project Structure

```text
.
|-- public/
|   |-- project-ashapure.svg
|   `-- project-tableforge.svg
|-- src/
|   |-- App.jsx             # main portfolio content and sections
|   |-- main.jsx            # React entry point
|   `-- styles.css          # global styles and Tailwind component layer
|-- index.html              # app shell and SEO metadata
|-- package.json
`-- vite.config.mjs
```

## Getting Started

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Create a production build

```bash
npm run build
```

### Preview the production build locally

```bash
npm run preview
```

## What To Customize

Update the placeholder profile links in `src/App.jsx`:

- `resume`
- `github`
- `linkedin`
- `email`

The portfolio is already wired with Priyanshu Bisht's production links for:

- email
- GitHub
- LinkedIn
- resume view/download

## Notes

- The project uses lightweight motion only for section reveals and hover polish.
- The featured project visuals are local SVG mockups stored in `public/`.
- Resume actions use Google Drive links defined in `src/App.jsx`.
- The generated `dist/` folder is build output and should not be committed.
