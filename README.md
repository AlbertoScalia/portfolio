# Alberto Scalia – Personal Portfolio

This repository features the source code of my personal portfolio, built to demonstrate the synergy between **editorial precision** and **modern frontend performance**. Originally developed as a milestone project for the **start2impact** HTML & CSS course, it has evolved into a full React application with its own visual identity, motion design and accessibility layer.

## 🚀 Technical Stack & Features

The project is engineered for speed, maintainability, and accessibility, reflected in the codebase composition:

* **React** and **React Router**: Component-driven architecture and client-side routing (Home, About, Contact, 404).
* **Vite**: Fast dev server and optimized production builds.
* **Tailwind CSS**: Utility-first styling for rapid layout iteration, responsive design, and precise typography control.
* **Framer Motion**: Scroll-linked parallax, entrance animations and interactive micro-interactions.
* **Phosphor Icons**: Integrated vector icon library (`@phosphor-icons/react`) for crisp visual cues.
* **EmailJS**: Contact form delivery (`@emailjs/browser`), loaded only when the form is submitted, with a honeypot anti-spam field.
* **Scroll-Driven Sections**: A parallax hero, a text tape, an "Approach" statement whose words change colour as you read, and a count-up "in numbers" band.
* **Selected Work**: Image reveals, numbered projects, category chips and a detail modal with next-project navigation.
* **About Page**: Experience, education and skills aligned with the downloadable CV, with a timeline and links to every school and employer.
* **Downloadable CV and Contact Details**: A PDF available from the About and Contact pages, plus a one-click copy for the email address.
* **Interaction Details**: Custom cursor with contextual labels, magnetic buttons, rolling-text links and page-transition curtains.
* **Web Accessibility (A11y)**: Built according to WCAG 2.2 AA guidelines, featuring accessible contrast ratios (4.5:1 for body text, 3:1 for large display type and UI components), visible keyboard focus states, a skip link, a focus trap in the mobile menu, focus management and unique titles on every route change, full ARIA attributes, support for `prefers-reduced-motion` and for forced-colors (Windows High Contrast) mode, and no horizontal scrolling down to 320 px wide. Audited with axe-core, with no violations on any page.
* **Motion Controls**: A "Reduce motion" switch in the footer, on top of the system preference, that turns off the cursor, parallax, page transitions and marquee. Decorative loops stop after a few seconds and the client marquee can be paused.
* **SEO & Social Sharing**: Semantic HTML, per-page titles and descriptions, canonical URLs, Open Graph and Twitter cards with a dedicated preview image, JSON-LD structured data and a sitemap.
* **Deployment**: Static hosting on **GitHub Pages**, with the production build output in `docs/` and a `404.html` fallback so that direct links to inner pages work.
* **Performance Optimized**: WebP assets, lazy-loaded images, transform-based animations, non-blocking font loading with a metric-matched fallback font, and clean code practices for rapid load times.

## 🎨 Design Philosophy: Visual Synthesis

As a UI Designer with a strong background in Editorial Design, I designed this interface to focus on **conversion through clarity**:

1. **Two-Colour Identity**: A deep blue (`#364b9b`) for text and structure, and a vivid orange-red (`#EC3814`) as the single accent that directs user attention. White space and a pale blue tint do the rest.
2. **Typographic Dominance**: One family, Inter, used through the contrast between semibold and light weights, tight tracking on display sizes and generous scale jumps to establish an immediate professional hierarchy.
3. **Editorial Details**: Layout guides, numbered projects, a colophon in the footer and a recurring circle motif that links the hero, buttons, timeline and decorative elements.
4. **Inclusive UX**: A distraction-free, fully keyboard-navigable experience with motion controls for reduced sensory load.

## Project Structure

```
src/
  components/   Navbar, Footer, HeroParallax, Tape, Manifesto, Work, Stats,
                ClientsMarquee, Reveal, Magnetic, Cursor, RollText,
                LocalTime, Guides
  pages/        Home, Bio, Contact, NotFound
  hooks/        useMotionPref, usePageTitle
  utils/        cn, grain, site
  index.css
  main.jsx
public/
  404.html            fallback for direct links on GitHub Pages
  sitemap.xml
  og-image.png        preview image for social sharing
  Alberto-Scalia-CV.pdf
  assets/images/      project images, logos and portrait (WebP)
```

## Getting Started

```bash
npm install
npm run dev        # development server
npm run build      # production build (output in docs/)
npm run preview    # preview the production build
```

The site is served under the `/portfolio/` base path (see `vite.config.js`). The router uses the same base path (`basename="/portfolio"`).

Contact details and the CV path live in `src/utils/site.js`. The contact form reads its EmailJS credentials from a `.env` file at the project root:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

---

### 👨‍💻 Developer
[**Alberto Scalia**](https://github.com/AlbertoScalia)
