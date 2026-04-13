export type FormState = 'idle' | 'loading' | 'success' | 'error';

export type QuizTier = 'starter' | 'growth' | 'scale';

export interface QuizResult {
  score: number;
  tier: QuizTier;
  insights: string[];
  primaryCTA: string;
  primaryCTALabel: string;
  secondaryCTA?: string;
  secondaryCTALabel?: string;
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
  image: string;
  imageAlt?: string;
  author?: string;
  featured: boolean;
  isPlaceholder?: boolean;
  faq: { question: string; answer: string }[];
}
