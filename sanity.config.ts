import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { SanityLogo, SanityNavbar } from "./components";
import { myTheme } from "./sanity.theme";
import { schemaTypes } from "./schemas";
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: "HeyHubble_Content_Studio",
  title: "HeyHubble Content Studio",

  projectId,
  dataset,

  plugins: [deskTool(), visionTool(), vercelDeployTool()],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      navbar: SanityNavbar,
      logo: SanityLogo,
    },
  },
  theme: myTheme,
});
