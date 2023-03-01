import { ClientSideRoute, Tag } from "@/components";
import urlFor from "@/lib/urlFor";
import Image from "next/image";
import React from "react";
import { FiChevronsRight } from "react-icons/fi";
import BlogPost from "./BlogPost";
type BlogListProps = {
  posts: Post[];
};

export const BlogList = ({ posts }: BlogListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {posts.map((post) => (
        <BlogPost key={post.title} post={post} />
      ))}
    </div>
  );
};
