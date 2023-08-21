import { useRef } from "react";
import { Card } from "../../../components/Card";
import { Link } from "../../../components/Link";
import { Text } from "../../../components/Text";
import type { Post } from "../types";

export interface PostCardProps {
  post: Post & { formattedDate?: string; thumbnail: string };
}

export const PostCard = ({ post }: PostCardProps) => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  return (
    <Card
      onClick={() => {
        linkRef.current?.click();
      }}
    >
      <img
        src={post.thumbnail}
        alt=""
        className="object-cover w-full rounded-t-3xl"
      />
      <div className="p-8">
        <Text as="time" className="!text-stone-400 text-sm block">
          {post?.formattedDate}
        </Text>

        <Text className="text-xl py-4" as="h3">
          {post.data.title}
        </Text>

        <Link ref={linkRef} href={`/blog/${post?.slug}`}>
          Read the article
        </Link>
      </div>
    </Card>
  );
};
