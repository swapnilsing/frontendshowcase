# FrontendShowcase

A responsive frontend starter built with React, Vite, and Tailwind.

## Features
- Responsive components (Nav, Hero, Features, Portfolio, Contact)
- Dark mode with persisted preference (localStorage)
- Framer Motion animations
- Serverless contact endpoint (Netlify Functions example using SendGrid)
- Plain static single-file alternative (static-site/index.html)


  - CONTACT_EMAIL
  - FROM_EMAIL (optional)

### Vercel
- Vercel also supports deployments for Vite projects. Functions must be adapted to Vercel Serverless Functions if you choose Vercel.

## Notes
- The serverless function in `functions/contact.js` is a template — for production add rate limiting, spam protection (reCAPTCHA), and validation.
