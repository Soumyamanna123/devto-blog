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
   git clone https://github.com/Soumyamanna123/devto-blog.git
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
---   
## 🛠️ Libraries Used

- **React** – Frontend framework for building UI components  
- **React Router DOM** – Enables client-side routing and dynamic URLs  
- **TypeScript** – Provides static typing for safer and more scalable code  
- **Tailwind CSS** – Utility-first CSS framework for responsive and modern UI styling  
- **DEV.to Public API** – Used to fetch articles, author details, and related data  

---

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

---
## 🧭 Pages & Components Overview

### 🏠 Home (`/`)
- Displays the **most recent** and **most popular** posts.
- Includes a **tag list** to filter posts by topic.
- Uses components: `MostRecentPost`, `MostPopular`, `TagList`, `Feeds`.

### 📝 Article Details (`/article/:id`)
- Shows full article content with:
  - Author info
  - Date, reading time
  - Related tags
- Fetches article data dynamically by ID.

### 👤 Author Details (`/user/:username`)
- Displays author's:
  - Avatar, name, bio
  - All their published articles
- Includes a toggle to filter and show only **🔥 Trending** articles (posts with more than 50 positive reactions).

### 🧭 Navbar
- Sticky header across all pages.
- Contains:
  - Site logo
  - Search input for articles
- Fully responsive for desktop and mobile views.

### 🏷️ TagList
- Lets users **select tags** to filter the article feed.
- Supports **multi-select** with highlight states.
- "Show More" / "Show Less" toggle to expand or collapse the tag list.

### 🆕 MostRecentPost
- Carousel slider of the latest posts.
- Optimized UX for both mobile and desktop.

### 🔥 MostPopular
- Displays top trending post(s) based on positive reactions.
- Utilizes a reusable `WithFeaturedBadge` HOC to add a **"🔥 Trending"** badge dynamically.

### 📄 Feeds
- Renders article feed grid with **infinite scrolling**.
- Includes shimmer loading UI and supports tag-based filtering.


---





        


## 🔧 Features

### 🔥 Trending Badge (HOC)
- Uses a Higher-Order Component `WithFeaturedBadge` to automatically display a 🔥 **Trending** badge on any post with more than **50 positive reactions**.
- Keeps the logic reusable and DRY by enhancing any `PostCard` component dynamically.

### 🚀 Infinite Scrolling
- Implements infinite scrolling using a custom hook `useInfinitePosts`.
- Automatically loads more posts as the user scrolls, providing a seamless experience without manual pagination.

### 🏷️ Dynamic Tag Filtering
- The `TagList` component fetches tags from the DEV.to API.
- Allows **multi-select filtering** with selected tag highlighting.
- Supports **"Show More" / "Show Less"** toggle for managing tag visibility.

### 🧑 Author Detail with Trending Filter
- The `AuthorDetails` page lists all articles by a specific author.
- Includes a **Trending Only** toggle to filter posts with over **50 positive reactions**.

### 🖼️ Responsive Carousel for Recent Posts
- The `MostRecentPost` component features a **responsive slider/carousel** for showcasing the latest posts.
- Fully optimized for mobile and desktop with smooth transitions.

### ⚡ Modern UI/UX
- Built using **Tailwind CSS** for fast, consistent, and responsive styling.
- Includes a **sticky, responsive navbar** with an integrated search bar.
- **Shimmer UI loaders** used for better perceived performance during API fetches.

### 🛠️ Type Safety & Clean Architecture
- Built entirely with **TypeScript** for strong type safety.
- Uses **custom hooks** like `usePosts`, `useInfinitePosts`, and `useMostPopularPost` to handle data fetching.
- Follows a **modular folder structure** for maintainable and scalable development.

---
## ⚡ App Optimization Highlights

### 🔄 Code Splitting & Lazy Loading
- Pages and components are loaded only when needed to reduce the initial bundle size and improve page load times.

### 🪝 Custom Hooks for Data Fetching
- Data-fetching logic is encapsulated in hooks like `usePosts`, `useInfinitePosts`, and `useMostPopularPost`, improving reusability and maintainability.

### ✨ Shimmer Loaders
- Components such as `MostRecentPost` and `TagList` show **shimmer UI loaders** during data fetches to enhance perceived performance.

### ♾️ Infinite Scrolling
- Loads posts dynamically as the user scrolls, fetching only what's needed and optimizing rendering performance.

### 📱 Responsive Design
- Built using **Tailwind CSS**, ensuring mobile-first responsiveness and reduced layout shifts across devices.

### 🧠 Memoization
- Utilizes `React.useMemo` and `React.useCallback` to avoid unnecessary recalculations and re-renders.

### 🧩 Minimal Re-renders
- Manages state at the most granular level so only necessary components update, improving efficiency.

### 🖼️ Optimized Images
- Uses appropriate image dimensions and fallback placeholders to prevent broken layouts and image shifts.

### ♿ Accessibility
- Implements semantic HTML and accessible components to improve SEO and usability for all users.

### 🔐 Type Safety with TypeScript
- Reduces runtime errors and improves development reliability through strong static typing.

---
      


