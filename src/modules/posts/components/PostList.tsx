import type { Post } from "../types";
import { PostCard } from "./PostCard";

export interface PostListProps {
  posts: Array<Post & { formattedDate?: string; thumbnail: string }>;
}

export const PostList = ({ posts }: PostListProps) => {
  return (
    <ol className="grid md:grid-cols-3 gap-4">
      {posts.map((post) => (
        <li className="h-full" key={post.id}>
          <article className="h-full">
            <PostCard post={post} />
          </article>
        </li>
      ))}
    </ol>
  );
};
