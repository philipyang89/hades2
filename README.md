# Hades 2 Wiki

A modern, feature-rich community wiki for Hades 2, built with Remix, Tailwind CSS v4, and remix authentication. 
[https](https://hades2.onrender.com/)

---

## 🚀 Features

- ✨ Remix + Vite full-stack framework
- 🎨 Tailwind CSS v4 styling with custom variables and fonts
- 🔒 Remix-auth authentication (secure cookie-based login/register)
- 🗃️ Sidebar navigation is auto-generated from a single prisma seed
- 📝 Each article can be easily written inside the /prisma/seed.js 
- Future plans would be adding UI edition/deletion of articles + Nested Comments

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
    DATABASE_URL=postgresql://user:password@localhost:5432/dbname
4. **Prepare the database:**
- Run migrations
    ```sh
    pnpm prisma:migrate
    npx prisma generate
    pnpm prisma db seed // to populate the articles
5. **Run the development server:**
    ```sh
    pnpm dev
- Visit the app:
    ```sh
    http://localhost:5173
## ✏️ Adding Articles
- Edit prisma/seed.js to add your article data.
- No need to create new route files, the logic of article.$slug.tsx takes care of it.
- The sidebar will update automatically!

## 👤 Authentication
- Session-based login with cookies without JWTs
- /register and /login routes will handle user sign-up and sign-in.
- Login with either email or username.
- Credentials will be securely hashed and stored.
- Logout destroys the session cookie.