## Introduction

With the release of Next13 and the major changes to the framework, I wanted to create a new project to explore the new features and learn more about the framework.
So, I thought that I would try and replicate the current Webflow site using the same technology the app uses. To allow no Engineers to maintain the content, I decided to use Sanity Studio as the CMS and managed to tweak it to be self-hosted with Auth protection.

## Summary
**Next13** website that uses **Sanity v3** as the CMS, styled with **Tailwind 3** and deployed to Vercel. 


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You will need `.env.local` file with the following variables:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID= # Your Sanity project ID
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2022-11-15
```


## What's included/what I learned

- [NextJS13](https://nextjs.org/)
  - Server Components
  - `/app` folder
  - Image Component
  - Automatic Static Optimization
  - Incremental Static Regeneration
  - Route Grouping
  - Shared Layouts
  - Loading and Error States
- [Sanity Studio (Self Hosted)](https://www.sanity.io/)
  - Self-hosting Sanity Studio
  - Sanity Image
  - Sanity Portable Text
  - Sanity Schema
  - Customise Sanity Studio
  - Deploy from Studio


