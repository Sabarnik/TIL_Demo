'use client';
import React, { Suspense } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import GetQuoteModal from '../../../../components/GetQuote';
import BrochureDownloadModal from '../../../../components/BrochureDownload';
import { motion } from 'framer-motion';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

// Sub-product data structure
const allSubProducts = {
  'rough-terrain-cranes': [
    {
      id: 'husky-620',
      name: 'HUSKY 620',
      description: 'Powerful rough terrain crane with excellent maneuverability',
      image: `${basePath}/husky-620.jpg`,
      features: ['All-Terrain Capability', 'Enhanced Stability', 'Operator Comfort'],
      brochure: `${basePath}/brochures/husky-620.pdf`,
      specifications: [
        { name: 'Max Capacity', value: '20 Tons' },
        { name: 'Boom Length', value: '28 Meters' },
        { name: 'Engine Power', value: '180 HP' }
      ],
      parentProduct: 'rough-terrain-cranes'
    },
    {
      id: 'rt-630c',
      name: 'RT 630C',
      description: 'Advanced rough terrain crane for challenging conditions',
      image: `${basePath}/rt630c.jpg`,
      features: ['Four-Wheel Drive', 'Hydraulic Outriggers', 'Advanced Control System'],
      brochure: `${basePath}/brochures/rt-630c.pdf`,
      specifications: [
        { name: 'Max Capacity', value: '30 Tons' },
        { name: 'Boom Length', value: '32 Meters' },
        { name: 'Engine Power', value: '220 HP' }
      ],
      parentProduct: 'rough-terrain-cranes'
    },
    {
      id: 'rt-740b',
      name: 'RT 740B',
      description: 'Heavy-duty rough terrain crane with superior lifting capacity',
      image: `${basePath}/rt740b.jpg`,
      features: ['Extended Boom', 'All-Weather Cab', 'Precision Controls'],
      brochure: `${basePath}/brochures/rt-740b.pdf`,
      specifications: [
        { name: 'Max Capacity', value: '40 Tons' },
        { name: 'Boom Length', value: '36 Meters' },
        { name: 'Engine Power', value: '250 HP' }
      ],
      parentProduct: 'rough-terrain-cranes'
    },
    {
      id: 'rt-760',
      name: 'RT 760',
      description: 'High-performance rough terrain crane for demanding applications',
      image: `${basePath}/rt760.jpg`,
      features: ['Enhanced Load Capacity', 'Advanced Safety Systems', 'Comfortable Operator Station'],
      brochure: `${basePath}/brochures/rt-760.pdf`,
      specifications: [
        { name: 'Max Capacity', value: '60 Tons' },
        { name: 'Boom Length', value: '42 Meters' },
        { name: 'Engine Power', value: '300 HP' }
      ],
      parentProduct: 'rough-terrain-cranes'
    },
    {
      id: 'rt-880',
      name: 'RT 880',
      description: 'Premium rough terrain crane with exceptional reach and power',
      image: `${basePath}/rt880.png`,
      features: ['Maximum Lifting Power', 'Extended Reach Capability', 'State-of-the-Art Controls'],
      brochure: `${basePath}/brochures/rt-880.pdf`,
      specifications: [
        { name: 'Max Capacity', value: '80 Tons' },
        { name: 'Boom Length', value: '48 Meters' },
        { name: 'Engine Power', value: '350 HP' }
      ],
      parentProduct: 'rough-terrain-cranes'
    }
  ],
  'truck-cranes': [
    {
      id: 'hydra-830m',
      name: 'HYDRA 830M',
      description: 'High-capacity truck crane for heavy lifting operations',
      image: `${basePath}/hydra830m.jpg`,
      features: ['Telescopic Boom', 'On-road Mobility', 'Precision Control'],
      brochure: `${basePath}/brochures/hydra-830m.pdf`,
      specifications: [
        { name: 'Max Capacity', value: '30 Tons' },
        { name: 'Boom Length', value: '35 Meters' },
        { name: 'Engine Power', value: '280 HP' }
      ],
      parentProduct: 'truck-cranes'
    },
    {
      id: 'tms-750b-mk-ii',
      name: 'TMS 750B MK II',
      description: 'Versatile truck-mounted crane with advanced features',
      image: `${basePath}/tms750b.jpg`,
      features: ['Multi-Section Boom', 'Load Moment Indicator', 'Smooth Operation'],
      brochure: `${basePath}/brochures/tms-750b-mk-ii.pdf`,
      specifications: [
        { name: 'Max Capacity', value: '50 Tons' },
        { name: 'Boom Length', value: '40 Meters' },
        { name: 'Engine Power', value: '320 HP' }
      ],
      parentProduct: 'truck-cranes'
    },
    {
      id: 'tms-830',
      name: 'TMS 830',
      description: 'Robust truck crane designed for heavy construction',
      image: `${basePath}/tms830.jpg`,
      features: ['High Lifting Capacity', 'Stable Operation', 'Advanced Hydraulics'],
      brochure: `${basePath}/brochures/tms-830.pdf`,
      specifications: [
        { name: 'Max Capacity', value: '80 Tons' },
        { name: 'Boom Length', value: '45 Meters' },
        { name: 'Engine Power', value: '380 HP' }
      ],
      parentProduct: 'truck-cranes'
    },
    {
      id: 'tms-845',
      name: 'TMS 845',
      description: 'Heavy-duty truck crane for industrial applications',
      image: `${basePath}/tms845.jpg`,
      features: ['Extended Boom Options', 'Precision Controls', 'Enhanced Safety Features'],
      brochure: `${basePath}/brochures/tms-845.pdf`,
      specifications: [
        { name: 'Max Capacity', value: '100 Tons' },
        { name: 'Boom Length', value: '50 Meters' },
        { name: 'Engine Power', value: '420 HP' }
      ],
      parentProduct: 'truck-cranes'
    },
    {
      id: 'tms-850',
      name: 'TMS 850',
      description: 'Premium truck crane with maximum lifting capacity',
      image: `${basePath}/tms850.jpg`,
      features: ['Maximum Load Capacity', 'Advanced Control Systems', 'Operator Comfort'],
      brochure: `${basePath}/brochures/tms-850.pdf`,
      specifications: [
        { name: 'Max Capacity', value: '120 Tons' },
        { name: 'Boom Length', value: '60 Meters' },
        { name: 'Engine Power', value: '450 HP' }
      ],
      parentProduct: 'truck-cranes'
    }
  ],
  // Add other categories with their sub-products
  'pick-n-carry-cranes': [
    {
      id: 'pnc-150',
      name: 'PNC 150',
      description: 'Compact pick and carry crane for versatile operations',
      image: `${basePath}/pnc-150.jpg`,
      features: ['360° Mobility', 'Quick Setup', 'Easy Operation'],
      brochure: `${basePath}/brochures/pnc-150.pdf`,
      specifications: [
        { name: 'Max Capacity', value: '5 Tons' },
        { name: 'Lifting Height', value: '10 Meters' },
        { name: 'Engine Power', value: '80 HP' }
      ],
      parentProduct: 'pick-n-carry-cranes'
    }
  ],
  'articulating-cranes': [
    {
      id: 'ac-120',
      name: 'AC 120',
      description: 'Compact articulating crane for tight spaces',
      image: `${basePath}/ac-120.jpg`,
      features: ['Knuckle Boom Design', 'Remote Control', 'Precision Movement'],
      brochure: `${basePath}/brochures/ac-120.pdf`,
      specifications: [
        { name: 'Max Capacity', value: '5 Tons' },
        { name: 'Reach', value: '15 Meters' },
        { name: 'Engine Power', value: '90 HP' }
      ],
      parentProduct: 'articulating-cranes'
    }
  ],
  'grove-range': [
    {
      id: 'grove-gmk-3050',
      name: 'GMK 3050',
      description: 'Advanced all-terrain crane from the Grove range',
      image: `${basePath}/gmk-3050.jpg`,
      features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
      brochure: `${basePath}/brochures/gmk-3050.pdf`,
      specifications: [
        { name: 'Max Capacity', value: '30 Tons' },
        { name: 'Boom Length', value: '35 Meters' },
        { name: 'Engine Power', value: '300 HP' }
      ],
      parentProduct: 'grove-range'
    }
  ]
};

// Skeleton Loader Component for Sub-Product
function SubProductSkeleton() {
  return (
    <div className="bg-gradient-to-b from-[#f8f9fa] to-white min-h-screen font-sans">
      {/* Hero Section Skeleton */}
      <div className="relative bg-gray-300 h-72 w-full overflow-hidden animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-400 via-gray-300 to-transparent z-10" />
        <div className="absolute inset-0 z-20 flex items-center pt-6">
          <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 w-full">
            <div className="max-w-2xl">
              <div className="h-4 bg-gray-400 rounded w-1/4 mb-4"></div>
              <div className="h-10 bg-gray-400 rounded w-3/4 mb-4"></div>
              <div className="w-24 h-1.5 bg-gray-400 rounded-full mb-4"></div>
              <div className="h-6 bg-gray-400 rounded w-full mb-2"></div>
              <div className="h-6 bg-gray-400 rounded w-2/3"></div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 py-16 -mt-6 relative z-10">
        <div className="mb-8">
          <div className="h-5 bg-gray-300 rounded w-32"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image Skeleton */}
          <div className="rounded-xl overflow-hidden shadow-lg bg-gray-300 h-96 animate-pulse"></div>

          {/* Product Details Skeleton */}
          <div>
            <div className="mb-8">
              <div className="h-6 bg-gray-300 rounded w-1/3 mb-4"></div>
              <ul className="space-y-3">
                {[1, 2, 3].map((item) => (
                  <li key={item} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-gray-300 rounded-full mr-3"></div>
                    <div className="h-5 bg-gray-300 rounded w-full"></div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <div className="h-6 bg-gray-300 rounded w-1/3 mb-4"></div>
              <div className="bg-gray-100 rounded-lg p-6">
                <ul className="space-y-3">
                  {[1, 2, 3].map((item) => (
                    <li key={item} className="flex justify-between border-b border-gray-200 pb-2">
                      <div className="h-5 bg-gray-300 rounded w-1/3"></div>
                      <div className="h-5 bg-gray-300 rounded w-1/4"></div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="h-10 bg-gray-300 rounded w-40"></div>
              <div className="h-10 bg-gray-300 rounded w-32"></div>
            </div>
          </div>
        </div>

        {/* Contact CTA Skeleton */}
        <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <div className="max-w-2xl mx-auto text-center">
            <div className="h-7 bg-gray-300 rounded w-3/4 mx-auto mb-3"></div>
            <div className="h-5 bg-gray-300 rounded w-full mb-4"></div>
            <div className="h-5 bg-gray-300 rounded w-2/3 mx-auto mb-6"></div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <div className="h-10 bg-gray-300 rounded w-40"></div>
              <div className="h-10 bg-gray-300 rounded w-32"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function SubProductContent({ params }: { params: { product: string, subproduct: string } }) {
  // Find the sub-product by searching through all categories
  let subProduct = null;
  let parentProduct = null;
  
  for (const category in allSubProducts) {
    const found = allSubProducts[category as keyof typeof allSubProducts].find(
      p => p.id === params.subproduct
    );
    if (found) {
      subProduct = found;
      parentProduct = category;
      break;
    }
  }

  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

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
                PRODUCT DETAILS
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
        <div className="mb-8">
          <Link href={`/category/${parentProduct}`} className="flex items-center text-[#F1B434] hover:underline mb-4">
            <ChevronRight className="w-4 h-4 transform rotate-180 mr-1" />
            Back to {parentProduct?.replace(/-/g, ' ')}
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={subProduct.image}
              alt={subProduct.name}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Key Features</h2>
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

            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Specifications</h2>
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

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setIsBrochureModalOpen(true)}
                className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors shadow-sm flex items-center"
              >
                Download Brochure
              </button>
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="px-6 py-3 bg-[#F1B434] text-white font-medium rounded-lg hover:bg-[#d89c2a] transition-colors shadow-md"
              >
                Request Quote
              </button>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-md p-8 border border-gray-100"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Need more information about {subProduct.name}?
            </h2>
            <p className="text-gray-600 mb-6">
              Our product specialists are ready to help you with specifications, pricing, and any other questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="px-6 py-3 bg-[#F1B434] text-white font-medium rounded-lg hover:bg-[#d89c2a] transition-colors shadow-md"
              >
                Contact Our Experts
              </button>
              <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                Call Us Now
              </button>
            </div>
          </div>
        </motion.div>
        <BrochureDownloadModal
          isOpen={isBrochureModalOpen}
          onClose={() => setIsBrochureModalOpen(false)}
        />
        <GetQuoteModal
          isOpen={isQuoteModalOpen}
          onClose={() => setIsQuoteModalOpen(false)}
        />
      </main>
    </div>
  );
}

export default function SubProductPage({ params }: { params: { product: string, subproduct: string } }) {
  return (
    <Suspense fallback={<SubProductSkeleton />}>
      <SubProductContent params={params} />
    </Suspense>
  );
}