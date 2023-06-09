import { RichTextComponents } from "@/components/Blog/RichTextComponent";
import { sanityClient } from "@/lib/sanity.client";
import urlFor from "@/lib/urlFor";
import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiChevronsLeft } from "react-icons/fi";
import { PortableTextBlock } from "@portabletext/types";
import placeholder from "@/public/placeholder.webp";
interface BlogPostProps {
  params: {
    categoryArticleSlug: string;
  };
}

export const revalidate = 60; // revalidate page every 60 seconds
const queryRoutes = groq`
  *[_type == "categoryArticle"]{
    slug,
    post->{
      slug
      }
  }
 `;

export async function generateStaticParams() {
  const slugs: Post[] = await sanityClient.fetch(queryRoutes);
  const slugRoutes = slugs.map((slug) => {
    return {
      categoryArticleSlug: slug.slug.current,
      slug: slug.post.slug.current,
    };
  });

  return slugRoutes.map((s) => ({
    categoryArticleSlug: s.categoryArticleSlug,
    slug: s.slug,
  }));
}

const BlogPost = async ({ params: { categoryArticleSlug } }: BlogPostProps) => {
  const queryArticle = groq`
  *[_type == "categoryArticle" && slug.current == $categoryArticleSlug][0]{
    ...,
     author->,
     post->{
        "slug": slug.current
      },
    "categories": categories[]->title
  }
 `;

  const post = await sanityClient.fetch(queryArticle, { categoryArticleSlug });

  return (
    <article className="px-4">
      <section className="mb-12">
        <Image
          src={
            (post?.mainImage && urlFor(post?.mainImage).url()) || placeholder
          }
          width={600}
          height={1000}
          alt={post?.title}
          className="mx-auto"
        />
        <h1 className="text-center text-3xl font-bold">{post?.title}</h1>

        <p className="text-xs text-slate-600 text-center">
          {`Published by ${post?.author?.name}: ${new Date(
            post?._createdAt
          ).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })} `}
        </p>
      </section>
      <section>
        <div className="container mx-auto">
          <Link
            href={`/blog/${post?.post?.slug}`}
            className="text-purple-600 hover:text-purple-800 flex flex-row items-center mb-8"
          >
            <FiChevronsLeft className="w-6 h-6" /> Back to All Articles
          </Link>
          <PortableText value={post?.body} components={RichTextComponents} />
          <Link
            href={`/blog/${post?.post?.slug}`}
            className="text-purple-600 hover:text-purple-800 flex flex-row items-center mt-8"
          >
            <FiChevronsLeft className="w-6 h-6" /> Back to All Articles
          </Link>
        </div>
      </section>
      <section>
        {/* <div className="container mx-auto my-12 border-2 border-purple-600 p-4 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">About the Author</h2>
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
            <div className="flex flex-row items-center">
              <div className="w-24 h-24 rounded-lg overflow-hidden hidden md:flex">
                <Image
                  src={
                    (post?.author?.image &&
                      urlFor(post?.author?.image).url()) ||
                    placeholder
                  }
                  width={100}
                  height={100}
                  alt={post?.author?.name}
                />
              </div>
              <div className="flex flex-col ml-4">
                <h3 className="text-xl font-bold">{post?.author?.name}</h3>
                <PortableText
                  value={
                    post?.author?.bio as PortableTextBlock[] | PortableTextBlock
                  }
                  components={RichTextComponents}
                />
              </div>
            </div>
          </div>
        </div> */}
      </section>
      <section>
        {post?.categoryArticles?.length > 0 && (
          <div className="container mx-auto my-12 border-2 border-purple-600 p-4 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {post?.categoryArticles?.map((categoryArticle: Post) => (
                <div className="flex flex-row items-center" key={post.id}>
                  <p>{`/blog/${post.slug?.current}/${categoryArticle.slug}`}</p>
                  <div className="relative rounded-full flex items-center w-12 h-12 overflow-hidden border">
                    <Image
                      src={
                        (categoryArticle?.mainImage &&
                          urlFor(categoryArticle?.mainImage).url()) ||
                        placeholder
                      }
                      fill
                      className="object-cover object-center"
                      alt={categoryArticle?.author?.name}
                    />
                  </div>
                  <p>{categoryArticle?.title}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </article>
  );
};

export default BlogPost;
