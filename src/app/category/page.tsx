'use client';
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, Zap, Star, Settings, ChevronRight, ChevronLeft } from 'lucide-react';
import BrochureDownloadModal from '../../components/BrochureDownload';
import Link from 'next/link';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Page: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all-products');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Categories with TIL brand colors from guidelines
  const primaryCategories = [
    {
      id: 'all-products',
      name: 'TIL Range',
      icon: <Package className="w-4 h-4" />,
      description: 'Reliable lifting and handling for Indian industries',
      color: 'from-[#F1B434] to-[#FFE352]',
      textColor: 'text-[#F1B434]'
    },
    {
      id: 'new-arrivals',
      name: 'Manitowoc Range',
      icon: <Zap className="w-4 h-4" />,
      description: 'Heavy-duty cranes with global performance',
      color: 'from-[#F1B434] to-[#FFE352]',
      textColor: 'text-[#F1B434]'
    },
    {
      id: 'best-sellers',
      name: 'Hyster TIL Range',
      icon: <Star className="w-4 h-4" />,
      description: 'Reliable forklifts and handling systems from Hyster-TIL',
      color: 'from-[#F1B434] to-[#FFE352]',
      textColor: 'text-[#F1B434]'
    },
    {
      id: 'services',
      name: 'Snorkel Range',
      icon: <Settings className="w-4 h-4" />,
      description: 'Aerial work platforms and access equipment by Snorkel',
      color: 'from-[#F1B434] to-[#FFE352]',
      textColor: 'text-[#F1B434]'
    }
  ];

  const allProducts = [
    {
      id: 'truck-cranes',
      category: 'all-products',
      name: 'Truck Cranes',
      description: 'High-capacity cranes ideal for tall construction sites',
      image: `${basePath}/truck-cranes.jpeg`,
      features: ['Telescopic Boom', 'High Lifting Range', 'On-road Mobility'],
      brochure: `${basePath}/brochures/truck-cranes.pdf`
    },
    {
      id: 'pick-n-carry-cranes',
      category: 'all-products',
      name: 'Pick n Carry Cranes',
      description: 'Mobile cranes suitable for fast on-site operations',
      image: `${basePath}/pick-n-carry.png`,
      features: ['360° Mobility', 'Operator Cabin Comfort', 'Quick Load Handling'],
      brochure: `${basePath}/brochures/pick-n-carry.pdf`
    },
    {
      id: 'rough-terrain-cranes',
      category: 'all-products',
      name: 'Rough Terrain Cranes',
      description: 'Designed for challenging job site conditions',
      image: `${basePath}/rough-terrain.png`,
      features: ['All-Terrain Tyres', 'Four-Wheel Steering', 'Hydraulic Outriggers'],
      brochure: `${basePath}/brochures/rough-terrain.pdf`
    },
    {
      id: 'articulating-cranes',
      category: 'all-products',
      name: 'Articulating Cranes',
      description: 'Flexible, jointed cranes ideal for tight spaces',
      image: `${basePath}/articulating.jpg`,
      features: ['Knuckle Boom Design', 'Compact Operation', 'Remote Control'],
      brochure: `${basePath}/brochures/articulating.pdf`
    },
    {
      id: 'grove-range',
      category: 'new-arrivals',
      name: 'Grove Range',
      description: 'Smart lifting solutions engineered for precision and durability',
      image: `${basePath}/grove-range.png`,
      features: ['Advanced Safety Systems', 'Optimized Weight Distribution', 'Digital Load Monitoring'],
      brochure: `${basePath}/brochures/grove-range.pdf`
    },
    {
      id: 'crawler-cranes',
      category: 'new-arrivals',
      name: 'Crawler Cranes',
      description: 'Robust tracked cranes for heavy-duty lifting',
      image: `${basePath}/crawler-cranes.png`,
      features: ['Track Mobility', 'High Stability', 'Heavy Lifting Capacity'],
      brochure: `${basePath}/brochures/crawler-cranes.pdf`
    },
    {
      id: 'forklift-trucks',
      category: 'best-sellers',
      name: 'Forklift Trucks',
      description: 'Efficient material handling for warehouses and logistics',
      image: `${basePath}/forklift.png`,
      features: ['Precision Steering', 'High Load Capacity', 'Compact Turning Radius'],
      brochure: `${basePath}/brochures/forklift.pdf`
    },
    {
      id: 'reachstackers',
      category: 'best-sellers',
      name: 'Reachstackers',
      description: 'Container handling equipment for ports and yards',
      image: `${basePath}/reachstackers.png`,
      features: ['Extended Reach', 'Twistlock Compatibility', 'High Stack Efficiency'],
      brochure: `${basePath}/brochures/reachstackers.pdf`
    },
    {
      id: 'boom-lifts',
      category: 'services',
      name: 'Boom Lifts',
      description: 'Elevated work platforms for maintenance and construction',
      image: `${basePath}/boomlifts.png`,
      features: ['Articulating Arm', 'Vertical and Horizontal Reach', 'Safe Cage Platform'],
      brochure: `${basePath}/brochures/boomlifts.pdf`
    }
  ];

  const categoryProducts = {
    'all-products': allProducts.filter(p => p.category === 'all-products'),
    'new-arrivals': allProducts.filter(p => p.category === 'new-arrivals'),
    'best-sellers': allProducts.filter(p => p.category === 'best-sellers'),
    'services': allProducts.filter(p => p.category === 'services')
  };

  const handleNextSlide = () => {
    if (!activeCategory) return;
    setCurrentSlide(prev =>
      (prev + 1) % categoryProducts[activeCategory as keyof typeof categoryProducts].length
    );
  };

  const handlePrevSlide = () => {
    if (!activeCategory) return;
    setCurrentSlide(prev =>
      (prev - 1 + categoryProducts[activeCategory as keyof typeof categoryProducts].length) %
      categoryProducts[activeCategory as keyof typeof categoryProducts].length
    );
  };

  const handleCategoryClick = (categoryId: string) => {
    setCurrentSlide(0);
    setActiveCategory(categoryId);
  };

  const getActiveCategoryColor = () => {
    if (!activeCategory) return 'from-[#F1B434] to-[#FFE352]';
    return primaryCategories.find(c => c.id === activeCategory)?.color || 'from-[#F1B434] to-[#FFE352]';
  };

  const quickLinks = [
    { name: 'Product Brochures', url: '#brochures' },
    { name: 'Product Comparisons', url: '#compare' },
    { name: 'Maintenance Guides', url: '#maintenance' },
    { name: 'Safety Standards', url: '#safety' }
  ];

  return (
    <div className="bg-gradient-to-b from-[#f8f9fa] to-white min-h-screen font-sans overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-black/80 to-black/35 h-72 w-full overflow-hidden">
        <img
          src={`${basePath}/productspage_bg.jpg`}
          alt="TIL Products"
          className="w-full h-full object-cover"
        />

        {/* Left-to-right overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent z-10" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent z-20" />

        <div className="absolute inset-0 z-30 flex items-center pt-6">
          <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 w-full">
            <motion.div
              className="max-w-2xl"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }}
            >
              <motion.span
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#F1B434] to-[#FFE352] text-sm font-bold tracking-tight mb-2 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                INDUSTRIAL EQUIPMENT
              </motion.span>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-white mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                TIL <span className="text-[#F1B434]">Products</span>
              </motion.h1>

              <motion.div
                className="w-24 h-1.5 bg-gradient-to-r from-[#F1B434] to-[#FFE352] rounded-full mb-4"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />

              <motion.p
                className="text-lg text-gray-200 max-w-xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                High-performance material handling and construction equipment built for Indian conditions.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 py-16 -mt-6 relative z-10">
        {/* Top Section - Introduction and Quick Links */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Introduction Section */}
          <motion.section
            className="lg:w-2/3 text-left"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { clipPath: "inset(0 100% 0 0)" },
              visible: {
                clipPath: "inset(0 0% 0 0)",
                transition: { duration: 1, ease: "easeInOut" }
              }
            }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Explore Our Comprehensive Product Range
            </h2>

            {/* Sliding underline */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="h-1.5 bg-gradient-to-r from-[#F1B434] to-[#FFE352] rounded-full mb-6"
            />

            <p className="text-lg text-gray-600 leading-relaxed">
              TIL offers a diverse portfolio of material handling and construction equipment designed to meet the toughest
              industrial challenges. From cranes to forklifts, our products combine global technology with local expertise
              to deliver unmatched performance in Indian conditions.
            </p>
          </motion.section>

          {/* Quick Links Section */}
          <motion.div
            className="lg:w-1/3 ml-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 h-full">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center"
                  >
                    <ChevronRight className="w-4 h-4 text-[#F1B434] mr-2" />
                    <a
                      href={link.url}
                      className="text-gray-700 hover:text-[#F1B434] transition-colors"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Category Navigation */}
        <section className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {primaryCategories.map((category) => (
              <motion.div
                key={category.id}
                ref={(el: HTMLDivElement | null) => {
                  categoryRefs.current[category.id] = el;
                }}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`relative p-6 rounded-xl cursor-pointer transition-all ${activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white`
                  : 'bg-white hover:bg-gray-50'
                  }`}
                onClick={() => handleCategoryClick(category.id)}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg ${activeCategory === category.id
                    ? 'bg-white/20'
                    : `bg-gradient-to-r ${category.color}/10`
                    }`}>
                    {React.cloneElement(category.icon, {
                      className: `${category.icon.props.className} ${activeCategory === category.id
                        ? 'text-white'
                        : `${category.textColor}`
                        }`
                    })}
                  </div>
                  <h3 className="text-lg font-bold">{category.name}</h3>
                </div>
                <p className={`text-sm ${activeCategory === category.id
                  ? 'text-white/90'
                  : 'text-gray-600'
                  }`}>
                  {category.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Default Products Grid */}
        {!activeCategory && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
              <button className="text-sm font-medium text-[#F1B434] hover:underline">
                View All Products
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allProducts.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden group cursor-pointer border border-gray-100"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#F1B434] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                    <div className="flex items-center text-sm text-[#F1B434] font-medium">
                      <Link href="/category/${product.id}">
                        <span>Explore Product</span>
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Category-Specific Carousel */}
        <AnimatePresence>
          {activeCategory && (
            <motion.div
              key={`gradient-${activeCategory}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
                }
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                transition: {
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
                }
              }}
              className="relative mb-16"
            >
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 -z-10 rounded-xl"
                initial={{ 
                  background: `radial-gradient(circle at 50% 50%, rgba(247, 184, 49, 0.1) 0%, transparent 0%)`
                }}
                animate={{ 
                  background: `radial-gradient(circle at 50% 50%, rgba(248, 184, 46, 0.1) 50%, transparent 70%)`
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
              
              <div className="p-8">
                <motion.div
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  exit={{ y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-xl"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">
                      {primaryCategories.find(c => c.id === activeCategory)?.name}
                    </h2>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handlePrevSlide}
                        className="p-2 rounded-full bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                        disabled={categoryProducts[activeCategory as keyof typeof categoryProducts].length <= 1}
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={handleNextSlide}
                        className="p-2 rounded-full bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                        disabled={categoryProducts[activeCategory as keyof typeof categoryProducts].length <= 1}
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Product Image */}
                    <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentSlide}
                          src={categoryProducts[activeCategory as keyof typeof categoryProducts][currentSlide].image}
                          alt={categoryProducts[activeCategory as keyof typeof categoryProducts][currentSlide].name}
                          className="w-full h-full object-cover"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          transition={{ duration: 0.3 }}
                        />
                      </AnimatePresence>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <div className="flex space-x-2 justify-center">
                          {categoryProducts[activeCategory as keyof typeof categoryProducts].map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentSlide(index)}
                              className={`w-3 h-3 rounded-full ${currentSlide === index
                                ? 'bg-white'
                                : 'bg-white/50'
                                }`}
                              aria-label={`Go to slide ${index + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div>
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl font-bold text-gray-800 mb-2"
                      >
                        {categoryProducts[activeCategory as keyof typeof categoryProducts][currentSlide].name}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 mb-6"
                      >
                        {categoryProducts[activeCategory as keyof typeof categoryProducts][currentSlide].description}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mb-6"
                      >
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {categoryProducts[activeCategory as keyof typeof categoryProducts][currentSlide].features.map((feature, index) => (
                            <motion.li
                              key={index}
                              className="flex items-start"
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 + index * 0.1 }}
                            >
                              <div className="flex-shrink-0 h-5 w-5 text-[#F1B434] mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="text-gray-700">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap gap-3"
                      >
                        <button className="px-6 py-3 bg-[#F1B434] text-white font-medium rounded-lg hover:bg-[#d89c2a] transition-colors shadow-md">
                          <Link
                            href={`/category/${categoryProducts[activeCategory as keyof typeof categoryProducts][currentSlide].id
                              }`}
                          >
                            View Details
                          </Link>
                        </button>
                        <button
                          onClick={() => setIsModalOpen(true)}
                          className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
                        >
                          Download Brochure
                        </button>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Product Features */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className={`bg-gradient-to-r ${getActiveCategoryColor()} rounded-xl shadow-sm p-8 text-white`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Why Choose TIL Products?</h2>
                <p className="mb-6">
                  Our equipment is engineered for performance, durability and safety in the most demanding Indian working conditions.
                </p>
                <button className="px-6 py-3 bg-white text-[#F1B434] font-medium rounded-lg hover:bg-gray-100 transition-colors shadow-md">
                  Contact Our Experts
                </button>
              </div>
              <div>
                <ul className="space-y-4">
                  {[
                    'Industry-leading durability',
                    'Advanced safety features',
                    'Nationwide service network',
                    'Custom solutions available'
                  ].map((feature, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                    >
                      <div className="flex-shrink-0 h-6 w-6 text-white mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-medium">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Newsletter Subscription */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-md p-8 border border-gray-100"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Need Help Choosing the Right Equipment?
            </h2>
            <p className="text-gray-600 mb-6">
              Our product specialists are ready to help you find the perfect solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="px-6 py-3 bg-[#F1B434] text-white font-medium rounded-lg hover:bg-[#d89c2a] transition-colors shadow-md">
                Get Product Consultation
              </button>
              <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                Call Us Now
              </button>
            </div>
          </div>
        </motion.section>
      </main>
      <BrochureDownloadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Page;