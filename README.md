# 📰 DEV.to Blog 

A responsive blog web application that fetches and displays articles from the [DEV.to](https://dev.to) API. Features infinite scrolling, author pages, article details, trending post badges, and more.

## 🚀 Features

- 🔄 Infinite Scroll for seamless post loading
- 🧠 HOC-based 🔥 Trending Badge for popular posts
- 📄 Individual article detail pages
- 👤 Author profile pages with their articles
- 🎯 Search functionality (with UI ready)
- 💅 Tailwind CSS for responsive and modern styling
- ⚛️ Built with React + TypeScript + React Router

---

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/devto-blog-clone.git](https://github.com/Soumyamanna123/devto-blog.git
   cd devto-blog


2. **Install dependencies**

   ```bash
   npm install   

3. **Start the development server**

   ```bash
   npm run dev

4. **Open the app in your browser**

   ```bash
   http://localhost:5173
   
## 🛠️ Libraries Used

- **React** – Frontend framework for building UI components  
- **React Router DOM** – Enables client-side routing and dynamic URLs  
- **TypeScript** – Provides static typing for safer and more scalable code  
- **Tailwind CSS** – Utility-first CSS framework for responsive and modern UI styling  
- **DEV.to Public API** – Used to fetch articles, author details, and related data  


## 📁 Project Structure
        
    devto-blog/
    │
    ├── index.html
    ├── package.json
    ├── postcss.config.js
    ├── tailwind.config.js
    ├── tsconfig.json
    ├── vite.config.ts
    │
    ├── src/
    │   ├── index.css
    │   ├── main.tsx
    │   │
    │   ├── types/
    │   │   └── post.ts         # TypeScript types/interfaces for posts
    │   │
    │   ├── lib/
    │   │   └── devto.ts        # API functions (e.g., fetchPosts, fetchPostById)
    │   │
    │   ├── hooks/
    │   │   ├── usePosts.ts
    │   │   ├── useInfinitePosts.ts
    │   │   └── useMostPopularPost.ts
    │   │
    │   ├── hoc/
    │   │   └── WithFeaturedBadge.tsx
    │   │
    │   ├── components/
    │   │   ├── Feed.tsx
    │   │   ├── MaxWidthWrapper.tsx
    │   │   ├── MostPopular.tsx
    │   │   └── MostRecentPost.tsx
    │   │
    │   └── pages/
    │       ├── Home.tsx
    │       ├── ArticleDetails.tsx
    │       └── (other page components)
    │
    └── public/
        └── (static assets, if any)


## 🔥 Trending Badge Feature

Highlight popular posts with a custom badge using a reusable **Higher Order Component (HOC)**.

- **Adds a 🔥 Trending badge** to posts with more than **50 positive reactions**
- **Uses Tailwind CSS** for smooth animation and styling
- **Keeps `PostCard` component reusable** without modifying it directly
- **Encapsulated logic** — easy to apply to other components or conditions

### ✅ Usage

```tsx
import { PostCard } from "./components/PostCard";
import { withFeaturedBadge } from "./hoc/withFeaturedBadge";

const EnhancedPostCard = withFeaturedBadge(PostCard);

// In JSX
<EnhancedPostCard {...post} />
