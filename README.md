# 🎨 Jordan Donguy • Portfolio

Welcome to my personal portfolio built with Next.js!  

## 🚀 About

This portfolio showcases my web development work, projects, and contact details. It is built with:
- ```TypeScript``` for static typing and developer tooling
- ```Next.js``` for fast performance and server-side rendering
- ```Tailwind CSS``` for utility-first styling
- ```Framer Motion``` for animations
- ```Resend``` for contact form handling
- ```next-intl``` for multi-language support

## 📸 Live Demo

👉 [https://jordandonguy.com](https://jordandonguy.com)

## ⚙️ Features

- Fully responsive design
- Smooth component animations
- Multi-language support (`en`, `fr`, etc.) using `next-intl`
- Contact form powered by [Resend](https://resend.com/)
- Deployed on [Vercel](https://vercel.com/) for fast global performance
- Protected with [Cloudflare](https://www.cloudflare.com/) for enhanced security

## 🛠 Tech Stack

- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **i18n**: [next-intl](https://next-intl-docs.vercel.app/)
- **Email API**: [Resend](https://resend.com/)
- **Hosting**: [Vercel](https://vercel.com/)
- **Security/Protection**: [Cloudflare](https://www.cloudflare.com/)

## 🌍 Internationalization

This project uses [`next-intl`](https://next-intl-docs.vercel.app/) for internationalization.  
Languages supported:
- English (`en`)
- French (`fr`)

To add new languages:
1. Create a new JSON translation file in `messages/`
2. Update the `i18n.ts` config
3. Add a route namespace or dynamic locale switcher (optional)

## ✉️ Contact Form

The contact form is fully functional and sends messages via the [Resend](https://resend.com/) email API.

You can find the setup in:  
- **API**: ```/src/app/api/send-email/route.tx```  
- **Contact form**: ```/src/app/[locale]/components/ContactForm.tsx```  

Messages are sent securely using environment variables for your API key.

## 🧑‍💻 Getting Started

```
git clone https://github.com/JordanDonguy/portfolio.git
cd portfolio
npm install
npm run dev
```
Visit http://localhost:3000 to start the local server.

## 🙏 Contributing
Suggestions and improvements are welcome!

- Open an issue
- Fork the repo and submit a pull request

## 📄 License
This project is licensed under the MIT License.

---

_- Built with passion by **Jordan Donguy**_
