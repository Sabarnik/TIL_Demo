'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  Heart,
  MessageCircle,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Link as LinkIcon,
  ArrowLeft,
  User,
  BookOpen,
  ArrowRight,
  Search,
  TrendingUp,
  Clock as ClockIcon
} from 'lucide-react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

// Skeleton Loader Components
const SkeletonLoader = () => {
  return (
    <div className="bg-gradient-to-b from-[#f8f9fa] to-white min-h-screen">
      {/* Header Skeleton */}
      <div className="relative h-72 w-full overflow-hidden bg-gray-300">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />

        <div className="absolute inset-0 z-20 flex items-center pt-6">
          <div className="max-w-6xl mx-auto px-6 md:px-10 w-full">
            <div className="mb-4">
              <div className="h-6 w-24 bg-gray-400 rounded-md animate-pulse"></div>
            </div>

            <div className="h-6 w-40 bg-gray-400 rounded-md animate-pulse mb-4"></div>

            <div className="h-12 bg-gray-400 rounded-md animate-pulse mb-6 w-3/4"></div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="h-8 w-8 bg-gray-400 rounded-full animate-pulse"></div>
              <div className="h-4 w-32 bg-gray-400 rounded-md animate-pulse"></div>
              <div className="h-4 w-32 bg-gray-400 rounded-md animate-pulse"></div>
              <div className="h-4 w-32 bg-gray-400 rounded-md animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 md:px-10 py-12 -mt-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Article Content Skeleton */}
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  <div className="h-8 w-20 bg-gray-300 rounded-full animate-pulse"></div>
                  <div className="h-8 w-24 bg-gray-300 rounded-full animate-pulse"></div>
                  <div className="h-8 w-28 bg-gray-300 rounded-full animate-pulse"></div>
                </div>

                <div className="h-6 w-full bg-gray-300 rounded-md animate-pulse mb-4"></div>
                <div className="h-6 w-3/4 bg-gray-300 rounded-md animate-pulse mb-8"></div>

                <div className="h-6 w-64 bg-gray-300 rounded-md animate-pulse mb-4"></div>
                <div className="h-4 w-full bg-gray-300 rounded-md animate-pulse mb-4"></div>
                <div className="h-4 w-full bg-gray-300 rounded-md animate-pulse mb-4"></div>
                <div className="h-4 w-3/4 bg-gray-300 rounded-md animate-pulse mb-8"></div>

                <div className="h-40 w-full bg-gray-300 rounded-lg animate-pulse mb-4"></div>

                <div className="h-6 w-64 bg-gray-300 rounded-md animate-pulse mb-4"></div>
                <div className="h-4 w-full bg-gray-300 rounded-md animate-pulse mb-4"></div>
                <div className="h-4 w-full bg-gray-300 rounded-md animate-pulse mb-4"></div>
                <div className="h-4 w-3/4 bg-gray-300 rounded-md animate-pulse"></div>
              </div>

              {/* Action Bar Skeleton */}
              <div className="border-t border-gray-200 p-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="h-6 w-16 bg-gray-300 rounded-md animate-pulse"></div>
                  <div className="h-6 w-16 bg-gray-300 rounded-md animate-pulse"></div>
                  <div className="h-6 w-16 bg-gray-300 rounded-md animate-pulse"></div>
                </div>

                <div className="h-6 w-32 bg-gray-300 rounded-md animate-pulse"></div>
              </div>

              {/* Author Bio Skeleton */}
              <div className="border-t border-gray-200 p-6 bg-gray-50">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gray-300 rounded-full animate-pulse"></div>
                  <div className="flex-1">
                    <div className="h-6 w-40 bg-gray-300 rounded-md animate-pulse mb-2"></div>
                    <div className="h-4 w-32 bg-gray-300 rounded-md animate-pulse mb-4"></div>
                    <div className="h-4 w-full bg-gray-300 rounded-md animate-pulse mb-2"></div>
                    <div className="h-4 w-3/4 bg-gray-300 rounded-md animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Comments Section Skeleton */}
              <div className="border-t border-gray-200 p-6">
                <div className="h-6 w-40 bg-gray-300 rounded-md animate-pulse mb-6"></div>

                <div className="flex gap-4 mb-8">
                  <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse"></div>
                  <div className="flex-1">
                    <div className="h-20 w-full bg-gray-300 rounded-md animate-pulse mb-2"></div>
                    <div className="h-10 w-32 bg-gray-300 rounded-md animate-pulse ml-auto"></div>
                  </div>
                </div>

                <div className="space-y-6">
                  {[1, 2].map(item => (
                    <div key={item} className="flex gap-4">
                      <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse"></div>
                      <div className="flex-1">
                        <div className="h-4 w-40 bg-gray-300 rounded-md animate-pulse mb-2"></div>
                        <div className="h-4 w-full bg-gray-300 rounded-md animate-pulse mb-2"></div>
                        <div className="h-4 w-3/4 bg-gray-300 rounded-md animate-pulse mb-2"></div>
                        <div className="h-4 w-20 bg-gray-300 rounded-md animate-pulse"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Related Posts Skeleton */}
            <div className="mt-12">
              <div className="h-6 w-56 bg-gray-300 rounded-md animate-pulse mb-6"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map(item => (
                  <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-40 bg-gray-300 animate-pulse"></div>
                    <div className="p-4">
                      <div className="h-4 w-20 bg-gray-300 rounded-md animate-pulse mb-2"></div>
                      <div className="h-6 w-full bg-gray-300 rounded-md animate-pulse mb-4"></div>
                      <div className="h-4 w-32 bg-gray-300 rounded-md animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column Skeleton */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="h-6 w-40 bg-gray-300 rounded-md animate-pulse mb-4"></div>
              <div className="h-10 w-full bg-gray-300 rounded-md animate-pulse mb-3"></div>
              <div className="h-6 w-24 bg-gray-300 rounded-md animate-pulse"></div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="h-6 w-40 bg-gray-300 rounded-md animate-pulse mb-6"></div>
              {[1, 2, 3, 4].map(item => (
                <div key={item} className="flex gap-3 mb-4">
                  <div className="w-16 h-16 bg-gray-300 rounded-md animate-pulse"></div>
                  <div className="flex-1">
                    <div className="h-4 w-full bg-gray-300 rounded-md animate-pulse mb-2"></div>
                    <div className="h-3 w-20 bg-gray-300 rounded-md animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="h-6 w-40 bg-gray-300 rounded-md animate-pulse mb-6"></div>
              {[1, 2, 3].map(item => (
                <div key={item} className="mb-4">
                  <div className="h-4 w-full bg-gray-300 rounded-md animate-pulse mb-2"></div>
                  <div className="h-3 w-20 bg-gray-300 rounded-md animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const BlogViewPage: React.FC = () => {
  const router = useRouter();
  const params = useParams();
  const [post, setPost] = useState<any>(null);
  const [savedPosts, setSavedPosts] = useState<number[]>([]);
  const [expandedAuthor, setExpandedAuthor] = useState(false);
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState<any[]>([]);
  const [newComment, setNewComment] = useState('');
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Sample blog posts data
  const featuredPosts = [
    {
      id: 1,
      title: 'How to Buy a Reachstacker? 6 Critical Factors to Consider',
      excerpt: 'When comparing reachstackers, the specifications listed on paper are only the first step. If you want to make a smart investment that will serve your operations for years to come, you need to look beyond the basic specs.',
      content: `
        <h2>Introduction</h2>
        <p>Purchasing heavy machinery like a reachstacker is a significant capital investment that requires careful consideration and strategic planning. With various models, specifications, and manufacturers in the market, making the right choice can seem daunting. This comprehensive guide will walk you through the six most critical factors to consider when purchasing a reachstacker for your container handling operations.</p>
        
        <h2>1. Load Capacity and Stacking Height Requirements</h2>
        <p>The primary purpose of a reachstacker is to lift, move, and stack heavy containers efficiently and safely. The first and most crucial factor to consider is the machine's load capacity, which should align with your typical container weights and operational requirements.</p>
        
        <p>Modern reachstackers typically offer capacities ranging from 45 to 60 tons, with some specialized models handling up to 90 tons. It's essential to consider not just your current needs but also potential future requirements as your business grows and container weights potentially increase.</p>
        
        <div class="bg-gray-100 p-6 rounded-lg border-l-4 border-[#F1B434] my-6">
          <h3 class="text-xl font-bold text-gray-800 mb-2">Industry Insight</h3>
          <p class="text-gray-700">Always consider the "second tier" capacity, which is often 10-15% lower than the first tier capacity. This can significantly impact your operational efficiency and stacking capabilities in real-world scenarios.</p>
        </div>
        
        <p>Additionally, consider the stacking capability. How many containers high do you need to stack? Standard models typically stack containers 4-5 high, but some high-capacity models can stack up to 7 containers high. Remember that stacking height directly impacts your yard's storage density and operational efficiency.</p>
        
        <h2>2. Maneuverability and Yard Conditions Analysis</h2>
        <p>Reachstackers operate in container yards with varying conditions and space constraints. A thorough assessment of your operational environment is essential before selecting the right equipment.</p>
        
        <p>Consider the following yard factors:</p>
        <ul class="list-disc pl-5 my-4">
          <li class="mb-2"><strong>Yard surface type and condition:</strong> Paved, gravel, or mixed surfaces require different tire types and suspension systems</li>
          <li class="mb-2"><strong>Available turning radius:</strong> Compact yards require machines with excellent maneuverability and possibly all-wheel steering</li>
          <li class="mb-2"><strong>Gradeability requirements:</strong> Yards with slopes require machines with adequate power and braking systems</li>
          <li class="mb-2"><strong>Space constraints between rows:</strong> Narrow passages require specific dimensions and possibly specialized attachments</li>
          <li><strong>Environmental conditions:</strong> Operations in extreme temperatures, rain, or snow require additional features and protections</li>
        </ul>
        
        <h2>3. Fuel Efficiency and Environmental Impact Considerations</h2>
        <p>With rising fuel costs and increasingly stringent environmental regulations, fuel efficiency has become a crucial consideration in equipment selection. While diesel engines remain the industry standard, many manufacturers now offer hybrid options that can significantly reduce fuel consumption and emissions by up to 30%.</p>
        
        <p>Evaluate the total cost of ownership, not just the purchase price. A more expensive but fuel-efficient model may save you substantial money in the long run through reduced operating costs. Consider these environmental factors:</p>
        
        <ul class="list-disc pl-5 my-4">
          <li class="mb-2"><strong>Fuel consumption rates:</strong> Compare documented fuel efficiency under similar working conditions</li>
          <li class="mb-2"><strong>Emissions standards compliance:</strong> Ensure compliance with current regulations (EPA Tier 4, EU Stage V) and potential future requirements</li>
          <li class="mb-2"><strong>Noise pollution levels:</strong> Important for operations near residential areas or with noise restrictions</li>
          <li><strong>Potential for alternative fuel options:</strong> Consider future conversion possibilities to electric or other alternative power sources</li>
        </ul>
        
        <div class="bg-blue-50 p-6 rounded-lg my-6">
          <h3 class="text-xl font-bold text-blue-800 mb-2">Case Study: Port of Rotterdam Efficiency Project</h3>
          <p class="text-blue-700">After conducting a comprehensive analysis and switching to hybrid reachstackers, the Port of Rotterdam reported a 28% reduction in fuel costs and a 32% decrease in emissions while maintaining the same operational efficiency and even improving performance in certain metrics.</p>
        </div>
        
        <h2>4. Maintenance Requirements and Service Support Networks</h2>
        <p>Equipment downtime directly translates to lost revenue in container handling operations. Therefore, reliable service support and maintenance considerations are paramount in the selection process.</p>
        
        <p>Key maintenance considerations include:</p>
        <ul class="list-disc pl-5 my-4">
          <li class="mb-2"><strong>Service network availability:</strong> Ensure manufacturer support exists in your region with adequate response capabilities</li>
          <li class="mb-2"><strong>Average response time:</strong> Documented response times for technical support and emergency repairs</li>
          <li class="mb-2"><strong>Availability of spare parts:</strong> Parts inventory levels and supply chain reliability</li>
          <li class="mb-2"><strong>Training programs:</strong> Availability and quality of training for your maintenance team</li>
          <li><strong>Remote diagnostics capabilities:</strong> Advanced telematics and remote troubleshooting capabilities</li>
        </ul>
        
        <h2>5. Operator Comfort and Safety Features Integration</h2>
        <p>A comfortable operator is a productive, attentive, and safe operator. Modern reachstackers incorporate advanced ergonomic designs and comprehensive safety systems that significantly impact operational efficiency and accident prevention.</p>
        
        <p>Look for these operator-focused features during your evaluation:</p>
        <ul class="list-disc pl-5 my-4">
          <li class="mb-2"><strong>Ergonomic cabin design:</strong> Adjustable seating, intuitive control placement, and adequate space</li>
          <li class="mb-2"><strong>Climate control systems:</strong> Effective heating, ventilation and air conditioning for all weather conditions</li>
          <li class="mb-2"><strong>Visibility enhancements:</strong> 360-degree camera systems, additional mirrors, and window configurations</li>
          <li class="mb-2"><strong>Advanced stability control:</strong> Systems that prevent tipping and enhance safety during operations</li>
          <li><strong>Intuitive control interfaces:</strong> User-friendly displays and control systems that reduce operator fatigue</li>
        </ul>
        
        <h2>6. Technology Integration and Automation Capabilities</h2>
        <p>Advanced reachstackers now incorporate sophisticated technology systems that enhance operational efficiency, provide valuable business intelligence, and enable various levels of automation. These technological advancements represent significant value additions beyond basic equipment functionality.</p>
        
        <p>Consider these technological capabilities during your evaluation process:</p>
        <ul class="list-disc pl-5 my-4">
          <li class="mb-2"><strong>Fleet management integration:</strong> Compatibility with existing or planned fleet management systems</li>
          <li class="mb-2"><strong>Remote diagnostics and monitoring:</strong> Real-time equipment health monitoring and predictive maintenance capabilities</li>
          <li class="mb-2"><strong>Semi-automated operations:</strong> Systems that assist with container handling, reducing operator workload and improving precision</li>
          <li class="mb-2"><strong>Data reporting capabilities:</strong> Comprehensive operational data collection and reporting functionalities</li>
          <li><strong>Future upgrade pathways:</strong> Capacity for technology upgrades as new systems become available</li>
        </ul>
        
        <h2>Conclusion: Making an Informed Investment Decision</h2>
        <p>Selecting the right reachstacker requires a comprehensive evaluation of multiple factors specific to your operation. By carefully considering these six critical aspects—load capacity, maneuverability, fuel efficiency, maintenance, operator comfort, and technology integration—you can make an informed decision that will serve your business effectively for years to come.</p>
        
        <p>Remember that the cheapest initial option isn't always the most cost-effective in the long run. Consider the total cost of ownership, including maintenance, fuel consumption, potential downtime, and resale value when making your final decision.</p>
        
        <div class="bg-green-50 p-6 rounded-lg my-6">
          <h3 class="text-xl font-bold text-green-800 mb-2">Professional Recommendation</h3>
          <p class="text-green-700">Before making a final decision, we strongly recommend testing multiple models in your actual working environment. Many manufacturers offer demonstration units for comprehensive on-site evaluation. There's no substitute for seeing how a machine performs under your specific operational conditions and constraints.</p>
        </div>
      `,
      author: {
        name: 'Rajesh Kumar',
        role: 'Chief Engineer, Port Equipment Division',
        bio: 'With over 15 years of specialized experience in heavy machinery development and port operations innovation, Rajesh has led numerous container handling projects across major ports in Asia and Europe. He specializes in optimizing port operations through strategic equipment selection and process improvement methodologies. Rajesh holds a Master\'s degree in Mechanical Engineering from IIT Delhi and has authored several influential papers on port equipment efficiency in international journals.',
        avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80'
      },
      column: 'Industry Insights',
      date: '2024-04-05',
      readTime: '12 min',
      likes: '7,240',
      comments: '426',
      image: `${basePath}/blog1.png`,
      thumbnail: `${basePath}/blog1.png`,
      featuredImage: `${basePath}/blog1.png`,
      tags: ['Reachstackers', 'Heavy Machinery', 'Container Handling', 'Equipment Selection', 'Port Operations']
    },
    {
      id: 2,
      title: '6 Powerful Cranes Revolutionizing Modern Construction Projects',
      excerpt: 'Modern construction sites rely on specialized crane technology to achieve unprecedented efficiency and capability. These six crane types represent the cutting edge of construction equipment innovation.',
      content: `
        <h2>Introduction</h2>
        <p>The construction industry has witnessed remarkable technological advancements in recent years, with crane technology leading the charge in innovation. From towering skyscrapers to complex infrastructure projects, modern cranes have become indispensable tools that enable construction companies to tackle increasingly ambitious projects with precision and efficiency.</p>
        
        <h2>1. Tower Cranes: The Skyline Giants</h2>
        <p>Tower cranes remain the most recognizable feature of urban construction sites, capable of lifting heavy materials to impressive heights with remarkable precision. Modern tower cranes incorporate advanced safety systems, remote operation capabilities, and sophisticated load monitoring technology.</p>
        
        <div class="bg-gray-100 p-6 rounded-lg border-l-4 border-[#F1B434] my-6">
          <h3 class="text-xl font-bold text-gray-800 mb-2">Did You Know?</h3>
          <p class="text-gray-700">The world's tallest tower crane can reach heights of over 265 meters (869 feet) and lift loads up to 64 metric tons. These engineering marvels can often assemble themselves through a process called "climbing."</p>
        </div>
        
        <h2>2. Mobile Cranes: Versatility on Wheels</h2>
        <p>Mobile cranes offer unparalleled flexibility, combining lifting power with mobility. These self-propelled machines can quickly move between job sites and handle a wide variety of lifting tasks. Modern mobile cranes feature advanced outrigger systems, telescopic booms, and computerized load management.</p>
        
        <h2>3. Crawler Cranes: Stability on Challenging Terrain</h2>
        <p>With their tracked undercarriages, crawler cranes provide exceptional stability and mobility on rough or soft terrain. These heavy-lift specialists excel in infrastructure projects, power plant construction, and heavy industrial applications where ground conditions would challenge other crane types.</p>
        
        <h2>4. Overhead Cranes: Precision in Controlled Environments</h2>
        <p>Overhead cranes, also known as bridge cranes, operate on elevated runways to provide precise material handling in manufacturing facilities, warehouses, and industrial plants. Modern versions incorporate automation, precision positioning systems, and advanced control interfaces.</p>
        
        <h2>5. Rough-Terrain Cranes: Off-Road Capability</h2>
        <p>Designed specifically for off-road and rough terrain applications, these cranes feature robust four-wheel drive systems, large flotation tires, and enhanced ground clearance. They're indispensable for construction projects in remote or undeveloped areas.</p>
        
        <h2>6. Floating Cranes: Marine Construction Specialists</h2>
        <p>Floating cranes mounted on barges or specialized vessels handle heavy lifting tasks in marine environments, including port construction, bridge building, and offshore projects. These massive machines can lift thousands of tons and represent some of the most impressive engineering in the crane world.</p>
        
        <h2>Conclusion</h2>
        <p>The evolution of crane technology continues to push the boundaries of what's possible in construction. From smart cranes with IoT connectivity to hybrid power systems that reduce environmental impact, the future of crane technology promises even greater efficiency, safety, and capability.</p>
      `,
      author: {
        name: 'Priya Sharma',
        role: 'Senior Construction Equipment Specialist',
        bio: 'Head of Equipment Innovation at TIL with a focus on construction technology and sustainable building practices. Priya has over 12 years of experience in construction equipment consulting and has worked on major infrastructure projects across India and Southeast Asia.',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80'
      },
      column: 'Construction Technology',
      date: '2024-05-21',
      readTime: '15 min',
      likes: '3,920',
      comments: '116',
      image: `${basePath}/blog2.jpg`,
      thumbnail: `${basePath}/blog2.jpg`,
      featuredImage: `${basePath}/blog2.jpg`,
      tags: ['Cranes', 'Construction', 'Heavy Equipment', 'Building Technology']
    },
    {
      id: 3,
      title: 'The Future of Electric Heavy Machinery: Trends and Predictions',
      excerpt: 'As sustainability becomes increasingly important, the heavy machinery industry is rapidly transitioning toward electric power. This shift represents both a challenge and an opportunity for construction and logistics companies.',
      content: `Full content for electric machinery article...`,
      author: {
        name: 'Arjun Patel',
        role: 'Sustainable Technology Analyst',
        bio: 'Leading researcher in electric heavy machinery with publications in multiple industry journals.',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80'
      },
      column: 'Sustainable Technology',
      date: '2024-06-15',
      readTime: '10 min',
      likes: '2,450',
      comments: '89',
      image: `${basePath}/blog3.jpg`,
      thumbnail: `${basePath}/blog3.jpg`,
      featuredImage: `${basePath}/blog3.jpg`,
      tags: ['Electric Vehicles', 'Sustainability', 'Heavy Machinery', 'Innovation']
    },
    {
      id: 4,
      title: 'Maintenance Best Practices for Extending Equipment Lifespan',
      excerpt: 'Proper maintenance isn\'t just about fixing problems—it\'s about preventing them. Implementing these best practices can significantly extend the operational life of your heavy equipment while reducing downtime and repair costs.',
      content: `Full content for maintenance article...`,
      author: {
        name: 'Michael Chen',
        role: 'Equipment Maintenance Director',
        bio: '20+ years of experience in heavy equipment maintenance and reliability engineering.',
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80'
      },
      column: 'Equipment Management',
      date: '2024-03-12',
      readTime: '14 min',
      likes: '4,120',
      comments: '203',
      image: `${basePath}/blog4.jpg`,
      thumbnail: `${basePath}/blog4.jpg`,
      featuredImage: `${basePath}/blog4.jpg`,
      tags: ['Maintenance', 'Equipment Management', 'Best Practices', 'Operations']
    },
    {
      id: 5,
      title: 'Automation in Logistics: How Smart Equipment is Transforming Ports',
      excerpt: 'From autonomous cranes to AI-powered logistics systems, automation is revolutionizing port operations worldwide. This transformation is increasing efficiency, improving safety, and reshaping the global supply chain.',
      content: `Full content for automation article...`,
      author: {
        name: 'Lisa Wang',
        role: 'Port Technology Specialist',
        bio: 'Expert in port automation systems with implementation experience across three continents.',
        avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80'
      },
      column: 'Logistics Innovation',
      date: '2024-07-08',
      readTime: '18 min',
      likes: '5,340',
      comments: '312',
      image: `${basePath}/blog5.jpg`,
      thumbnail: `${basePath}/blog5.jpg`,
      featuredImage: `${basePath}/blog5.jpg`,
      tags: ['Automation', 'Logistics', 'Port Technology', 'AI']
    }
  ];

  // Sample comments data
  const sampleComments = [
    {
      id: 1,
      author: 'Rahul Mehta',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80',
      date: '2024-04-07',
      content: 'This comprehensive guide covers all critical aspects of reachstacker selection. The maintenance considerations section particularly resonates with our experience - we learned the importance of service network availability the hard way after purchasing equipment without adequate local support.',
      likes: 12
    },
    {
      id: 2,
      author: 'Sneha Joshi',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80',
      date: '2024-04-06',
      content: 'Excellent analysis of the total cost of ownership concept. Many procurement teams focus solely on initial purchase price without considering long-term operational expenses. Could you provide more details about lifecycle cost calculation methodologies in a future article?',
      likes: 8
    },
    {
      id: 3,
      author: 'Vikram Singh',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80',
      date: '2024-04-05',
      content: 'The technology integration section is particularly relevant as we move toward Industry 4.0 in port operations. We recently implemented IoT sensors on our reachstackers, and the predictive maintenance capabilities have already saved us significant downtime and repair costs.',
      likes: 15
    }
  ];

  // Popular posts for right column
  const popularPosts = featuredPosts
    .filter(p => p.id !== 1) // Exclude current post
    .sort((a, b) => parseInt(b.likes.replace(/,/g, '')) - parseInt(a.likes.replace(/,/g, '')))
    .slice(0, 4);

  // Recent posts for right column
  const recentPosts = featuredPosts
    .filter(p => p.id !== 1) // Exclude current post
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      // Find the current post based on URL parameter
      const slug = params.title as string;

      // Create a normalized version for comparison (remove special chars, lowercase)
      const normalizedSlug = slug.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ');

      const foundPost = featuredPosts.find(p => {
        // Normalize the post title similarly for comparison
        const normalizedTitle = p.title.toLowerCase()
          .replace(/[^a-z0-9\s]/g, '') // Remove special characters
          .replace(/\s+/g, ' ');        // Normalize spaces

        return normalizedTitle.includes(normalizedSlug) ||
          normalizedSlug.includes(normalizedTitle);
      });

      if (foundPost) {
        setPost(foundPost);
        setLikes(parseInt(foundPost.likes.replace(/,/g, '')));
        setComments(sampleComments);

        // Find related posts (same tags or same column)
        const related = featuredPosts
          .filter(p => p.id !== foundPost.id)
          .filter(p =>
            p.tags.some(tag => foundPost.tags.includes(tag)) ||
            p.column === foundPost.column
          )
          .slice(0, 3);

        setRelatedPosts(related);
      } else {
        // Fallback: if no match found, use the first post
        console.warn('Post not found by slug, using first post as fallback');
        setPost(featuredPosts[0]);
        setLikes(parseInt(featuredPosts[0].likes.replace(/,/g, '')));
        setComments(sampleComments);
        setRelatedPosts(featuredPosts.filter(p => p.id !== featuredPosts[0].id).slice(0, 3));
      }

      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [params.slug]);

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

  const toggleSavePost = () => {
    if (post) {
      setSavedPosts(prev =>
        prev.includes(post.id) ? prev.filter(id => id !== post.id) : [...prev, post.id]
      );
    }
  };

  const handleLike = () => {
    if (isLiked) {
      setLikes(prev => prev - 1);
    } else {
      setLikes(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        author: 'Current User', // Would come from authentication in a real app
        avatar: '',
        date: new Date().toISOString().split('T')[0],
        content: newComment,
        likes: 0
      };
      setComments([...comments, comment]);
      setNewComment('');
    }
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = post?.title || '';

    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        // Show a toast notification in a real app
        alert('Link copied to clipboard!');
        break;
    }

    setShowShareOptions(false);
  };

  if (loading) {
    return <SkeletonLoader />;
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Post not found</h2>
          <p className="text-gray-600 mt-2">The article you're looking for doesn't exist.</p>
          <button
            onClick={() => router.push(`/media/blog`)}
            className="mt-8 px-4 py-2 bg-[#F1B434] text-white rounded-md hover:bg-[#d89c2a] transition-colors"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-[#f8f9fa] to-white min-h-screen">
      {/* Header */}
      <div className="relative h-72 w-full overflow-hidden">
        <img
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-transparent z-20" />

        <div className="absolute inset-0 z-20 flex items-center pt-6">
          <div className="max-w-6xl mx-auto px-6 md:px-10 w-full">
            <button
              onClick={() => router.push(`/media/blog`)}
              className="flex items-center text-white/80 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Blog
            </button>

            <motion.span
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#F1B434] to-[#FFE352] text-sm font-bold tracking-tight mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {post.column.toUpperCase()}
            </motion.span>

            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {post.title}
            </motion.h1>

            <motion.div
              className="flex flex-wrap items-center gap-4 text-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>{post.readTime} read</span>
              </div>
              <div className="flex items-center gap-1">
                <BookOpen size={14} />
                <span>{Math.ceil(post.content.length / 1200)} min read</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 md:px-10 py-12 -mt-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Article Content */}
              <article className="prose prose-lg max-w-none p-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#F1B434]/10 text-[#F1B434] rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="lead text-gray-700 text-xl mb-8 font-medium">
                  {post.excerpt}
                </p>

                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>

              {/* Action Bar */}
              <div className="border-t border-gray-200 p-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={handleLike}
                    className="flex items-center gap-2 text-gray-600 hover:text-[#F1B434] transition-colors"
                  >
                    <Heart
                      size={20}
                      fill={isLiked ? "#F1B434" : "none"}
                      className={isLiked ? "text-[#F1B434]" : ""}
                    />
                    <span>{likes.toLocaleString()}</span>
                  </motion.button>

                  <button className="flex items-center gap-2 text-gray-600 hover:text-[#F1B434] transition-colors">
                    <MessageCircle size={20} />
                    <span>{comments.length}</span>
                  </button>

                  <div className="relative">
                    <button
                      onClick={() => setShowShareOptions(!showShareOptions)}
                      className="flex items-center gap-2 text-gray-600 hover:text-[#F1B434] transition-colors"
                    >
                      <Share2 size={20} />
                      <span>Share</span>
                    </button>

                    {showShareOptions && (
                      <motion.div
                        className="absolute bottom-full left-0 mb-2 w-48 bg-white rounded-md shadow-lg py-2 z-10 border border-gray-200"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <button
                          onClick={() => handleShare('facebook')}
                          className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <Facebook size={16} className="mr-2 text-blue-600" />
                          Share on Facebook
                        </button>
                        <button
                          onClick={() => handleShare('twitter')}
                          className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <Twitter size={16} className="mr-2 text-blue-400" />
                          Share on Twitter
                        </button>
                        <button
                          onClick={() => handleShare('linkedin')}
                          className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <Linkedin size={16} className="mr-2 text-blue-700" />
                          Share on LinkedIn
                        </button>
                        <button
                          onClick={() => handleShare('copy')}
                          className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <LinkIcon size={16} className="mr-2" />
                          Copy Link
                        </button>
                      </motion.div>
                    )}
                  </div>
                </div>

                <button
                  onClick={toggleSavePost}
                  className="flex items-center gap-2 text-gray-600 hover:text-[#F1B434] transition-colors"
                >
                  <Heart
                    size={20}
                    fill={savedPosts.includes(post.id) ? "#F1B434" : "none"}
                    className={savedPosts.includes(post.id) ? "text-[#F1B434]" : ""}
                  />
                  <span>{savedPosts.includes(post.id) ? 'Saved' : 'Save for later'}</span>
                </button>
              </div>

              {/* Author Bio */}
              <div className="border-t border-gray-200 p-6 bg-gray-50">
                <div className="flex items-start gap-4">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{post.author.name}</h3>
                    <p className="text-sm text-[#F1B434]">{post.author.role}</p>
                    <p className="text-gray-600 mt-2">{post.author.bio}</p>
                    <div className="flex items-center gap-2 mt-3">
                      <button className="text-sm text-[#F1B434] hover:underline flex items-center">
                        <User size={14} className="mr-1" />
                        View Profile
                      </button>
                      <span className="text-gray-400">•</span>
                      <button className="text-sm text-[#F1B434] hover:underline">
                        More Articles
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="border-t border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Comments ({comments.length})</h3>

                <form onSubmit={handleCommentSubmit} className="mb-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold">
                        <User size={20} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Add a comment..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F1B434] focus:border-[#F1B434]"
                        rows={3}
                      />
                      <div className="mt-2 flex justify-end">
                        <button
                          type="submit"
                          className="px-4 py-2 bg-[#F1B434] text-white rounded-md hover:bg-[#d89c2a] transition-colors flex items-center"
                        >
                          Post Comment
                          <ArrowRight size={16} className="ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>

                <div className="space-y-6">
                  {comments.map(comment => (
                    <div key={comment.id} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <img
                          src={comment.avatar}
                          alt={comment.author}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold text-gray-800">{comment.author}</h4>
                          <span className="text-sm text-gray-500">{formatDate(comment.date)}</span>
                        </div>
                        <p className="text-gray-700 mb-2">{comment.content}</p>
                        <div className="flex items-center gap-4">
                          <button className="text-sm text-gray-500 hover:text-[#F1B434] flex items-center gap-1">
                            <Heart size={14} />
                            <span>{comment.likes}</span>
                          </button>
                          <button className="text-sm text-gray-500 hover:text-[#F1B434]">
                            Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map(relatedPost => (
                    <motion.div
                      key={relatedPost.id}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                      whileHover={{ y: -5 }}
                      onClick={() => router.push(`media/blog/${encodeURIComponent(relatedPost.title.replace(/\s+/g, '-').toLowerCase())}`)}
                    >
                      <div className="h-40 overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <span className="text-xs font-medium text-[#F1B434]">{relatedPost.column}</span>
                        <h4 className="font-bold text-gray-800 mt-1 mb-2 line-clamp-2">{relatedPost.title}</h4>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{relatedPost.excerpt}</p>
                        <div className="flex items-center text-xs text-gray-500">
                          <span>{formatDate(relatedPost.date).split(',')[0]}</span>
                          <span className="mx-2">•</span>
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1">
            {/* Search Box */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Search Articles</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F1B434] focus:border-[#F1B434]"
                />
                <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
              </div>
              <button className="mt-3 text-sm text-[#F1B434] hover:underline">
                Advanced Search
              </button>
            </div>

            {/* Popular Posts */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center">
                <TrendingUp size={20} className="mr-2 text-[#F1B434]" />
                Popular Articles
              </h3>
              <div className="space-y-4">
                {popularPosts.map(post => (
                  <div 
                    key={post.id} 
                    className="flex gap-3 cursor-pointer group"
                    onClick={() => router.push(`/media/blog/${encodeURIComponent(post.title.replace(/\s+/g, '-').toLowerCase())}`)}
                  >
                    <div className="flex-shrink-0">
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded-md group-hover:opacity-90 transition-opacity"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-800 text-sm leading-tight group-hover:text-[#F1B434] transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <div className="flex items-center mt-1 text-xs text-gray-500">
                        <ClockIcon size={12} className="mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center">
                <ClockIcon size={20} className="mr-2 text-[#F1B434]" />
                Recent Articles
              </h3>
              <div className="space-y-3">
                {recentPosts.map(post => (
                  <div 
                    key={post.id}
                    className="cursor-pointer group"
                    onClick={() => router.push(`/media/blog/${encodeURIComponent(post.title.replace(/\s+/g, '-').toLowerCase())}`)}
                  >
                    <h4 className="font-medium text-gray-800 text-sm group-hover:text-[#F1B434] transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <div className="flex items-center mt-1 text-xs text-gray-500">
                      <span>{formatDate(post.date).split(',')[0]}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Categories</h3>
              <div className="space-y-2">
                {['Industry Insights', 'Construction Technology', 'Sustainable Technology', 'Equipment Management', 'Logistics Innovation'].map(category => (
                  <div key={category} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-sm text-gray-700 hover:text-[#F1B434] cursor-pointer transition-colors">
                      {category}
                    </span>
                    <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full">
                      {featuredPosts.filter(p => p.column === category).length}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogViewPage;