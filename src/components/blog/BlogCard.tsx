import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/lib/types';

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#5e25fa]/40 transition-colors">
        <div className="relative aspect-video">
          <Image
            src={post.image}
            alt={post.imageAlt || post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <div className="p-6">
          <span className="text-[#5e25fa] text-xs font-semibold uppercase tracking-widest">{post.category}</span>
          <h3 className="text-[#e7e6ee] font-bold text-lg mt-2 mb-2 group-hover:text-white transition-colors line-clamp-2">{post.title}</h3>
          <p className="text-[#a3a3a3] text-sm line-clamp-2 mb-4">{post.description}</p>
          <div className="flex items-center gap-3 text-xs text-[#a3a3a3]">
            <span>{new Date(post.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span>·</span>
            <span>{post.readTime} read</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
