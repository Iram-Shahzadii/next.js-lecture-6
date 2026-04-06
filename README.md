# Next.js Lecture 6: Server-Side Data Fetching & Error Handling 🛒

This project is a professional "Premium Store" built with **Next.js 14**, focusing on server-side rendering (SSR), resilient data fetching, and enhanced user experience through loading skeletons and error boundaries.

---

## 🚀 Live Demo
Experience the live application here: 
**[Live Demo Link](https://next-js-lecture-6-1mek1ni8c-iram-shahzadiis-projects.vercel.app/server-fetch)**

---

## ✨ Features

- **Server-Side Rendering (SSR):** Data is fetched directly on the server using `async/await` in Server Components for faster page loads and better SEO.
- **Dynamic Product Grid:** A fully responsive UI built with **Tailwind CSS**, displaying products from a live API.
- **Loading Skeletons:** Implemented `loading.tsx` to provide a smooth visual experience while data is being fetched.
- **Error Boundaries:** Integrated `error.tsx` to catch network or API failures gracefully without crashing the application.
- **Type Safety:** Built using **TypeScript** to ensure clean and bug-free code.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14 (App Router)](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **API:** [DummyJSON](https://dummyjson.com/)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 🚧 Challenges & Solutions

### The Problem
During development, the initial API source (FakeStoreAPI) went down, returning HTML error pages instead of JSON data. This caused an `Unexpected token <` error, which is a common hurdle in web development.

### The Fix
1. **Debugging:** Used the custom **Error Boundary** (`error.tsx`) to catch the failure and display a user-friendly error message.
2. **Resilience:** Switched the data source to the more stable **DummyJSON API**.
3. **Robustness:** Implemented `try...catch` blocks and response validation to ensure the app remains functional even if external services fail.

---

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Iram-Shahzadii/next.js-lecture-6.git](https://github.com/Iram-Shahzadii/next.js-lecture-6.git)
2:Install dependencies:
npm install
3:Run the development server:
npm run dev
4:View the project:
Open http://localhost:3000/server-fetch in your browser.
---

## 👩‍💻 About Me
I am a Computer Science student passionate about Full-Stack Development and "Learning in Public." 

🚀 **Connect with me:**
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/iram-shahzadi-5294a6329?utm_source=share_via&utm_content=profile&utm_medium=member_android)
