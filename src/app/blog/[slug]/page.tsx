import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ArticleCTA from '@/components/blog/ArticleCTA';
import { fetchBlogPosts, fetchBlogPostBySlug } from '@/lib/contentful';

export const revalidate = 3600;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await fetchBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchBlogPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.image],
      url: `https://www.detailpro.tech/blog/${post.slug}`,
    },
    alternates: {
      canonical: `https://www.detailpro.tech/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await fetchBlogPostBySlug(slug);
  if (!post) notFound();

  const canonicalUrl = `https://www.detailpro.tech/blog/${post.slug}`;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Blog',
        item: 'https://www.detailpro.tech/blog',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: post.title,
        item: canonicalUrl,
      },
    ],
  };

  const faqJsonLd = post.faq.length >= 2 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faq.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  } : null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.publishDate,
    author: { '@type': 'Organization', name: 'DetailPro' },
    publisher: {
      '@type': 'Organization',
      name: 'DetailPro',
      logo: { '@type': 'ImageObject', url: 'https://storage.googleapis.com/detail_pro_main/Logos/DetailPro_FinalLogos-02-cropped.svg' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-24">
        <article>
          {/* Category badge */}
          <span className="inline-block bg-[#5e25fa]/20 text-[#5e25fa] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold text-[#e7e6ee] mb-6 leading-tight">{post.title}</h1>

          {/* Author row */}
          <div className="flex items-center gap-3 mb-8 pb-8 border-b border-white/10">
            <div className="w-10 h-10 bg-[#5e25fa] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
              DP
            </div>
            <div>
              <p className="text-[#e7e6ee] font-semibold text-sm">DetailPro Team · Knowledge Hub</p>
              <p className="text-[#a3a3a3] text-xs">
                {new Date(post.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} · {post.readTime} read
              </p>
            </div>
          </div>

          {/* Featured image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-12">
            <Image
              src={post.image}
              alt={post.imageAlt || post.title}
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </div>

          {/* Content */}
          <div className="article-content">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
          </div>
        </article>

        <ArticleCTA />
      </main>
      <Footer />
    </>
  );
}
