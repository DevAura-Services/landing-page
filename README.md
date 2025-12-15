# Devaura - DevOps Agency Website

![Devaura Logo](public/logo-with-text.png)

Devaura is a modern, high-performance website for a premier DevOps and MLOps agency. Built with Next.js 14, Tailwind CSS, and Framer Motion, it features a responsive design, smooth animations, and a dark-themed aesthetic tailored for the tech industry.

## Features

-   **Dynamic Landing Page**:
    -   Immersive Hero section with gradient effects.
    -   **Tech Marquee**: Infinite scrolling animation displaying core technologies (Docker, K8s, AWS, etc.) in alternating directions.
    -   **Services Hub**: Grid layout highlighting key advantages (Talent, Cost, Location).
-   **Interactive Components**:
    -   Responsive Navbar with mobile drawer.
    -   Contact Form with validation.
    -   Cookie Consent popup with localStorage persistence.
    -   **Chatbot**: Interactive chatbot for user engagement.
-   **Tech Stack**:
    -   [Next.js 14](https://nextjs.org/) (App Router)
    -   [Tailwind CSS](https://tailwindcss.com/)
    -   [Lucide React](https://lucide.dev/) (Icons)
-   **DevOps Ready**:
    -   Dockerized (`Dockerfile`, `.dockerignore`).
    -   CI/CD friendly structure.

## 🛠️ Getting Started

### Prerequisites

-   Node.js 18+
-   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/DevAura-Services/landing-page.git
    cd landing-page
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser.

## 🐳 Docker Support

Build the container:
```bash
docker build -t devaura-website .
```

Run the container:
```bash
docker run -p 3000:3000 devaura-website
```


## 🚀 Deployment

This project is configured to automatically deploy to **GitHub Pages** using GitHub Actions.

### How it works
1.  **Workflow**: The pipeline is defined in `.github/workflows/deploy.yml`.
2.  **Trigger**: Pushing to the `main` branch triggers the workflow.
3.  **Process**:
    -   Installs dependencies and builds the project.
    -   Generates a static export (`output: "export"` in `next.config.js`).
    -   Uploads the build artifact.
    -   Deploys to the `gh-pages` environment.

### Configuration
-   **Static Export**: `output: "export"` is enabled in `next.config.js`.
-   **Base Path**: `basePath` is configured to match the repository name (e.g., `/landing-page`) for correct routing on GitHub Pages.
-   **Images**: Image optimization is disabled (`unoptimized: true`) as GitHub Pages doesn't support the default Next.js image server.

## 📁 Project Structure

```
devaura-website/
├── app/                # Next.js App Router pages and layouts
│   ├── globals.css     # Global styles and Tailwind directives
│   ├── layout.js       # Root layout (Navbar, Footer)
│   └── page.js         # Landing page
├── components/         # Reusable React components
│   ├── Hero.js
│   ├── Navbar.js
│   ├── Footer.js
│   ├── TechMarquee.js
│   └── Chatbot.js
├── public/             # Static assets
└── ...config files
```

## 📄 License

This project is licensed under the MIT License.