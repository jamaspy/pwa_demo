import { ClientSideRoute, Tag } from "@/components";
import urlFor from "@/lib/urlFor";
import Image from "next/image";
import React from "react";
import { FiChevronsRight } from "react-icons/fi";
const BlogPost = ({ post }: { post: Post }) => {
  return (
    <ClientSideRoute key={post._id} route={`/blog/${post.slug?.current}`}>
      <div className="bg-[#FEF9EF] flex-1 cursor-pointer hover:shadow-lg transition-shadow duration-200 border border-purple-600 rounded-tl-3xl rounded-br-3xl shadow p-8 flex flex-col justify-between">
        <div className="">
          <Image
            src={urlFor(post.mainImage).url()}
            width={600}
            height={1000}
            alt={post.title}
            className="mx-auto"
          />
          <h1 className="font-bold text-3xl">{post.title}</h1>
          <div className="flex items-center mt-2 text-purple-600 hover:text-purple-800">
            <p className="my-2 font-bold ">Read Article</p>{" "}
            <FiChevronsRight className="w-6 h-6 ml-2" />
          </div>
        </div>

        <div className="mt-4">
          <p className="">
            {`Published by ${post?.author}: ${new Date(
              post._createdAt
            ).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })} `}
          </p>
          <div className="flex flex-row flex-wrap mt-4">
            {post.categories.map((category, index) => (
              <Tag key={`${index}${category}`} tag={category} />
            ))}
          </div>
        </div>
      </div>
    </ClientSideRoute>
  );
};

export default BlogPost;
