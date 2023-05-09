type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Post extends Base {
  _type: "post";
  title: string;
  author: Author;
  slug: Slug;
  body: Block[];
  post: Post;
  mainImage: Image;
  categories: Category[];
  description: string;
}

interface Author extends Base {
  _type: "author";
  name: string;
  image: Image;
  slug: Slug;
  bio: Block[];
}

interface Category extends Base {
  _type: "category";
  title: string;
  slug: Slug;
  description: string;
}

interface Slug extends Base {
  _type: "slug";
  current: string;
}

interface Image extends Base {
  _type: "image";
  asset: Asset;
  alt: string;
}

interface Asset extends Base {
  _type: "sanity.imageAsset";
  url: string;
  metadata: {
    dimensions: {
      aspectRatio: number;
      height: number;
      width: number;
    };
    palette: {
      darkMuted: {
        background: string;
        foreground: string;
        population: number;
        title: string;
      };
      darkVibrant: {
        background: string;
        foreground: string;
        population: number;
        title: string;
      };
      dominant: {
        background: string;
        foreground: string;
        population: number;
        title: string;
      };
      lightMuted: {
        background: string;
        foreground: string;
        population: number;
        title: string;
      };
      lightVibrant: {
        background: string;
        foreground: string;
        population: number;
        title: string;
      };
      muted: {
        background: string;
        foreground: string;
        population: number;
        title: string;
      };
      vibrant: {
        background: string;
        foreground: string;
        population: number;

        title: string;
      };
    };
    lqip: string;
    hasAlpha: boolean;
    isOpaque: boolean;
  };
}

interface Block {
  _type: "block";
  children: Span[];
  markDefs: MarkDef[];
  style: string;
}

interface Span {
  _type: "span";
  marks: string[];
  text: string;
}

interface MarkDef {
  _type: "link";
  href: string;
}
