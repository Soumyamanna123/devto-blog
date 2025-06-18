import type { Post } from "../types/post";



export function PostCard({ title, description, tag_list, cover_image, user, published_at, url }: Post) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden">
      <img
        src={cover_image || "https://via.placeholder.com/800x400?text=No+Image"}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <p className="text-sm text-gray-600 mt-1">{description}</p>

        <div className="flex flex-wrap gap-2 mt-2">
          {tag_list.map(tag => (
            <span key={tag} className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
          <img src={user.profile_image} alt={user.name} className="w-6 h-6 rounded-full" />
          <span>{user.name} • {new Date(published_at).toLocaleDateString()}</span>
        </div>
      </div>
    </a>
  );
}
