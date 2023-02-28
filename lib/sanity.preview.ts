"use client";
import { dataset, projectId } from "lib/sanity.client";
import { definePreview } from "next-sanity/preview";

const onPublicAccessOnly = () => {
  throw new Error("You must be signed in to access this resource");
};

if (!projectId || !dataset) {
  throw new Error("Missing Sanity project ID or dataset name");
}

export const usePreview = definePreview({
  projectId,
  dataset,
  onPublicAccessOnly,
});
