/**
 * Higher-Order Component (HOC) that enhances a PostCard component by conditionally
 * displaying a "🔥 Trending" badge for posts with more than 50 positive reactions.
 *
 * @module withFeaturedBadge
 */

import React, { type JSX } from "react";
import type { Post } from "../types/post";

/**
 * A Higher-Order Component that wraps a given PostCard component
 * and adds a "🔥 Trending" badge if the post's `positive_reactions_count` exceeds 50.
 *
 * @function
 * @param {React.FC<Post>} WrappedComponent - The original PostCard component to enhance.
 * @returns {React.FC<Post>} - A new enhanced component that renders the original PostCard
 * with an optional trending badge.
 *
 * @example
 * // Wrap the original PostCard:
 * const FeaturedPostCard = withFeaturedBadge(PostCard);
 *
 * // Use it like a regular component:
 * <FeaturedPostCard {...post} />
 */
export function withFeaturedBadge(
  WrappedComponent: React.FC<Post>
): React.FC<Post> {
  return function EnhancedPostCard(props: Post): JSX.Element {
    // ...existing code...
    const isFeatured = (props.positive_reactions_count ?? 0) > 50;
    // ...existing code...

    return (
      <div className="relative">
        {isFeatured && (
          <div className="absolute -top-3 right-0 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-black text-xs px-3 py-1 rounded-full shadow-md animate-pulse">
            🔥 Trending
          </div>
        )}
        <WrappedComponent {...props} />
      </div>
    );
  };
}
