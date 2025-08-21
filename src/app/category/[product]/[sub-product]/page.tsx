'use client';
import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, ChevronLeft, Download, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const subProducts = {
  'rough-terrain-cranes': [
    {
      id: 'husky-620',
      name: 'HUSKY 620',
      description: 'Compact rough terrain crane with excellent maneuverability',
      image: `${basePath}/husky-620.jpg`,
      features: [
        '20 Ton Capacity',
        '4x4 Drive',
        'Telescopic Boom',
        'All-terrain performance'
      ],
      specifications: [
        { name: 'Max Capacity', value: '20 Tons' },
        { name: 'Boom Length', value: '24 Meters' },
        { name: 'Engine Power', value: '160 HP' },
        { name: 'Travel Speed', value: '30 km/h' }
      ],
      brochure: `${basePath}/brochures/husky-620.pdf`
    },
    {
      id: 'rt-630c',
      name: 'RT 630C',
      description: 'Mid-range rough terrain crane with superior lifting capacity',
      image: `${basePath}/rt630c.jpg`,
      features: [
        '30 Ton Capacity',
        '4-section boom',
        'Hydraulic outriggers',
        'Advanced control system'
      ],
      specifications: [
        { name: 'Max Capacity', value: '30 Tons' },
        { name: 'Boom Length', value: '32 Meters' },
        { name: 'Engine Power', value: '220 HP' },
        { name: 'Travel Speed', value: '28 km/h' }
      ],
      brochure: `${basePath}/brochures/rt-630c.pdf`
    }
  ],
  'truck-cranes': [
    {
      id: 'hydra-830m',
      name: 'HYDRA 830M',
      description: 'High-capacity truck crane for heavy lifting operations',
      image: `${basePath}/hydra830m.jpg`,
      features: [
        '30 Ton Capacity',
        'Telescopic boom',
        'On-road mobility',
        'Advanced safety features'
      ],
      specifications: [
        { name: 'Max Capacity', value: '30 Tons' },
        { name: 'Boom Length', value: '36 Meters' },
        { name: 'Engine Power', value: '280 HP' },
        { name: 'Max Speed', value: '75 km/h' }
      ],
      brochure: `${basePath}/brochures/hydra-830m.pdf`
    }
  ]
};

export default function SubProductPage({ 
  params 
}: { 
  params: { product: string; subproduct: string } 
}) {
  const productCategory = params.product;
  const subProductId = params.subproduct;
  
  const categoryProducts = subProducts[productCategory as keyof typeof subProducts];
  const subProduct = categoryProducts?.find(p => p.id === subProductId);
  
  if (!subProduct) {
    return notFound();
  }

  return (
    <div className="bg-gradient-to-b from-[#f8f9fa] to-white min-h-screen font-sans">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-black/80 to-black/35 h-72 w-full overflow-hidden">
        <img
          src={subProduct.image}
          alt={subProduct.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 z-20 flex items-center pt-6">
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
                {productCategory.replace(/-/g, ' ').toUpperCase()}
              </motion.span>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-white mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {subProduct.name}
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
                {subProduct.description}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 py-16 -mt-6 relative z-10">
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <nav className="flex items-center text-sm">
            <Link href="/category" className="text-[#F1B434] hover:underline">
              Products
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            <Link 
              href={`/category/${productCategory}`} 
              className="text-[#F1B434] hover:underline"
            >
              {productCategory.replace(/-/g, ' ')}
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            <span className="text-gray-600">{subProduct.name}</span>
          </nav>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={subProduct.image}
              alt={subProduct.name}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Overview</h2>
              <p className="text-gray-600 mb-6">{subProduct.description}</p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">Key Features</h3>
              <ul className="space-y-3">
                {subProduct.features.map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <div className="flex-shrink-0 h-5 w-5 text-[#F1B434] mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Technical Specifications</h3>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-3">
                  {subProduct.specifications.map((spec, index) => (
                    <motion.li 
                      key={index} 
                      className="flex justify-between border-b border-gray-100 pb-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <span className="text-gray-600 font-medium">{spec.name}</span>
                      <span className="text-gray-800">{spec.value}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href={subProduct.brochure}
                download
                className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors shadow-sm flex items-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Brochure
              </a>
              <button className="px-6 py-3 bg-[#F1B434] text-white font-medium rounded-lg hover:bg-[#d89c2a] transition-colors shadow-md">
                Request Quote
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {categoryProducts.length > 1 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Other Models in This Series</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryProducts
                .filter(p => p.id !== subProductId)
                .map((relatedProduct, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl shadow-md overflow-hidden group cursor-pointer border border-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#F1B434] transition-colors">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">{relatedProduct.description}</p>
                      <div className="flex items-center text-sm text-[#F1B434] font-medium">
                        <Link href={`/category/${productCategory}/${relatedProduct.id}`}>
                          <span>View Details</span>
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        )}

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-[#F1B434] to-[#FFE352] rounded-xl shadow-lg p-8 text-white"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Need more information?</h2>
              <p className="mb-6">
                Our product specialists are available to answer your questions about the {subProduct.name} and help you find the right solution for your needs.
              </p>
            </div>
            <div>
              <ul className="space-y-4">
                <motion.li
                  className="flex items-start group"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex-shrink-0 h-6 w-6 text-white mr-3 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium">Call Us</h3>
                    <a href="tel:+18001234567" className="text-white/90 hover:underline">+1 (800) 123-4567</a>
                  </div>
                </motion.li>
                <motion.li
                  className="flex items-start group"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex-shrink-0 h-6 w-6 text-white mr-3 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email Us</h3>
                    <a href="mailto:sales@tilindia.com" className="text-white/90 hover:underline">sales@tilindia.com</a>
                  </div>
                </motion.li>
              </ul>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}