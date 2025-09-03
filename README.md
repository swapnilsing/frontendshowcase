# FrontendShowcase

A responsive frontend starter built with React, Vite, and Tailwind.

## Features
- Responsive components (Nav, Hero, Features, Portfolio, Contact)
- Dark mode with persisted preference (localStorage)
- Framer Motion animations
- Serverless contact endpoint (Netlify Functions example using SendGrid)
- Plain static single-file alternative (static-site/index.html)

## Local development

1. Install dependencies:

```bash
npm install
```

2. Run dev server:

```bash
npm run dev
```

3. (Optional) Run Netlify functions locally with `netlify dev` (install `netlify-cli`):

```bash
netlify dev
```

## Deploy

### Netlify
- Push repo to GitHub.
- In Netlify, create a new site from Git.
- Set build command: `npm run build` and publish directory: `dist`.
- Add environment variables for SendGrid:
  - SENDGRID_API_KEY
  - CONTACT_EMAIL
  - FROM_EMAIL (optional)

### Vercel
- Vercel also supports deployments for Vite projects. Functions must be adapted to Vercel Serverless Functions if you choose Vercel.

## Notes
- The serverless function in `functions/contact.js` is a template — for production add rate limiting, spam protection (reCAPTCHA), and validation.
