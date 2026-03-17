import { MetadataRoute } from 'next';
import { fetchBlogPosts } from '@/lib/contentful';

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await fetchBlogPosts();

  const blogPosts = posts.map((post) => ({
    url: `https://www.detailpro.tech/blog/${post.slug}`,
    lastModified: new Date(post.publishDate),
    changeFrequency: 'monthly' as const,
    priority: 0.65,
  }));

  return [
    { url: 'https://www.detailpro.tech', lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: 'https://www.detailpro.tech/blog', lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
    { url: 'https://www.detailpro.tech/terms', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    { url: 'https://www.detailpro.tech/privacy', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    ...blogPosts,
  ];
}
