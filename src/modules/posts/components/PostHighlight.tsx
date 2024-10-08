import { useRef } from "react";
import { Card } from "../../../components/Card";
import { Link } from "../../../components/Link";
import { Text } from "../../../components/Text";
import type { Post } from "../types";
import { Tag } from "../../../components/Tag";
import { PostCard } from "./PostCard";

export interface PostHighlightProps {
  post: Post & { formattedDate?: string; thumbnail: string };
}

export const PostHighlight = ({ post }: PostHighlightProps) => {
  const linkRef = useRef<HTMLAnchorElement>(null);

  return (
    <div>
      <div className="md:hidden">
        <PostCard post={post} />
      </div>

      <div className="hidden md:block">
        <Card
          onClick={() => {
            linkRef.current?.click();
          }}
        >
          <article className="p-16 grid grid-cols-[2fr_1fr] gap-12">
            <div className="flex flex-col">
              <div className="flex-1">
                <Tag>Latest article</Tag>
                <Text as="h2" className="pt-4 text-5xl">
                  {post?.data.title}
                </Text>
                <Text as="time" className="!text-zinc-400 text-xl pt-4 block">
                  {post?.formattedDate}
                </Text>
              </div>

              <Link href={`/blog/${post?.slug}`} ref={linkRef}>
                Read the article
              </Link>
            </div>

            <div>
              <img
                src={post?.thumbnail}
                alt=""
                className="rounded-xl w-[330px] h-[440px] object-cover"
              />
            </div>
          </article>
        </Card>
      </div>
    </div>
  );
};
