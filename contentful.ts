import { createClient, Entry } from 'contentful';
import { BlogPost } from './types';

const SPACE_ID = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;
const ENVIRONMENT = import.meta.env.VITE_CONTENTFUL_ENVIRONMENT || 'master';

let client: any = null;

const getClient = () => {
  if (client) return client;
  if (!SPACE_ID || !ACCESS_TOKEN) return null;

  client = createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN,
    environment: ENVIRONMENT,
  });
  return client;
};

export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  const contentfulClient = getClient();
  if (!contentfulClient) {
    console.warn('Contentful credentials missing. Using mock data.');
    return [];
  }

  try {
    const response = await contentfulClient.getEntries({
      content_type: 'blogPost',
      order: ['-sys.createdAt'],
    });

    return response.items.map((item: any) => {
      const fields = item.fields;
      return {
        id: item.sys.id,
        title: fields.title || '',
        slug: fields.slug || '',
        description: fields.description || '',
        category: fields.category || 'Uncategorized',
        publishDate: fields.publishDate || fields.date || item.sys.createdAt,
        readTime: fields.readTime || '5 min',
        content: fields.content || '',
        image: fields.image?.fields?.file?.url ? `https:${fields.image.fields.file.url}` : 'https://picsum.photos/seed/blog/800/600',
        featured: fields.featured || false,
      };
    });
  } catch (error) {
    console.error('Error fetching blog posts from Contentful:', error);
    return [];
  }
};
