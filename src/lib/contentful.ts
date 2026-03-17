import { createClient } from 'contentful';
import { BlogPost } from './types';

let client: ReturnType<typeof createClient> | null = null;

function getClient() {
  if (!client) {
    const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
    const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
    if (!spaceId || !accessToken) return null;
    client = createClient({
      space: spaceId,
      accessToken: accessToken,
      environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
    });
  }
  return client;
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  const c = getClient();
  if (!c) return [];
  try {
    const response = await c.getEntries({
      content_type: 'blogPost',
      order: ['-fields.publishDate'] as any,
    });

    return response.items.map((item: any) => ({
      id: item.sys.id,
      title: item.fields.title || '',
      slug: item.fields.slug || '',
      description: item.fields.description || '',
      category: item.fields.category || 'Uncategorized',
      publishDate: item.fields.publishDate || item.sys.createdAt,
      readTime: item.fields.readTime || '5 min',
      content: item.fields.content || '',
      image: item.fields.image?.fields?.file?.url
        ? `https:${item.fields.image.fields.file.url}`
        : 'https://picsum.photos/seed/blog/800/600',
      featured: item.fields.featured || false,
    }));
  } catch {
    return [];
  }
}

export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const c = getClient();
  if (!c) return null;
  try {
    const response = await c.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      limit: 1,
    } as any);

    if (!response.items.length) return null;

    const item = response.items[0] as any;
    return {
      id: item.sys.id,
      title: item.fields.title || '',
      slug: item.fields.slug || '',
      description: item.fields.description || '',
      category: item.fields.category || 'Uncategorized',
      publishDate: item.fields.publishDate || item.sys.createdAt,
      readTime: item.fields.readTime || '5 min',
      content: item.fields.content || '',
      image: item.fields.image?.fields?.file?.url
        ? `https:${item.fields.image.fields.file.url}`
        : 'https://picsum.photos/seed/blog/800/600',
      featured: item.fields.featured || false,
    };
  } catch {
    return null;
  }
}
