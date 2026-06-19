# Listing API

A lightweight product listing app built with vanilla JavaScript. It fetches products from an external API, supports category filtering and pagination, keeps state in the URL, and opens product details in a modal.

## Features

- **Product listing** — fetches data from the Cosibella test API and renders paginated cards (6 products per page)
- **Category filter** — dropdown populated dynamically from product categories, with a default “show all” option
- **URL state** — `category` and `page` query parameters are synced with the browser address bar
- **Browser history** — back and forward navigation restores the correct filter and page
- **Product modal** — click a list item to view extended details; close via the button, backdrop click, or `Escape`
- **Error handling** — user-facing messages for fetch failures and empty filter results

## Tech stack

- HTML5
- JavaScript (ES modules)
- SCSS (compiled to CSS)
- [live-server](https://www.npmjs.com/package/live-server) for local development
- [Sass](https://sass-lang.com/) for styles

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)

### Installation

```bash
git clone https://github.com/Kuba-Jeziorski/listing-api.git
cd listing-api
npm install
```

### Development

```bash
npm run dev
```

This starts:

- Sass in watch mode — compiles `src/scss/style.scss` to `dist/style.css`
- live-server on [http://localhost:3000](http://localhost:3000)

### Build styles only

```bash
npx sass src/scss/style.scss dist/style.css
```

## Project structure

```
listing-api/
├── index.html              # App shell
├── dist/                   # Compiled CSS (generated)
├── src/
│   ├── icons/              # SVG icons and favicon
│   ├── js/
│   │   ├── scripts.js      # Entry point
│   │   └── partials/       # Feature modules
│   └── scss/
│       └── style.scss      # Styles and design tokens
└── package.json
```

## URL parameters

| Parameter  | Default     | Description                |
| ---------- | ----------- | -------------------------- |
| `category` | `wszystkie` | Filter by product category |
| `page`     | `1`         | Current page number        |

Examples:

- `/?page=2` — page 2, all categories
- `/?category=Kategoria&page=1` — filtered by category

## API

Products are loaded from:

```
https://s5.cosibella.pl/api/test/products
```

The response is cached in memory after the first successful fetch.
