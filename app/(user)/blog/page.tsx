import { BlogList, Button, PreviewBlogList } from "@/components/";
import PreviewSuspense from "@/components/SanityStudio/PreviewSuspense";
import { sanityClient } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { previewData } from "next/headers";
import React from "react";
import { ImSpinner2 } from "react-icons/im";
const query = groq`
*[_type == "post"]{
  ...,
  "author": author->name,
  "categories": categories[]->title
} | order(_createdAt desc)
`;

const Blog = async () => {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div
            role="status"
            className="flex flex-row items-center justify-center text-purple-600 py-8"
          >
            <ImSpinner2 className="w-8 h-8 animate-spin mr-4" />
            <p className="font-bold text-3xl ">Loading Preview Data</p>
          </div>
        }
      >
        <div className="">
          <PreviewBlogList query={query} />
        </div>
      </PreviewSuspense>
    );
  }

  const posts = await sanityClient.fetch(query);

  return (
    <div className="bg-[#FEF9EF] h-full">
      <div
        className="w-full bg-purple-600 text-white"
        style={{ clipPath: "polygon(0 0%, 100% 0, 100% 80%, 0 100%)" }}
      >
        <div className="flex flex-col lg:items-center lg:justify-center h-full py-24 px-4">
          <h1 className="text-4xl font-bold mb-4">
            Insights and Analysis to Help You Navigate the NDIS Landscape
          </h1>
          <h2 className="text-xl mb-8">
            Empowering Healthcare Providers and Participants to Succeed Together
          </h2>
        </div>
      </div>
      <div className="py-12 bg-[#FEF9EF] container mx-auto">
        <BlogList posts={posts} />
      </div>
      <div className="w-full bg-[#53E6CC] text-slate-900">
        <div className="flex flex-col items-center justify-center h-full py-12">
          <h1 className="text-4xl font-bold mb-4">
            Get started with HeyHubble
          </h1>
          <p>
            Whether you are an NDIS participant, or a service provider, our
            friendly team is happy to help you!
          </p>
          <div className="flex flex-col md:flex-row mt-8">
            <Button label="Get Started" variant="is-primary" className="mr-4" />
            <Button label="Request a service" variant="is-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
