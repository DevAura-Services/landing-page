# SEO Strategy & Implementation

This guide outlines the Search Engine Optimization (SEO) strategy for the Devaura website, ensuring high visibility and performance in search engine results.

## 1. Technical SEO

### Next.js Metadata API
We utilize the Next.js 14 Metadata API for dynamic and static head management.

-   **Title & Description**: Defined globally in `app/layout.js` and overridden in individual pages (e.g., `app/blog/page.js`).
    ```javascript
    export const metadata = {
      title: 'Blog | Devaura',
      description: 'Insights on DevOps and MLOps...',
    }
    ```
-   **Canonical URLs**: Automatically generated via `metadataBase`.

### Static Export (GitHub Pages)
The site is built as a static export (`output: 'export'`). This ensures fast time-to-first-byte (TTFB), a core web vital.

### Sitemap & Robots.txt
-   **sitemap.xml**: Should be generated at build time or manually maintained in `public/`.
-   **robots.txt**: Configured in `app/layout.js` metadata or served as a static file.

## 2. On-Page SEO

### Semantic HTML
-   Use of `<header>`, `<main>`, `<footer>`, `<article>`, and `<section>` tags.
-   Proper logic hierarchy: Single `<h1>` per page, followed by `<h2>`, `<h3>`.

### Images
-   **Alt Text**: All images must have descriptive `alt` attributes.
-   **Optimization**: Since we use `unoptimized: true` for GitHub Pages, images should be pre-optimized (WebP format, compressed) before uploading to `public/`.

## 3. Key Pages Strategy

### Home (`/`)
-   **Keywords**: DevOps Agency, MLOps Services, Cloud Architecture.
-   **Goal**: Brand awareness and service overview.

### Careers (`/careers`)
-   **Keywords**: DevOps Jobs, Tech Careers, Remote Engineering Roles.
-   **Schema Markup**: JSON-LD `JobPosting` schema should be added for Google Jobs integration.

### Blog (`/blog`)
-   **Keywords**: Specific technical terms (e.g., "Kubernetes Cost Optimization").
-   **Strategy**: High-quality, long-form content to capture informational queries.

## 4. Performance (Core Web Vitals)

### LCP (Largest Contentful Paint)
-   Hero image preloading.
-   Efficient font loading (`next/font`).

### CLS (Cumulative Layout Shift)
-   Explicit width/height on images.
-   Reserved space for dynamic content (e.g., cookie banner).

### FID (First Input Delay) / INP (Interaction to Next Paint)
-   React Server Components (RSC) minimize client-side JS bundle size.
-   Lazy loading of heavy components (e.g., `MouseGlow` is lazy loaded).

## 5. Monitoring

-   **Google Search Console**: Verify domain ownership to track impressions and clicks.
-   **Lighthouse**: Run audits regularly in Chrome DevTools.
