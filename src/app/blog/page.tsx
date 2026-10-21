import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BlogCard from '@/components/blog/BlogCard';
import FeaturedBlogCard from '@/components/blog/FeaturedBlogCard';
import { fetchBlogPosts } from '@/lib/contentful';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Blog: Playbooks for Local Service Owners',
  description: 'Plain-English playbooks on systems, calls, booking, and growth for local service owners building a real company.',
  alternates: {
    canonical: 'https://www.detailpro.tech/blog',
  },
  openGraph: {
    title: 'Blog: Playbooks for Local Service Owners | Service Pro',
    description: 'Plain-English playbooks on systems, calls, booking, and growth for local service owners building a real company.',
    url: 'https://www.detailpro.tech/blog',
    images: ['/og/blog.jpg'],
  },
  twitter: { card: 'summary_large_image', images: ['/og/blog.jpg'] },
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
          <h1 className="text-5xl md:text-6xl font-bold text-[#e7e6ee] mb-4">The Service Pro Blog</h1>
          <p className="text-[#a3a3a3] text-xl max-w-2xl mx-auto">
            Plain-English playbooks on systems, calls, booking, and growth for owners building a real company.
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
