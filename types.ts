export interface ContentfulAsset {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    file: {
      url: string;
      details: {
        size: number;
        image?: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      contentType: string;
    };
  };
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  publishDate: string;
  readTime: string;
  content: string;
  image: string; // URL from Asset
  imageAlt?: string;
  author?: string;
  featured: boolean;
  isPlaceholder?: boolean;
}
