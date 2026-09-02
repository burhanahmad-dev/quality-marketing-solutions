# Quality Marketing Solutions

A premium, conversion-focused marketing agency website for Quality Marketing
Solutions (QMS). The site combines a custom SEO/growth background video with
clear service positioning, reduced-motion support, responsive layouts and
search-friendly metadata.

## Highlights

- Full-screen muted marketing-process hero video with a lightweight poster fallback
- Service-focused overview carousel with reduced-motion support
- SEO, paid media, social, web/CRO, branding and analytics service sections
- Responsive mobile navigation and keyboard-visible focus styles
- Organization structured data and social-share metadata
- Custom 1200 × 630 Open Graph image

## Local development

Node.js 22.13 or newer is required.

```bash
npm install
npm run dev
```

For a production-style local preview:

```bash
npm run build
npm run start -- --port 3001
```

Then open `http://localhost:3001`.

## Project structure

The page is organized by responsibility so each area can be updated without
working inside one large file:

- `app/` — route, metadata and global design system
- `components/layout/` — shared header and footer
- `components/ui/` — reusable brand UI
- `components/sections/hero/` — hero video, headline and service positioning
- `components/sections/overview/` — curved agency overview panel
- `components/sections/reviews/` — review-platform trust strip and editable profile data
- `components/sections/approach/` — agency process
- `components/sections/about/`, `insights/`, `faq/`, `contact/` — supporting sections
- `lib/site-data.ts` — shared services, process and FAQ content
- `public/` — optimized videos, images and local fonts

## Stock footage

The hero master was edited from three Pexels source clips supplied by the
client: video IDs [6558143](https://www.pexels.com/video/6558143/),
[8478956](https://www.pexels.com/video/8478956/) and
[7651891](https://www.pexels.com/video/7651891/). The website ships a muted,
web-optimized 1920 x 1080 edit; the original source files remain outside the
project.

The service carousel uses free-to-use Pexels photography: [SEO and analytics](https://www.pexels.com/photo/person-using-a-laptop-3183131/),
[paid media planning](https://www.pexels.com/photo/a-woman-looking-at-the-graph-on-the-monitor-of-a-laptop-7698798/)
and [social content creation](https://www.pexels.com/photo/a-woman-using-smartphone-and-ring-light-7480538/).

## Before public launch

Replace the working contact email with the client's verified email, and add
only verified case studies, reviews, partner badges and company details.
