import { BlogPost } from './types';

// This file is now empty of local articles as the app uses Contentful as the sole source of truth.
// If you need to add local articles back, define them in the raw_posts array.

const raw_posts: BlogPost[] = [];

const placeholders: BlogPost[] = [];

export const BLOG_POSTS: BlogPost[] = [
  ...raw_posts,
  ...placeholders
];
