import { getCollection } from "astro:content";

export const getAllPosts = async () => {
  const formatter = new Intl.DateTimeFormat("en-US", { dateStyle: "long" });

  const allBlogPosts = (await getCollection("blog"))
    .sort((a, b) => (a.data.date > b.data.date ? -1 : 1))
    .map((blog) => {
      return {
        ...blog,
        formattedDate: formatter.format(blog.data.date),
        thumbnail: `/blog/${blog.slug}_thumbnail.jpg`,
      };
    });

  return allBlogPosts;
};
