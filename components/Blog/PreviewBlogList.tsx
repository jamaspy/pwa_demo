"use client";

import { usePreview } from "@/lib/sanity.preview";
import { BlogList } from "./BlogList";

export function PreviewBlogList({ query }: { query: string }) {
  const posts = usePreview(null, query);
  console.log("Loading PreviewBlogList", posts);
  return <BlogList posts={posts} />;
}
