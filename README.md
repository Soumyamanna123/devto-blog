
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
