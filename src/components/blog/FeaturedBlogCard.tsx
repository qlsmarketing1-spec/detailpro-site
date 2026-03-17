import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/lib/types';

interface FeaturedBlogCardProps {
  featured: BlogPost;
  trending: BlogPost[];
}

export default function FeaturedBlogCard({ featured, trending }: FeaturedBlogCardProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
      {/* Featured (2/3) */}
      <Link href={`/blog/${featured.slug}`} className="lg:col-span-2 group block">
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#5e25fa]/40 transition-colors h-full">
          <div className="relative aspect-video">
            <Image
              src={featured.image}
              alt={featured.imageAlt || featured.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              priority
              unoptimized
            />
          </div>
          <div className="p-8">
            <span className="text-[#5e25fa] text-xs font-semibold uppercase tracking-widest">{featured.category}</span>
            <h2 className="text-[#e7e6ee] font-bold text-2xl mt-2 mb-3 group-hover:text-white transition-colors">{featured.title}</h2>
            <p className="text-[#a3a3a3] mb-4">{featured.description}</p>
            <div className="flex items-center gap-3 text-xs text-[#a3a3a3]">
              <span>{new Date(featured.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              <span>·</span>
              <span>{featured.readTime} read</span>
            </div>
          </div>
        </div>
      </Link>

      {/* Trending (1/3) */}
      <div className="flex flex-col gap-4">
        <h3 className="text-[#a3a3a3] text-sm font-semibold uppercase tracking-widest">Trending</h3>
        {trending.slice(0, 3).map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-[#5e25fa]/40 transition-colors">
              <span className="text-[#5e25fa] text-xs font-semibold uppercase tracking-widest">{post.category}</span>
              <h4 className="text-[#e7e6ee] font-semibold text-sm mt-1 group-hover:text-white transition-colors line-clamp-2">{post.title}</h4>
              <p className="text-[#a3a3a3] text-xs mt-1">{post.readTime} read</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
