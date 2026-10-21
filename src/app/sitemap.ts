import { MetadataRoute } from 'next';
import { fetchBlogPosts } from '@/lib/contentful';

export const revalidate = 3600;

const BASE = 'https://www.detailpro.tech';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await fetchBlogPosts();

  const blogPosts = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.publishDate),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    { url: BASE, lastModified: new Date('2026-09-29'), changeFrequency: 'monthly' as const, priority: 1.0 },
    { url: `${BASE}/apply`, lastModified: new Date('2026-09-29'), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${BASE}/system`, lastModified: new Date('2026-09-29'), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE}/about`, lastModified: new Date('2026-09-29'), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE}/case-studies`, lastModified: new Date('2026-09-29'), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE}/companies`, lastModified: new Date('2026-09-29'), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE}/blog`, lastModified: new Date('2026-09-29'), changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${BASE}/terms`, lastModified: new Date('2026-09-29'), changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${BASE}/privacy`, lastModified: new Date('2026-09-29'), changeFrequency: 'yearly' as const, priority: 0.3 },
    ...blogPosts,
  ];
}
