# Filali Design Co. — Website

A luxury, multilingual portfolio and services website for **Filali Design Co.**, a Moroccan artisanal design studio specializing in custom upholstery, Moroccan salons, beds, curtains, custom woodwork, and bespoke kitchens.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build Tool | Vite 6 |
| Routing | React Router v7 |
| Animations | Framer Motion 12 |
| Styling | Tailwind CSS (CDN) |
| i18n | i18next + react-i18next |
| Email | EmailJS |
| SEO | React Helmet Async |
| State | React Context + localStorage |

---

## Features

- **Multilingual** — French, English, and Arabic with automatic RTL layout switching
- **Portfolio Manager** — Admin dashboard to create, edit, and delete project albums
- **Moodboard System** — Users can save favorite items to a personal moodboard that persists across sessions and can be referenced in contact form submissions
- **Contact Form** — EmailJS-powered form with service selection and moodboard attachment
- **Lightbox Gallery** — Full-screen image viewer with keyboard navigation
- **Custom Luxury UI** — Custom cursor, scroll progress bar, 3D intro gate animation, and smooth page transitions
- **SEO** — Dynamic meta tags per page and language via React Helmet
- **Responsive** — Mobile-first design with a dedicated mobile navigation menu

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, services, process, gallery, testimonials, contact |
| `/collections` | Product collections — salons, beds, curtains, wood, kitchens |
| `/portfolio` | Filterable project gallery |
| `/portfolio/:id` | Individual project detail with lightbox |
| `/story` | Brand story and design philosophy |
| `/faq` | Accordion-style frequently asked questions |
| `/contact` | Full contact page with process timeline and moodboard display |
| `/admin` | Password-protected admin dashboard |

---

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

---

## Project Structure

```
familybus/
├── components/         # Reusable UI components
├── pages/
│   ├── public/        # Public-facing pages
│   └── admin/         # Admin dashboard pages
├── context/
│   ├── ProjectContext.tsx   # Portfolio album state
│   └── MoodboardContext.tsx # User moodboard state
├── public/
│   └── locales/       # Translation JSON files (fr / en / ar)
├── App.tsx            # Root component with providers
├── index.tsx          # React DOM entry point
├── i18n.ts            # i18n configuration
├── types.ts           # Shared TypeScript types
├── images.json        # Static content/seed data
├── index.html         # HTML template
└── vite.config.ts     # Vite configuration
```

---

## Internationalization

Translations are loaded from `/public/locales/{lang}/translation.json`.

Supported languages: `fr` (French, default), `en` (English), `ar` (Arabic).

Language preference is detected from the browser and persisted in `localStorage`. Selecting Arabic automatically switches the document to RTL.

---

## Admin Dashboard

Access at `/admin` with password `admin123`.

> **Note:** Authentication is client-side only and not suitable for production use as-is.

From the dashboard you can:
- View all portfolio albums
- Create new albums with category, cover image, description, and image gallery
- Edit or delete existing albums

Album data is stored in `localStorage` under the key `filali_portfolio_albums`.

---

## Design System

**Colors:**

| Token | Value | Description |
|---|---|---|
| `riad-red` | `#5c1a1a` | Deep velvet red |
| `riad-brown` | `#3d2719` | Dark wood |
| `riad-white` | `#f8f5f0` | Creamy marble |
| `riad-blue` | `#0a1f29` | Midnight garden |
| `riad-sand` | `#d4b596` | Warm tadelakt |
| `riad-gold` | `#C5A059` | Gold |

**Fonts:** Cinzel (headings), Cormorant Garamond (body), Amiri (Arabic), Marcellus (alternate)
