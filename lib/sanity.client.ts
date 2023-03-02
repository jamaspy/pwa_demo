import { createClient } from "next-sanity";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;
export const useCdn = process.env.NODE_ENV === "production";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: "2022-03-25",
  useCdn,
});
