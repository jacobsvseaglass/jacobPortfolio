# 🌐 My Portfolio Website

Welcome to the source code for my personal portfolio — a fully custom-built site powered by [SvelteKit](https://kit.svelte.dev), deployed on my self-hosted **Ubuntu server** running on a **Raspberry Pi**.

---

## 🛠 Project Structure

### `src/lib/components/`
Reusable and self-contained UI components:
- Buttons
- Modals
- Slideshows
- Cards

Each component lives in its own file and is fully styled using scoped CSS or utility classes.

### `src/routes/`
This directory defines the app's pages and layout:
- Every page is a Svelte file in this folder.
- Includes global layout components like headers and footers.
- Route-based code splitting for performance.
- Contains data file each modal pulls from

---

## 🚀 Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

---

## 🏗 Building for Production

To generate an optimized production build:

```bash
npm run build
```

Then preview locally:

```bash
npm run preview
```

---

## 📦 Deployment

This site is hosted on my personal **Ubuntu server** running on a **Raspberry Pi**, which handles HTTPS with Nginx and serves the static content using a custom Node backend or adapter.

To deploy:
- Build with `npm run build`
---

## 🧩 Tech Stack

- **SvelteKit**
- **TypeScript**
- **CSS Modules / SCSS**
- **Nginx**
- **Node.js**
- Deployed on: **Raspberry Pi (Ubuntu 22.04 LTS)**

---

Feel free to explore the code, fork it, or use it as inspiration. If you have questions or feedback, feel free to open an issue or connect with me.

---
