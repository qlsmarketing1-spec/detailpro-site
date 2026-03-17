import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BlogCard from '@/components/blog/BlogCard';
import FeaturedBlogCard from '@/components/blog/FeaturedBlogCard';
import { fetchBlogPosts } from '@/lib/contentful';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Auto Detailing Business Blog | Tips & Growth Systems',
  description: 'Systems, strategies, and insights for detailers ready to dominate their local market.',
  alternates: {
    canonical: 'https://www.detailpro.tech/blog',
  },
};

export default async function BlogPage() {
  const posts = await fetchBlogPosts();
  const featured = posts.find((p) => p.featured) || posts[0];
  const rest = posts.filter((p) => p.id !== featured?.id);

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-[#e7e6ee] mb-4">The Knowledge Hub</h1>
          <p className="text-[#a3a3a3] text-xl max-w-2xl mx-auto">
            Systems, strategies, and insights for detailers ready to dominate their local market.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-[#a3a3a3] text-xl">No posts yet. Check back soon.</p>
          </div>
        ) : (
          <>
            {featured && (
              <FeaturedBlogCard featured={featured} trending={rest} />
            )}
            {rest.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            )}
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
