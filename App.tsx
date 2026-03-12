import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import Markdown from 'react-markdown';
import { BLOG_POSTS } from './blogData';
import { BlogPost } from './types';
import { fetchBlogPosts } from './contentful';

// --- Routing Helpers ---
const slugify = (text: string) => 
  text.toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');

const formatDate = (dateString: string) => {
  if (!dateString) return '';
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  } catch (e) {
    return dateString;
  }
};

// --- Sub-components ---

// Explicit interface for BlogCard props to satisfy strict TypeScript checking
interface BlogCardProps {
  post: BlogPost;
  variant?: 'featured' | 'trending' | 'grid';
  onNavigate: (path: string) => void;
  posts?: BlogPost[];
}

// Typing BlogCard as React.FC ensures standard props like 'key' are correctly handled
const BlogCard: React.FC<BlogCardProps> = ({ post, variant = 'grid', onNavigate, posts = [] }) => {
  const isPlaceholder = post.isPlaceholder;

  if (variant === 'featured') {
    return (
      <div className="flex flex-col lg:flex-row gap-8 mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="lg:w-2/3">
          <div 
            className={`aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 group cursor-pointer shadow-2xl relative ${isPlaceholder ? 'opacity-50 grayscale' : ''}`}
            onClick={!isPlaceholder ? () => onNavigate(`/blog/${post.slug}`) : undefined}
          >
            <img 
              src={post.image} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              alt={post.title} 
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            {isPlaceholder && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon icon="mdi-light:file" className="w-16 h-16 text-white/20" />
              </div>
            )}
          </div>
          <div className="mt-8 text-left">
            <h2 
              className={`text-3xl md:text-5xl font-bold mb-6 leading-tight transition-colors ${isPlaceholder ? 'text-neutral-600' : 'text-[#e7e6ee] hover:text-[#5e25fa] cursor-pointer'}`}
              onClick={!isPlaceholder ? () => onNavigate(`/blog/${post.slug}`) : undefined}
            >
              {post.title}
            </h2>
            <p className="text-neutral-400 text-lg mb-8 leading-relaxed max-w-3xl">{post.description}</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#5e25fa] flex items-center justify-center font-black text-[#e7e6ee] text-xs">DP</div>
              <div className="flex flex-col">
                <span className="text-[#e7e6ee] font-bold text-sm">DetailPro Team <span className="text-neutral-500 font-normal">· Knowledge Hub</span></span>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs font-bold text-[#5e25fa] bg-[#5e25fa]/10 px-2 py-0.5 rounded uppercase tracking-wider">{post.category}</span>
                  <span className="text-neutral-500 text-xs">{formatDate(post.publishDate)} · {post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3">
          <div className="bg-[#050119]/40 border border-white/10 rounded-2xl p-6 h-full backdrop-blur-sm">
            <h3 className="text-xl font-bold text-[#e7e6ee] mb-8 flex items-center gap-2">
              <Icon icon="mdi-light:chart-line" className="w-5 h-5 text-[#5e25fa]" />
              Trending on DetailPro
            </h3>
            <div className="space-y-8">
              {posts.slice(0, 4).filter(p => !p.isPlaceholder).map((trending) => (
                <div key={trending.id} className="group cursor-pointer flex gap-4" onClick={() => onNavigate(`/blog/${trending.slug}`)}>
                  <div className="w-24 h-16 shrink-0 rounded-lg overflow-hidden border border-white/5 bg-neutral-800">
                    <img 
                      src={trending.image} 
                      className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-500" 
                      alt={trending.title}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="flex flex-col justify-center text-left">
                    <h4 className="text-neutral-500 font-bold text-sm line-clamp-2 leading-snug group-hover:text-[#5e25fa] transition-colors">{trending.title}</h4>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-[10px] text-neutral-600">{formatDate(trending.publishDate)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`group flex flex-col h-full bg-[#050119]/20 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 ${!isPlaceholder ? 'cursor-pointer hover:border-[#5e25fa]/20' : 'cursor-default'}`}
      onClick={!isPlaceholder ? () => onNavigate(`/blog/${post.slug}`) : undefined}
    >
      <div className={`aspect-video overflow-hidden bg-[#050119] ${isPlaceholder ? 'opacity-30' : ''}`}>
        <img 
          src={post.image} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          alt={post.title} 
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="p-6 flex flex-col flex-1 text-left">
        <h3 className={`text-lg font-bold mb-3 transition-colors line-clamp-2 leading-tight ${isPlaceholder ? 'text-neutral-600' : 'text-[#e7e6ee] group-hover:text-[#5e25fa]'}`}>{post.title}</h3>
        <p className="text-neutral-500 text-sm line-clamp-2 mb-6 leading-relaxed flex-1">{post.description}</p>
        <div className="flex items-center gap-2 mt-auto">
          <span className="text-[10px] text-neutral-600">{formatDate(post.publishDate)} · {post.readTime}</span>
          <span className="text-[10px] text-[#5e25fa]/40 bg-[#5e25fa]/5 px-2 py-0.5 rounded uppercase font-bold tracking-widest">{post.category}</span>
        </div>
      </div>
    </div>
  );
};

const ArticleView = ({ post, onBack, onGoHome }: { post: BlogPost; onBack: () => void; onGoHome: () => void }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [post]);

  return (
    <div className="max-w-4xl mx-auto px-6 pt-16 pb-40 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-neutral-500 hover:text-[#e7e6ee] transition-colors mb-12 group"
      >
        <Icon icon="mdi-light:arrow-left" className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        Back to Blog
      </button>

      <div className="mb-12 text-left">
        <div className="inline-block px-3 py-1 rounded bg-[#5e25fa]/10 border border-[#5e25fa]/20 text-[#5e25fa] text-xs font-bold uppercase tracking-widest mb-6">
          {post.category}
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-[#e7e6ee] tracking-tight mb-8 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center gap-6 py-8 border-y border-white/5">
          <div className="w-12 h-12 rounded-full bg-[#5e25fa] flex items-center justify-center font-black text-[#e7e6ee]">DP</div>
          <div className="flex flex-col">
            <span className="text-[#e7e6ee] font-bold">{post.author || 'DetailPro Team'}</span>
            <span className="text-neutral-500 text-sm">Knowledge Hub · {formatDate(post.publishDate)} · {post.readTime} Read</span>
          </div>
        </div>
      </div>

      <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 mb-20 shadow-2xl">
        <img 
          src={post.image} 
          className="w-full h-full object-cover" 
          alt={post.title} 
          fetchPriority="high"
          decoding="async"
        />
      </div>

      <div className="article-content text-left text-neutral-400 prose prose-invert prose-purple max-w-none">
        {typeof post.content === 'string' ? (
          <Markdown>{post.content}</Markdown>
        ) : (
          post.content
        )}
      </div>

      <div className="mt-32 pt-20 border-t border-white/5 text-center">
        <div className="bg-[#050119] rounded-[2.5rem] p-8 md:p-16 border border-white/10 shadow-3xl">
          <h2 className="text-3xl font-bold text-[#e7e6ee] mb-4">Want to implement these systems?</h2>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto">Our growth platform helps shops scale from $10k to $30k+ per month with automated follow-ups and high-intent ads.</p>
          <button 
            onClick={onGoHome}
            className="bg-[#e7e6ee] text-[#050119] font-bold px-10 py-4 rounded-full hover:bg-neutral-200 transition-all flex items-center gap-2 mx-auto"
          >
            Book A Demo
            <Icon icon="mdi-light:arrow-right" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

const LegalView = ({ type, onBack }: { type: 'terms' | 'privacy'; onBack: () => void }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  const content = type === 'terms' ? (
    <>
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="italic text-neutral-400 mb-8">Effective Date: January 26, 2026</p>
      <p className="mb-6">Welcome to DetailPro. These Terms of Service ("Terms") govern your use of the website detailpro.tech and the DetailPro platform and services operated by MOTO Technology, LLC ("DetailPro," "we," "us," or "our").</p>
      <p className="mb-6">By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, do not use our services.</p>
      
      <h2 className="text-xl font-bold mt-8 mb-4">1. Description of Services</h2>
      <p className="mb-6">DetailPro provides a sales and growth system built for auto detailing businesses. Our services include a detailing-industry-specific CRM, lead management tools, automated follow-up systems, and optional advertising management services. The specific services and fees applicable to your use are governed by your Service Agreement with us.</p>
      
      <h2 className="text-xl font-bold mt-8 mb-4">2. Account Registration</h2>
      <p className="mb-6">To use our services, you must create an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.</p>
      
      <h2 className="text-xl font-bold mt-8 mb-4">3. Acceptable Use</h2>
      <p className="mb-4">You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Use the services in any way that violates any applicable law or regulation</li>
        <li>Upload or transmit viruses, malware, or other malicious code</li>
        <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
        <li>Use the services to send spam, unsolicited messages, or harassing communications</li>
        <li>Interfere with or disrupt the integrity or performance of the services</li>
        <li>Reverse engineer, decompile, or disassemble any portion of the services</li>
        <li>Sublicense, resell, or provide access to the services to third parties without authorization</li>
      </ul>
      
      <h2 className="text-xl font-bold mt-8 mb-4">4. User Content</h2>
      <p className="mb-6">You retain ownership of all content you upload, submit, or input into the services ("User Content"), including customer leads, business data, and images. By uploading User Content, you grant us a non-exclusive, royalty-free license to use, store, and process such content solely to provide and improve our services to you. You are solely responsible for ensuring that your User Content does not violate any third-party rights or applicable laws.</p>
      
      <h2 className="text-xl font-bold mt-8 mb-4">5. Intellectual Property</h2>
      <p className="mb-6">The DetailPro platform, including all software, systems, processes, methodologies, templates, automations, workflows, and know-how, is and remains the executive property of MOTO Technology, LLC. You receive only the limited license rights expressly granted in your Service Agreement. No title to or ownership of the platform or any intellectual property rights therein is transferred to you. All rights not expressly granted are reserved by DetailPro.</p>
      
      <h2 className="text-xl font-bold mt-8 mb-4">6. Payment Terms</h2>
      <p className="mb-6">Payment terms, fees, and billing arrangements are governed by your Service Agreement. All payments are processed through Stripe. You agree to provide accurate billing information and authorize us to charge the applicable fees. If you elect advertising management services, you understand that advertising spend is paid directly by you to the applicable advertising platforms (such as Google and Meta) and is separate from fees paid to DetailPro.</p>
      
      <h2 className="text-xl font-bold mt-8 mb-4">7. Third-Party Services</h2>
      <p className="mb-6">Our services integrate with third-party services including Stripe for payment processing and Twilio for SMS and messaging. Your use of these third-party services is subject to their respective terms of service and privacy policies. We are not responsible for the acts or omissions of any third-party service providers.</p>
      
      <h2 className="text-xl font-bold mt-8 mb-4">8. Disclaimers</h2>
      <p className="mb-6">THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT GUARANTEE THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.</p>
      <p className="mb-6">DetailPro does not guarantee any specific results, including but not limited to: a specific number of leads, a specific cost per lead, a specific number of booked jobs, revenue growth, profitability, or return on advertising spend. Performance depends on many factors including market conditions, competition, your responsiveness, advertising budget, seasonality, and your pricing and service quality.</p>
      
      <h2 className="text-xl font-bold mt-8 mb-4">9. Limitation of Liability</h2>
      <p className="mb-6">TO THE MAXIMUM EXTENT PERMITTED BY LAW, DETAILPRO'S TOTAL LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS OR YOUR USE OF THE SERVICES SHALL NOT EXCEED THE AMOUNT OF FEES ACTUALLY PAID BY YOU TO DETAILPRO DURING THE TWELVE (12) MONTHS PRECEDING THE CLAIM.</p>
      <p className="mb-6">IN NO EVENT SHALL DETAILPRO BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOST PROFITS, LOST REVENUE, LOST DATA, OR BUSINESS INTERRUPTION, EVEN IF DETAILPRO HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
      
      <h2 className="text-xl font-bold mt-8 mb-4">10. Indemnification</h2>
      <p className="mb-6">You agree to indemnify, defend, and hold harmless DetailPro and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys' fees) arising out of or related to your use of the services, your User Content, your violation of these Terms, or your violation of any rights of another party.</p>
      
      <h2 className="text-xl font-bold mt-8 mb-4">11. Termination</h2>
      <p className="mb-6">We may suspend or terminate your access to the services at any time for violation of these Terms or for any other reason as described in your Service Agreement. Upon termination, your right to use the services will immediately cease. You may request export of your CRM data and customer information following termination, as provided in your Service Agreement.</p>
      
      <h2 className="text-xl font-bold mt-8 mb-4">12. Dispute Resolution</h2>
      <p className="mb-6">Any dispute, controversy, or claim arising out of or relating to these Terms shall be settled by binding arbitration administered by the American Arbitration Association (AAA) in accordance with its Commercial Arbitration Rules. The arbitration shall take place in Minnesota. The arbitrator's decision shall be final and binding, and judgment on the award may be entered in any court having jurisdiction. Each party shall bear its own costs and attorneys' fees in connection with any arbitration, unless the arbitrator determines that a party's claims or defenses were frivolous.</p>
      
      <h2 className="text-xl font-bold mt-8 mb-4">13. Governing Law</h2>
      <p className="mb-6">These Terms shall be governed by and construed in accordance with the laws of the State of Minnesota, without regard to its conflict of law provisions.</p>
      
      <h2 className="text-xl font-bold mt-8 mb-4">14. Changes to These Terms</h2>
      <p className="mb-6">We may update these Terms from time to time. We will notify you of any material changes by posting the new Terms on our website and updating the "Effective Date" above. Your continued use of our services after such changes constitutes acceptance of the updated Terms.</p>
      
      <h2 className="text-xl font-bold mt-8 mb-4">15. Severability</h2>
      <p className="mb-6">If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.</p>
      
      <h2 className="text-xl font-bold mt-8 mb-4">16. Entire Agreement</h2>
      <p className="mb-6">These Terms, together with your Service Agreement and our Privacy Policy, constitute the entire agreement between you and DetailPro regarding your use of the services and supersede all prior agreements and understandings.</p>
      
      <h2 className="text-xl font-bold mt-8 mb-4">17. Contact Us</h2>
      <p className="mb-4">If you have questions about these Terms, please contact us at:</p>
      <div className="text-neutral-300">
        <p className="font-bold">MOTO Technology, LLC</p>
        <p>6925 Lake Harrison Cir</p>
        <p>Chanhassen, MN 55317</p>
        <p>Email: information@detailpro.tech</p>
      </div>
    </>
  ) : (
    <>
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="italic text-neutral-400 mb-8">Effective Date: January 26, 2026</p>
      <p className="mb-6">MOTO Technology, LLC ("DetailPro," "we," "us," or "our") operates the website detailpro.tech and provides the DetailPro platform and related services. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our website and services.</p>
      <p className="mb-6">By using DetailPro, you agree to the collection and use of information as described in this Privacy Policy. If you do not agree with these practices, please do not use our services.</p>
      
      <h2 className="text-xl font-bold mt-8 mb-4">1. Information We Collect</h2>
      <p className="mb-4 text-neutral-300">We collect information you provide directly to us, including:</p>
      <div className="space-y-4 mb-6">
        <p><span className="font-bold">Account Information:</span> When you create an account, we collect your name, email address, phone number, business name, and business address.</p>
        <p><span className="font-bold">Payment Information:</span> When you make purchases, our payment processor (Stripe) collects payment card information. We do not store your full payment card details on our servers.</p>
        <p><span className="font-bold">Business Data:</span> Information you upload or input into the platform, including customer leads (names, contact information, vehicle information, addresses), business metrics, and communications.</p>
        <p><span className="font-bold">Photos and Media:</span> Information you upload related to your detailing business or customer vehicles.</p>
        <p><span className="font-bold">Communications:</span> Records of your communications with us, including support requests and feedback.</p>
      </div>
      
      <h2 className="text-xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
      <p className="mb-4 text-neutral-300">We use the information we collect to:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Provide, maintain, and improve our services</li>
        <li>Process transactions and send related information</li>
        <li>Set up and manage your account</li>
        <li>Facilitate lead management and customer communications on your behalf</li>
        <li>Manage advertising campaigns (if you elect this service)</li>
        <li>Send administrative messages, updates, and promotional communications</li>
        <li>Respond to your comments, questions, and support requests</li>
        <li>Comply with legal obligations and protect our rights</li>
      </ul>
      
      <h2 className="text-xl font-bold mt-8 mb-4">3. Information Sharing</h2>
      <p className="mb-4 text-neutral-300">We may share your information in the following circumstances:</p>
      <div className="space-y-4 mb-6">
        <p><span className="font-bold">Service Providers:</span> We share information with third-party vendors who perform services on our behalf, including Stripe (payment processing) and Twilio (SMS and messaging services).</p>
        <p><span className="font-bold">Advertising Platforms:</span> If you elect advertising management services, we may share necessary information with advertising platforms (such as Google Ads and Meta/Facebook) to manage your campaigns.</p>
        <p><span className="font-bold">Legal Requirements:</span> We may disclose information if required by law, legal process, or government request, or to protect our rights, privacy, safety, or property.</p>
        <p><span className="font-bold">Business Transfers:</span> If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</p>
      </div>
      <p className="mb-6 font-bold text-[#e7e6ee] italic">We do not sell your personal information to third parties.</p>
      
      <h2 className="text-xl font-bold mt-8 mb-4">4. Data Security</h2>
      <p className="mb-6">We implement reasonable administrative, technical, and physical safeguards to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.</p>
      
      <h2 className="text-xl font-bold mt-8 mb-4">5. Data Retention</h2>
      <p className="mb-6">We retain your information for as long as your account is active or as needed to provide you services. We will retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements. Upon termination of your account, you may request export of your CRM data and customer information.</p>
      
      <h2 className="text-xl font-bold mt-8 mb-4">6. Your Rights and Choices</h2>
      <p className="mb-4 text-neutral-300">Depending on your location, you may have certain rights regarding your personal information:</p>
      <div className="space-y-4 mb-6">
        <p><span className="font-bold">Access and Portability:</span> You may request a copy of the personal information we hold about you.</p>
        <p><span className="font-bold">Correction:</span> You may request that we correct inaccurate or incomplete information.</p>
        <p><span className="font-bold">Deletion:</span> You may request that we delete your personal information, subject to certain exceptions.</p>
        <p><span className="font-bold">Opt-Out:</span> You may opt out of receiving promotional communications by following the unsubscribe instructions in those messages.</p>
      </div>
      <p className="mb-6">To exercise these rights, please contact us at the information provided below.</p>
      
      <h2 className="text-xl font-bold mt-8 mb-4">7. Third-Party Services</h2>
      <p className="mb-6">Our services integrate with third-party services including Stripe for payment processing and Twilio for messaging. These services have their own privacy policies, and we encourage you to review them. We are not responsible for the privacy practices of these third parties.</p>
      
      <h2 className="text-xl font-bold mt-8 mb-4">8. Children's Privacy</h2>
      <p className="mb-6">Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.</p>
      
      <h2 className="text-xl font-bold mt-8 mb-4">9. International Users</h2>
      <p className="mb-6">DetailPro is operated from the United States. If you are accessing our services from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States, where data protection laws may differ from those in your country.</p>
      
      <h2 className="text-xl font-bold mt-8 mb-4">10. Changes to This Privacy Policy</h2>
      <p className="mb-6">We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on our website and updating the "Effective Date" above. Your continued use of our services after such changes constitutes acceptance of the updated Privacy Policy.</p>
      
      <h2 className="text-xl font-bold mt-8 mb-4">11. Contact Us</h2>
      <p className="mb-4">If you have questions about this Privacy Policy or our privacy practices, please contact us at:</p>
      <div className="text-neutral-300">
        <p className="font-bold">MOTO Technology, LLC</p>
        <p>6925 Lake Harrison Circle</p>
        <p>Chanhassen, MN 55317</p>
        <p>Email: information@detailpro.tech</p>
      </div>
    </>
  );

  return (
    <div className="max-w-3xl mx-auto px-6 pt-16 pb-40 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-neutral-500 hover:text-[#e7e6ee] transition-colors mb-12 group"
      >
        <Icon icon="mdi-light:arrow-left" className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        Back to Home
      </button>
      <div className="prose prose-invert prose-neutral article-content max-w-none text-left">
        {content}
      </div>
    </div>
  );
};

const LogoTicker = () => {
  const logos = [
    { name: 'AUTO ARMOR', font: 'font-sans font-bold tracking-tighter' },
    { name: 'Precision Shine', font: 'font-serif-italic text-2xl' },
    { name: 'SHINE SQUAD', font: 'font-squartiqa text-2xl tracking-widest' },
    { name: 'DetailForce', font: 'font-sans font-bold' },
    { name: 'CERAMIC PRO SHOP', font: 'font-sans font-black' },
    { name: 'Gloss Theory', font: 'font-serif-italic font-semibold' },
    { name: 'REVIVE AUTO', font: 'font-sans font-extrabold' },
    { name: 'ShineLab', font: 'font-sans font-medium' },
    { name: 'VELOCITY DETAILING', font: 'font-sans font-black italic' },
    { name: 'Obsessed Auto', font: 'font-serif-italic' }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 mb-20 relative z-10">
      <div className="text-center mb-8">
        <p className="text-xs font-semibold text-neutral-500 uppercase tracking-[0.2em]">Used by high-growth detailing shops</p>
      </div>
      <div className="relative overflow-hidden w-full" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
        <div className="flex items-center gap-16 animate-ticker w-max">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center shrink-0">
              {logos.map((logo, idx) => (
                <span key={idx} className={`${logo.font} text-2xl text-neutral-700 hover:text-[#e7e6ee] transition-colors cursor-default whitespace-nowrap uppercase`}>
                  {logo.name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AutomationVisual = () => {
  return (
    <section className="overflow-hidden flex flex-col text-[#e7e6ee] bg-[#050119] w-full border-white/5 border-b pt-20 pb-40 relative items-center">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] mask-radial pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#5e25fa] rounded-full blur-[150px] opacity-[0.05] pointer-events-none"></div>

      <div className="text-center w-full max-w-4xl z-10 relative mb-12 px-6">
        <h2 className="md:text-6xl text-4xl font-semibold text-[#e7e6ee] tracking-tight mb-6">Your Speed-To-Lead Engine</h2>
        <p className="leading-relaxed text-lg font-light text-neutral-400 max-w-2xl mx-auto">When a lead hits your site, we book them before they can call your competitor. 24/7 coverage for your shop.</p>
      </div>

      <div className="relative w-full max-w-[1400px] flex flex-col items-center">
        <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center z-20">
          <div className="absolute inset-0 animate-spin-slow">
            <svg className="absolute inset-0 w-full h-full text-white/5" viewBox="0 0 600 600">
              <g className="stroke-current stroke-[1]">
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                  <line 
                    key={i} 
                    x1="300" y1="50" x2="300" y2="220" 
                    transform={`rotate(${angle}, 300, 300)`}
                    className="animate-flow-in"
                    style={{ animationDelay: `${i * 0.5}s` }}
                  />
                ))}
              </g>
            </svg>
            
            <div className="absolute top-[50px] left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow-reverse">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#050119] border border-white/10 rounded-xl flex items-center justify-center shadow-2xl">
                <Icon icon="mdi-light:message" className="w-6 h-6 md:w-7 md:h-7 text-[#5e25fa]" />
              </div>
            </div>
            <div className="absolute top-1/2 right-[50px] translate-x-1/2 -translate-y-1/2 animate-spin-slow-reverse">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#050119] border border-white/10 rounded-xl flex items-center justify-center shadow-2xl">
                <Icon icon="mdi-light:calendar" className="w-6 h-6 md:w-7 md:h-7 text-[#5e25fa]" />
              </div>
            </div>
          </div>

          <div className="absolute z-30 flex items-center justify-center">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-[#050119] rounded-3xl border border-[#5e25fa]/30 flex items-center justify-center shadow-[0_0_50px_rgba(94,37,250,0.2)] relative overflow-hidden">
              <div className="absolute inset-0 bg-[#5e25fa]/10 animate-pulse"></div>
              <Icon icon="mdi-light:star" className="z-10 relative w-10 h-10 md:w-12 md:h-12 text-[#e7e6ee]" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 z-20 w-full max-w-4xl px-4 mt-12">
          {[
            { title: 'Instant SMS', author: 'BOT', icon: 'mdi-light:send', color: 'from-[#5e25fa] to-[#280aa5]', desc: 'Auto-reply to leads within 30 seconds of their inquiry.' },
            { title: 'Fleet Pipeline', author: 'SYS', icon: 'mdi-light:home', color: 'from-blue-400 to-blue-600', desc: 'Nurture commercial accounts for monthly predictable income.' },
            { title: 'Review Engine', author: 'G2', icon: 'mdi-light:star', color: 'from-amber-400 to-orange-600', desc: 'Automated review requests after every completed job.' },
            { title: 'Review System', author: 'AI', icon: 'mdi-light:cpu', color: 'from-teal-400 to-teal-600', desc: 'Reach out to past customers for ceramic maintenance or seasonal details.' }
          ].map((card, idx) => (
            <div key={idx} className="group relative bg-[#050119] border border-white/10 rounded-xl p-5 hover:border-[#5e25fa]/30 transition-all animate-float" style={{ animationDelay: `${idx * 0.5}s` }}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${card.color} flex items-center justify-center text-[10px] font-bold text-[#e7e6ee]`}>{card.author}</div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-semibold text-neutral-200">{card.title}</span>
                  <span className="text-[10px] text-neutral-500">Automated Motion</span>
                </div>
              </div>
              <div className="aspect-[21/9] bg-black/50 border border-white/5 rounded-lg flex items-center justify-center p-4">
                <Icon icon={card.icon} className="w-8 h-8 text-neutral-500 mb-1 absolute top-2 right-2 opacity-20" />
                <p className="text-xs text-neutral-500 text-center">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`group bg-[#050119] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-[#5e25fa]/20' : ''}`}>
      <button 
        className="flex text-left w-full p-6 items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="group-hover:text-[#5e25fa] transition-colors text-lg font-medium text-[#e7e6ee]">{question}</span>
        <div className={`transition-all duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          <Icon icon="mdi-light:close" className="w-5 h-5 text-neutral-500" />
        </div>
      </button>
      <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-6 text-neutral-400 leading-relaxed text-sm">
          {answer}
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  // Using pathname as the source of truth for routing
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const contentfulPosts = await fetchBlogPosts();
      setPosts(contentfulPosts);
      setLoading(false);
    };
    loadPosts();
  }, []);

  // --- Derived Routing State ---
  let currentView: 'home' | 'blog' | 'legal' = 'home';
  let legalType: 'terms' | 'privacy' = 'terms';
  let selectedPost: BlogPost | null = null;

  if (currentPath === '/blog' || currentPath === '/blog/') {
    currentView = 'blog';
    selectedPost = null;
  } else if (currentPath.startsWith('/blog/')) {
    currentView = 'blog';
    const slug = currentPath.replace(/^\/blog\//, '');
    selectedPost = posts.find(p => p.slug === slug) || null;
  } else if (currentPath === '/terms') {
    currentView = 'legal';
    legalType = 'terms';
  } else if (currentPath === '/privacy') {
    currentView = 'legal';
    legalType = 'privacy';
  }

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openCalendly = () => {
    if ((window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/qlsmarketing1/30min?primary_color=5e25fa'
      });
    }
  };

  const chartData = [
    { name: 'Month 1', value: 12 },
    { name: 'Month 2', value: 28 },
    { name: 'Month 3', value: 45 },
    { name: 'Month 4', value: 68 },
  ];

  const handleNavigateHome = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    navigateTo('/');
  };

  const handleNavigateBlog = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    navigateTo('/blog');
  };

  return (
    <div className="min-h-screen bg-[#050119]">
      {/* Announcement Bar */}
      <div className="bg-[#280aa5] text-purple-200 border-b border-white/10 py-2.5 px-4 flex items-center justify-center text-xs sm:text-sm relative z-50">
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center">
          <span className="text-[#e7e6ee]/80 uppercase tracking-widest font-bold">FOR A LIMITED NUMBER OF OPERATORS:</span>
          <span className="text-neutral-300">Designed for shops that want repeatable growth, not guesswork.</span>
          <button onClick={openCalendly} className="hover:bg-[#5e25fa]/20 transition-colors flex items-center font-bold text-[#e7e6ee] bg-[#5e25fa]/10 border-[#5e25fa]/30 border rounded-full px-4 py-1 gap-2">
            Check Availability
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-40 transition-all duration-300 ${scrolled || currentView === 'blog' || currentView === 'legal' ? 'bg-[#050119]/90 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <a href="/" onClick={handleNavigateHome} className="flex items-center group">
              <img 
                src="https://storage.googleapis.com/detail_pro_main/Logos/DetailPro_FinalLogos-13-cropped.svg" 
                alt="DetailPro - Auto Detailing Software and Growth Systems" 
                className="h-8 md:h-10 w-auto group-hover:scale-105 transition-transform duration-300"
              />
            </a>
          </div>
          <div className="flex items-center gap-8">
            <a href="/blog" onClick={handleNavigateBlog} className={`hidden lg:block text-sm font-medium text-neutral-400 hover:text-[#e7e6ee] transition-colors ${currentView === 'blog' ? 'text-[#e7e6ee] underline underline-offset-8 decoration-[#5e25fa] decoration-2' : ''}`}>Blog</a>
            <button className="text-neutral-400 hover:text-[#e7e6ee] transition-colors hidden md:block">
              <Icon icon="mdi-light:magnify" className="w-5 h-5" />
            </button>
            <button onClick={openCalendly} className="hover:bg-neutral-200 transition-all text-sm font-bold text-[#050119] bg-[#e7e6ee] rounded-lg px-6 py-2.5 shadow-xl">
              Book A Demo
            </button>
          </div>
        </div>
      </nav>

      {currentView === 'home' ? (
        <main className="animate-in fade-in duration-500">
          {/* Hero Section */}
          <section className="relative overflow-hidden pt-16 pb-32">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#5e25fa] rounded-full blur-[120px] opacity-10 -z-10 pointer-events-none"></div>
            
            <div className="z-10 text-center max-w-5xl mx-auto px-6">
              <div className="inline-flex items-center gap-2 bg-[#050119]/50 border border-white/10 rounded-full pl-1 pr-4 py-1 mb-8 backdrop-blur-sm">
                <span className="text-[10px] font-bold text-[#e7e6ee] bg-[#5e25fa] rounded-full px-2 py-0.5 shadow-sm">Built By Detailers</span>
                <span className="text-sm font-medium text-neutral-300">The Growth Partner for High-Performance Shops</span>
              </div>

              <h1 className="leading-[1.1] text-4xl sm:text-5xl md:text-7xl font-bold text-[#e7e6ee] tracking-tight mb-8">
                Auto Detailing Software for Shops Ready to Scale<br className="hidden md:block" />
                <span className="font-serif-italic font-normal text-[#5e25fa] drop-shadow-[0_0_15px_rgba(94,37,250,0.3)]">Built to generate booked jobs.</span>
              </h1>

              <p className="md:text-xl text-lg text-neutral-400 max-w-2xl mx-auto mb-12">
                We help serious detailers install systems for ads, follow-up, booking, and fleet work — so growth feels predictable, not chaotic.
              </p>

              <div className="flex flex-col items-center gap-6 mb-24">
                <button onClick={openCalendly} className="group relative bg-[#5e25fa] hover:bg-[#280aa5] text-[#e7e6ee] text-lg font-bold px-10 py-5 rounded-xl shadow-[0_0_30px_rgba(94,37,250,0.4)] transition-all flex items-center gap-3 border border-white/10">
                  Book My Free Demo
                  <Icon icon="mdi-light:arrow-right" className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
                <div className="flex items-center gap-4 text-sm text-neutral-500 bg-[#050119]/80 px-4 py-2 rounded-full border border-white/5 backdrop-blur-sm">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => <img key={i} src={`https://picsum.photos/seed/face${i}/40/40`} className="w-6 h-6 rounded-full border border-neutral-900" alt="Car detailing business owner success story profile" loading="lazy" decoding="async" />)}
                  </div>
                  <span>Join the detailers scaling their shops with DetailPro.</span>
                </div>
              </div>

              {/* VSL Placeholder */}
              <div className="max-w-4xl mx-auto relative group" onClick={openCalendly}>
                <div className="absolute -inset-1 bg-gradient-to-b from-[#5e25fa]/20 to-transparent rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#050119] aspect-video ring-1 ring-black/5 cursor-pointer">
                  <img 
                    src="https://picsum.photos/seed/detailingvsl/1200/675" 
                    alt="DetailPro business growth systems and detailing shop management software overview" 
                    className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" 
                    fetchPriority="high"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300">
                      <Icon icon="mdi-light:play" className="w-8 h-8 text-[#e7e6ee] ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-8 left-8 text-left">
                    <h3 className="text-xl font-bold text-[#e7e6ee] mb-1">From $5k to $22k/mo in 90 Days</h3>
                    <p className="text-neutral-400 text-sm">See the exact system used by CleanAuto Detailing</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <LogoTicker />

          {/* Problem Section */}
          <section className="py-32 relative border-y border-white/5 bg-[#050119]">
            {/* Requested Branding Pattern Background */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://storage.googleapis.com/detail_pro_main/Logos/DetailPro_Patterns-06.png')] bg-repeat pointer-events-none mix-blend-screen"></div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="text-center mb-20">
                <h2 className="md:text-6xl text-4xl font-bold text-[#e7e6ee] tracking-tight mb-4 text-center">
                  Tired of the <br className="hidden md:block" />
                  <span className="font-normal font-serif-italic text-[#5e25fa]">detailing grind?</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                {[
                  { icon: 'mdi-light:phone', text: "Missing calls because you're busy ceramic coating a truck." },
                  { icon: 'mdi-light:alert-circle', text: "Leads inquire on Facebook, but ghost you when you reply 2 hours later." },
                  { 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 4h1v9h3V7h5v4h4v4h4v6H3zm13 12v4h3v-4zm-4-4v8h3v-8zM8 8v12h3V8zm-4 6v6h3v-6z"/></svg>, 
                    text: "Empty winter schedule because you rely on word-of-mouth." 
                  },
                  { icon: 'mdi-light:thumb-down', text: "Spending money on generic ads that just get 'How much?' comments." },
                  { icon: 'mdi-light:clock', text: "Spending 4 hours a night texting leads back from your personal phone." },
                  { icon: 'mdi-light:calendar', text: "Struggling to source fleet leads to give your team consistent work?" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#050119] border border-white/5 rounded-2xl p-8 hover:bg-[#050119]/80 transition-all group text-left">
                    <div className={`w-12 h-12 rounded-xl bg-neutral-800 border border-white/10 flex items-center justify-center text-[#ceff1a] mb-6 group-hover:scale-110 transition-transform`}>
                      {typeof item.icon === 'string' ? (
                        <Icon icon={item.icon} className="w-6 h-6" />
                      ) : (
                        <div className="w-6 h-6 flex items-center justify-center text-current">{item.icon}</div>
                      )}
                    </div>
                    <p className="text-lg font-medium text-neutral-300 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button onClick={openCalendly} className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#5e25fa] to-[#280aa5] text-[#e7e6ee] text-xl font-bold px-12 py-5 rounded-xl shadow-2xl transition-all">
                  Fix My Shop Today
                </button>
              </div>
            </div>
          </section>

          {/* Solution Grid */}
          <section id="system" className="bg-[#050119] py-32">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-4xl md:text-5xl font-bold text-[#e7e6ee] text-center mb-20 tracking-tight">The DetailPro Triad</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { 
                    icon: 'mdi-light:chart-line', 
                    title: 'High-Intent Ads', 
                    desc: "We don't just 'boost posts'. We run proven ad sets that attract people looking for premium detailing and ceramic coatings.",
                    color: 'purple'
                  },
                  { 
                    icon: 'mdi-light:flash', 
                    title: 'Instant Automation', 
                    desc: "The second a lead inquires, they get an SMS. We book the job on the spot before they look at another shop's page.",
                    color: 'indigo'
                  },
                  { 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 3h13a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v3h5V4zM3 19a2 2 0 0 0 2 2h3v-5H3zm5-9H3v5h5zm10 11a2 2 0 0 0 2-2v-3h-5v5zm2-11h-5v5h5zm0-4a2 2 0 0 0-2-2h-3v5h5zM9 4v5h5V4zm0 17h5v-5H9zm5-11H9v5h5z"/></svg>, 
                    title: 'Detailing CRM', 
                    desc: "A dashboard built just for you. Manage consumer jobs, fleet contracts, and ceramic maintenance with ease.",
                    color: 'blue'
                  }
                ].map((solution, i) => (
                  <div key={i} className="group bg-[#050119] border border-white/10 rounded-[32px] p-8 relative overflow-hidden flex flex-col hover:border-[#5e25fa]/20 transition-all text-left">
                    <div className={`absolute top-0 left-0 w-64 h-64 bg-[#5e25fa] rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 opacity-10 animate-pulse-slow`}></div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                        {typeof solution.icon === 'string' ? (
                          <Icon icon={solution.icon} className={`w-7 h-7 text-[#5e25fa]`} />
                        ) : (
                          <div className="w-7 h-7 flex items-center justify-center text-[#5e25fa]">{solution.icon}</div>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold text-[#e7e6ee] mb-4">{solution.title}</h3>
                      <p className="text-neutral-400 leading-relaxed">{solution.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section id="how-it-works" className="py-32 bg-[#050119] relative">
            <div className="max-w-5xl mx-auto px-6">
              <div className="text-center mb-24">
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
                  <div className="w-2 h-2 rounded-full bg-[#5e25fa] animate-pulse"></div>
                  <span className="text-xs font-bold text-[#e7e6ee] tracking-widest uppercase">Simple Execution</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-[#e7e6ee] tracking-tight leading-tight">Fill your calendar <br /> in 3 steps</h2>
              </div>

              <div className="space-y-12">
                {[
                  { step: 1, title: 'Launch Professional Ads', color: 'purple', icon: 'mdi-light:send', desc: "We deploy our library of 'Battle-Tested' detailing ads to your local market. No guesswork, just high-intent leads interested in your services." },
                  { step: 2, title: 'Automated 24/7 Follow-Up', color: 'indigo', icon: 'mdi-light:message', desc: "Our system text leads instantly. It answers basic questions, shares your pricing, and pushes them to book — while you stay on the buffer." },
                  { step: 3, title: 'Show Up & Wash', color: 'blue', icon: 'mdi-light:calendar', desc: "Your calendar fills up with qualified jobs. You just check your booking app in the morning, see where you need to be, and go do what you do best." }
                ].map((phase, i) => (
                  <div key={i} className="sticky top-24 mb-12">
                    <div className="bg-[#050119] border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row gap-12 min-h-[400px]">
                      <div className="md:w-1/2 flex flex-col justify-center text-left">
                        <div className="flex items-center gap-3 mb-6">
                          <div className={`bg-[#5e25fa]/10 text-[#5e25fa] p-2 rounded-lg border border-[#5e25fa]/20`}>
                            <Icon icon={phase.icon} className="w-6 h-6" />
                          </div>
                          <span className={`uppercase text-sm font-black tracking-widest text-[#5e25fa]`}>Step {phase.step}</span>
                        </div>
                        <h3 className="text-3xl font-bold text-[#e7e6ee] mb-4">{phase.title}</h3>
                        <p className="text-neutral-400 text-lg leading-relaxed">{phase.desc}</p>
                      </div>
                      <div className="md:w-1/2 bg-black/40 rounded-3xl border border-white/5 flex flex-col justify-center overflow-hidden min-h-[300px]">
                        {phase.step === 1 ? (
                          <img 
                            src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=2071&auto=format&fit=crop" 
                            className="w-full h-full object-cover rounded-2xl" 
                            alt="Auto detailing lead generation strategy 2026 - professional car wash foam application"
                            loading="lazy"
                            decoding="async"
                          />
                        ) : phase.step === 3 ? (
                          <div className="h-48 w-full px-8">
                            <ResponsiveContainer width="100%" height="100%">
                              <BarChart data={chartData}>
                                <Bar dataKey="value" fill="#5e25fa" radius={[4, 4, 0, 0]} />
                                <XAxis dataKey="name" hide />
                                <YAxis hide />
                              </BarChart>
                            </ResponsiveContainer>
                            <div className="mt-4 flex justify-between text-xs font-bold text-neutral-500 px-2">
                              <span>SHOP REVENUE</span>
                              <span className="text-[#5e25fa]">+110% Growth</span>
                            </div>
                          </div>
                        ) : (
                          <img 
                            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop" 
                            className="w-full h-full object-cover rounded-2xl" 
                            alt="Mobile car detailing SOP checklist for employees and automated SMS follow-up system"
                            loading="lazy"
                            decoding="async"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Results / Case Studies */}
          <section id="results" className="py-32 bg-[#050119]">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-4xl md:text-5xl font-bold text-[#e7e6ee] mb-20 tracking-tight text-center">Real Shop Results</h2>
              <div className="space-y-12">
                <div className="bg-[#050119] border border-white/5 rounded-[3rem] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row gap-12 items-center group">
                  <div className="flex-1 space-y-8 text-left">
                    <div className="flex items-center gap-2 text-neutral-500 text-sm font-bold uppercase tracking-widest">
                      <Icon icon="mdi-light:shield" className="w-4 h-4" /> Case Study: Shine Squad
                    </div>
                    <h3 className="text-3xl md:text-5xl font-bold text-[#e7e6ee] leading-tight">From 4 jobs a week to fully booked 14 days out.</h3>
                    <p className="text-neutral-400 text-lg leading-relaxed italic">
                      "I used to sit on Nextdoor begging for work. The DetailPro system changed the game and now all my booking is handled while I'm working on cars. It's like having a full-time office manager for a fraction of the cost."
                    </p>
                    <button onClick={openCalendly} className="bg-[#e7e6ee] text-[#050119] font-bold px-8 py-4 rounded-full hover:bg-neutral-200 transition-all">Start My Growth</button>
                  </div>
                  <div className="flex-1 w-full h-[400px] bg-[#5e25fa]/10 rounded-3xl border border-white/5 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#5e25fa]/20 via-transparent to-transparent"></div>
                    <div className="bg-black/80 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl text-center group-hover:scale-105 transition-transform duration-500">
                      <div className="text-[#5e25fa] text-5xl font-bold mb-2">+42</div>
                      <div className="text-neutral-400 font-bold uppercase tracking-widest text-xs">Booked Jobs In March</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Guarantee Section */}
          <section id="guarantee" className="py-32 bg-[#050119] border-t border-white/5">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <div className="w-20 h-20 bg-[#5e25fa]/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-[#5e25fa]/30">
                <Icon icon="mdi-light:shield" className="w-10 h-10 text-[#5e25fa]" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#e7e6ee] mb-6">Built for Operators Who Want to Scale</h2>
              <p className="text-xl text-neutral-400 mb-10 leading-relaxed">
                We built DetailPro to grow with you — not extract fees and disappear. You license the software upfront. We only participate long-term through a revenue share on ads. That means we're incentivized to build systems that actually: <span className="text-[#e7e6ee] font-bold underline decoration-[#5e25fa]">turn leads into booked jobs, create predictable demand, and support real operations, not vanity metrics.</span> No hype. No shortcuts. Just systems designed to scale.
              </p>
              <div className="bg-[#050119] border border-white/10 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="flex items-center gap-3">
                  <Icon icon="mdi-light:check" className="w-5 h-5 text-[#5e25fa]" />
                  <span className="text-sm font-medium text-neutral-300">Structured 90-Day Onboarding</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon icon="mdi-light:check" className="w-5 h-5 text-[#5e25fa]" />
                  <span className="text-sm font-medium text-neutral-300">Performance Based Pricing</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon icon="mdi-light:check" className="w-5 h-5 text-[#5e25fa]" />
                  <span className="text-sm font-medium text-neutral-300">Built For Detailers By Detailers</span>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-32 border-t border-white/5">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-4xl font-bold text-[#e7e6ee] text-center mb-16 tracking-tight">Detailers ask us...</h2>
              <div className="space-y-4">
                <FAQItem 
                  question="Is this just a CRM?" 
                  answer="No. A CRM is just a place to store data. DetailPro is an active growth platform. We provide the ads, the automation, and the workflows to actually book the jobs for you. It's the difference between a filing cabinet and a sales team." 
                />
                <FAQItem 
                  question="What if I already have a CRM (like Urable)?" 
                  answer="We work alongside it. Not replace it. DetailPro is focused on the 'Top of Funnel' — getting the leads and booking the meetings. Once a job is booked, you can push it to your job management tool for invoicing and scheduling if you like." 
                />
                <FAQItem 
                  question="Do I have to answer the automated texts?" 
                  answer="Only when the lead asks a complex question that the system can't handle. Otherwise, it follows our proven script to get the car type, service interest, and booking time automatically." 
                />
                <FAQItem 
                  question="How much do I need to spend on ads?" 
                  answer="We recommend starting with $15–$25 a day to see consistent results. Our system is designed to squeeze every penny out of that budget so you get the highest ROI possible." 
                />
                <FAQItem 
                  question="Do you run the ads for me or do I manage them?" 
                  answer="DetailPro provides the ad infrastructure, strategy, and systems — but you stay in control. We handle the setup and optimization framework so ads are built correctly from day one. You own the ad account, the data, and the spend. We stay aligned through performance-based pricing, which means we care deeply about how those ads convert into real booked jobs." 
                />
                <FAQItem 
                  question="How is DetailPro different from Housecall Pro, Jobber, or Urable?" 
                  answer="Those tools are great at managing jobs after a customer is already booked. DetailPro focuses on what happens before that — generating demand, following up instantly, and converting leads into booked jobs. Many shops use DetailPro alongside their existing software, then push booked jobs into their job management tool for scheduling and invoicing. We offer seamless integration with Urable where all booked customers are automatically migrated." 
                />
                <FAQItem 
                  question="Is this built for solo operators or teams?" 
                  answer="DetailPro builds the infrastructure within your business to become a top detailer in your area. This almost always means having a team. That is our goal." 
                />
                <FAQItem 
                  question="What makes a shop a good fit for DetailPro?" 
                  answer="DetailPro is built for operators who answer leads promptly, care about systems and execution, and want repeatable growth — not quick wins. If you're already a top detailer looking to get to the next level. This is for you. It’s not a fit for newbies looking for hands-off growth or instant results without involvement. The system works best when both sides execute." 
                />
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-40 relative text-center">
            <div className="absolute inset-0 bg-gradient-to-t from-[#280aa5]/20 to-transparent pointer-events-none"></div>
            <div className="max-w-4xl mx-auto px-6 relative z-10">
              <h2 className="text-5xl md:text-8xl font-bold text-[#e7e6ee] tracking-tighter mb-8 leading-none">Fill your calendar.</h2>
              <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                Stop letting leads die in your inbox. Switch on the DetailPro system and start scaling your shop.
                <span className="text-[#e7e6ee] block font-bold mt-2">Only pay for results.</span>
              </p>
              <button onClick={openCalendly} className="group bg-[#5e25fa] hover:bg-[#280aa5] text-[#e7e6ee] text-xl font-bold px-12 py-6 rounded-full shadow-[0_0_60px_rgba(94,37,250,0.4)] transition-all flex items-center gap-3 mx-auto">
                Book A Demo Now
                <Icon icon="mdi-light:arrow-right" className="w-6 h-6 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </section>
        </main>
      ) : currentView === 'blog' ? (
        <div className="max-w-7xl mx-auto px-6 py-20">
          {selectedPost ? (
            <ArticleView post={selectedPost} onBack={() => navigateTo('/blog')} onGoHome={() => handleNavigateHome()} />
          ) : (
            <>
              <div className="text-center mb-20">
                <h1 className="text-4xl md:text-6xl font-bold text-[#e7e6ee] mb-6">The Knowledge Hub</h1>
                <p className="text-neutral-400 text-lg max-w-2xl mx-auto">Systems, strategies, and insights for detailers ready to dominate their local market.</p>
              </div>
              
              {loading ? (
                <div className="flex items-center justify-center py-20">
                  <div className="w-12 h-12 border-4 border-[#5e25fa] border-t-transparent rounded-full animate-spin"></div>
                </div>
              ) : (
                <>
                  {posts.filter(p => p.featured).map(post => (
                    <BlogCard key={post.id} post={post} variant="featured" onNavigate={navigateTo} posts={posts} />
                  ))}

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">
                    {posts.filter(p => !p.featured).map(post => (
                      <BlogCard key={post.id} post={post} onNavigate={navigateTo} />
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      ) : (
        <LegalView type={legalType} onBack={() => handleNavigateHome()} />
      )}

      {/* Footer */}
      <footer className="bg-[#050119] border-t border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="flex flex-col items-center md:items-start gap-4">
              <a href="/" onClick={handleNavigateHome} className="group transition-colors">
                <img 
                  src="https://storage.googleapis.com/detail_pro_main/Logos/DetailPro_FinalLogos-13-cropped.svg" 
                  alt="DetailPro - The #1 Growth Platform for Professional Detailers" 
                  className="h-8 md:h-10 w-auto group-hover:scale-105 transition-transform duration-300"
                />
              </a>
              <div className="text-sm text-neutral-500 font-medium text-center md:text-left">© 2026 DetailPro Technologies.<br className="md:hidden" /> Built by operators for operators.</div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-6">
              <a href="https://www.tiktok.com/@detailprogrowth" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-[#e7e6ee] transition-all transform hover:scale-110" aria-label="TikTok">
                <Icon icon="ic:baseline-tiktok" className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/detailprogrowth" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-[#e7e6ee] transition-all transform hover:scale-110" aria-label="Instagram">
                <Icon icon="mdi:instagram" className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/111829166" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-[#e7e6ee] transition-all transform hover:scale-110" aria-label="LinkedIn">
                <Icon icon="mdi:linkedin" className="w-6 h-6" />
              </a>
              <a href="#" className="text-neutral-500 hover:text-[#e7e6ee] transition-all transform hover:scale-110" aria-label="Facebook">
                <Icon icon="mdi:facebook" className="w-6 h-6" />
              </a>
              <a href="#" className="text-neutral-500 hover:text-[#e7e6ee] transition-all transform hover:scale-110" aria-label="X (Twitter)">
                <Icon icon="ri:twitter-x-fill" className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@DetailProGrowth" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-[#e7e6ee] transition-all transform hover:scale-110" aria-label="YouTube">
                <Icon icon="mdi:youtube" className="w-7 h-7" />
              </a>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
              <a href="/blog" onClick={handleNavigateBlog} className="text-neutral-500 hover:text-[#e7e6ee] transition-colors text-sm font-medium">Blog</a>
              <a href="/terms" onClick={(e) => { e.preventDefault(); navigateTo('/terms'); }} className="text-neutral-500 hover:text-[#e7e6ee] transition-colors text-sm font-medium">Terms</a>
              <a href="/privacy" onClick={(e) => { e.preventDefault(); navigateTo('/privacy'); }} className="text-neutral-500 hover:text-[#e7e6ee] transition-colors text-sm font-medium">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
