export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  publishDate: string;
  readTime: string;
  content: string;
  image: string;
  imageAlt?: string;
  author?: string;
  featured: boolean;
  isPlaceholder?: boolean;
}
