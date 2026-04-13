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
    { url: 'https://www.detailpro.tech', lastModified: new Date('2026-03-17'), changeFrequency: 'monthly' as const, priority: 1.0 },
    { url: 'https://www.detailpro.tech/software', lastModified: new Date('2026-04-08'), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: 'https://www.detailpro.tech/ads', lastModified: new Date('2026-04-08'), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: 'https://www.detailpro.tech/website', lastModified: new Date('2026-04-08'), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: 'https://www.detailpro.tech/blog', lastModified: new Date('2026-04-13'), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.detailpro.tech/terms', lastModified: new Date('2026-03-17'), changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: 'https://www.detailpro.tech/privacy', lastModified: new Date('2026-03-17'), changeFrequency: 'yearly' as const, priority: 0.3 },
    ...blogPosts,
  ];
}
