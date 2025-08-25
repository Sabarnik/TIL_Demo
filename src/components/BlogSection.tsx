'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Heart, MessageCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const BlogSection: React.FC = () => {
  const [savedPosts, setSavedPosts] = useState<number[]>([]);
  const [expandedAuthor, setExpandedAuthor] = useState<number | null>(null); const router = useRouter();
  const handlePostClick = (title: string) => {
    const slug = title.replace(/\s+/g, "-").toLowerCase();
    router.push(`${basePath}/media/blog/${slug}`);
  };
  const featuredPosts = [
    {
      id: 1,
      title: 'How to Buy a Reachstacker? 6 Factors to Consider',
      excerpt: 'When comparing reachstackers, the specifications listed on paper are only the first step. If you..',
      author: {
        name: 'Rajesh Kumar',
        role: 'Chief Engineer',
        bio: 'With 15 years experience in heavy machinery development and innovation',
        avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80'
      },
      column: 'Industry Insights',
      date: '2024-04-05',
      readTime: '10 min',
      likes: '7K',
      comments: '426',
      image: `${basePath}/blog1.png`,
      thumbnail: `${basePath}/blog1.png`,
      featuredImage: `${basePath}/blog1.png`
    },
    {
      id: 2,
      title: '6 Powerful Cranes Used in Modern Construction',
      excerpt: 'Let\'s be real—on any serious construction site, cranes aren\'t treated as just any other machine...',
      author: {
        name: 'Priya Sharma',
        role: 'Sustainability Officer',
        bio: 'Head of Environmental Initiatives at TIL with a focus on green manufacturing',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80'
      },
      column: 'Green Tech',
      date: '2024-05-21',
      readTime: '15 min',
      likes: '3.9K',
      comments: '116',
      image: `${basePath}/blog2.jpg`,
      thumbnail: `${basePath}/blog2.jpg`,
      featuredImage: `${basePath}/blog2.jpg`
    },
    {
      id: 3,
      title: '7 Proven Ways Rough Terrain Cranes Power Up Business Efficiency',
      excerpt: 'In the world of construction and heavy lifting, the right equipment isn\'t just helpful—it\'s business critical...',
      author: {
        name: 'Amit Patel',
        role: 'Safety Director',
        bio: 'Developed award-winning safety protocols for heavy machinery operations',
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80'
      },
      column: 'Safety First',
      date: '2024-06-15',
      readTime: '8 min',
      likes: '5.2K',
      comments: '342',
      image: `${basePath}/blog3.jpg`,
      thumbnail: `${basePath}/blog3.jpg`,
      featuredImage: `${basePath}/blog3.jpg`
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  const toggleSavePost = (postId: number) => {
    setSavedPosts(prev =>
      prev.includes(postId)
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  const toggleAuthorDetails = (postId: number) => {
    setExpandedAuthor(prev => prev === postId ? null : postId);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-[#f8f9fa] to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20">

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#F1B434] to-[#FFE352] text-lg font-bold tracking-tight"
            initial={{
              opacity: 0,
              letterSpacing: "-0.05em"
            }}
            whileInView={{
              opacity: 1,
              letterSpacing: "0.02em",
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 0.77, 0.47, 0.97]
            }}
            viewport={{ once: true, margin: "-20%" }}
          >
            INDUSTRY INSIGHTS
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            TIL <span className="text-[#F1B434]">Blog</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#F1B434] to-[#FFE352] mx-auto rounded-full mb-6"></div>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-gray-600 leading-relaxed">
            Stay updated with the latest trends, innovations, and news in the heavy equipment industry.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Featured Posts (Left) */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Featured Articles</h3>
            <div className="space-y-8">
              {featuredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  className="group cursor-pointer bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  onClick={() => handlePostClick(post.title)}
                >
                  <div className="flex gap-5">
                    {/* Content on the left */}
                    <div className="flex-1">
                      {/* Author Info */}
                      <div className="flex items-center gap-3 mb-2">
                        <button
                          onClick={() => toggleAuthorDetails(post.id)}
                          className="flex-shrink-0"
                        >
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            width={32}
                            height={32}
                            className="w-8 h-8 rounded-full object-cover hover:ring-2 hover:ring-[#F1B434] transition-all"
                          />
                        </button>
                        <div className="text-xs text-gray-600">
                          <span>In </span>
                          <span className="font-semibold text-gray-700">{post.column}</span>
                          <span> by </span>
                          <button
                            onClick={() => toggleAuthorDetails(post.id)}
                            className="font-medium text-gray-700 hover:text-[#F1B434]"
                          >
                            {post.author.name}
                          </button>
                        </div>
                      </div>

                      {/* Author Details Popup */}
                      {expandedAuthor === post.id && (
                        <div className="bg-white p-3 rounded-lg shadow-md mb-3 border border-gray-200 text-sm">
                          <div className="flex items-start gap-3">
                            <img
                              src={post.author.avatar}
                              alt={post.author.name}
                              width={40}
                              height={40}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                              <h4 className="font-bold text-gray-800">{post.author.name}</h4>
                              <p className="text-xs text-[#F1B434]">{post.author.role}</p>
                              <p className="text-xs text-gray-600 mt-1">{post.author.bio}</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Post Content */}
                      <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#F1B434] transition-colors">
                        {post.title}
                      </h4>

                      {/* Post Actions and Metadata */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar size={12} className="text-[#F1B434]" />
                            <span>{formatDate(post.date)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={12} className="text-[#F1B434]" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <button
                            className="flex items-center gap-1 text-xs text-gray-500 hover:text-[#F1B434]"
                            onClick={() => toggleSavePost(post.id)}
                          >
                            <Heart
                              size={14}
                              fill={savedPosts.includes(post.id) ? "#F1B434" : "none"}
                              className={savedPosts.includes(post.id) ? "text-[#F1B434]" : ""}
                            />
                            <span>{post.likes}</span>
                          </button>
                          <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-[#F1B434]">
                            <MessageCircle size={14} />
                            <span>{post.comments}</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Image on the right */}
                    <div className="flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        width={800}
                        height={600}
                        className="absolute w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Recent Posts (Right) */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Popular Reads</h3>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-6">
              {/* Featured Image Card with Text Overlay */}
              <a href="/blog/featured" className="block group relative">
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=628&q=80"
                    alt="Featured Blog Post"
                    width={1200}
                    height={628}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-5">
                    <div>
                      <span className="text-xs font-medium text-[#F1B434] mb-1 block">Editor's Pick</span>
                      <h3 className="text-xl font-bold text-white">The Future of Construction Technology</h3>
                      <div className="flex items-center gap-2 text-xs text-white/80 mt-2">
                        <span>June 12, 2024</span>
                        <span>•</span>
                        <span>12 min read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>

              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Recent Posts</h4>

                <div className="space-y-4 mb-6">
                  {featuredPosts.slice(0, 3).map((post) => (
                    <div key={`recent-${post.id}`} className="flex gap-3 items-start pb-3 border-b border-gray-100">
                      {/* Thumbnail */}
                      <div className="flex-shrink-0 w-16 h-16 rounded overflow-hidden relative">
                        <img
                          src={post.thumbnail}
                          alt={post.title}
                          width={150}
                          height={150}
                          className="absolute w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-gray-800 line-clamp-2">{post.title}</h5>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                          <span>{formatDate(post.date)}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Last Updated Section */}
                <div className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-1">
                    <Clock size={12} className="text-[#F1B434]" />
                    <span>Last updated: {new Date().toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}</span>
                  </div>
                  <span className="text-gray-400">•</span>
                  <div className="flex items-center gap-1">
                    <span>{featuredPosts.length} articles</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            href={`/media/blog`}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#F1B434] to-[#FFE352] text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
          >
            <motion.span whileHover={{ scale: 1.05 }}>
              View All Articles
            </motion.span>
          </Link>

        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;