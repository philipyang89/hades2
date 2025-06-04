# Hades 2 Wiki

A modern, feature-rich community wiki for Hades 2, built with Remix, Tailwind CSS v4, and custom authentication.  

---

## 🚀 Features

- ✨ Remix + Vite full-stack framework
- 🎨 Tailwind CSS v4 styling with custom variables and fonts
- ⚡️ shadcn/ui component library
- 🔒 JWT authentication (secure cookie-based login/register)
- 🗃️ Sidebar navigation is auto-generated from a single article metadata file
- 📝 Each article is a standalone route for full flexibility

---

## 🛠️ Development Setup

1. **Clone the repo:**
   ```sh
   git clone https://github.com/philipyang89/hades2.git
   cd hades2-wiki
2. **Install dependencies (using pnpm):**
    ```sh
    pnpm install
3. **Set up environment variables:**
- Copy .env.example to .env and fill in your values, e.g.:
    ```sh
    JWT_SECRET=your_super_secret_jwt_key
    DATABASE_URL=postgresql://user:password@localhost:5432/dbname
4. **Prepare the database:**
- Run migrations
    ```sh
    pnpm prisma:migrate
5. **Run the development server:**
    ```sh
    pnpm dev
- Visit the app:
    ```sh
    http://localhost:5173
## ✏️ Adding Articles
- Edit app/list.ts to add your article's <b>title and slug</b>.
- Create a new route file, e.g. app/routes/article.$slug.tsx.
- The sidebar will update automatically!

## 👤 Authentication
- /register and /login pages will handle user sign-up and sign-in.
- Credentials will be securely hashed and stored.
- JWT token is secure as a HTTP-only cookie.