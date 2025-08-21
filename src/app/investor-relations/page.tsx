'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Building2,
  User
} from 'lucide-react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Page = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const sidebarData = [
    {
      id: 'governance',
      title: 'Corporate Governance',
      subItems: ['Board of Directors', 'Committees', 'Policies', 'Code of Conduct'],
      content:
        'Our corporate governance framework ensures transparency, accountability and ethical business conduct.'
    },
    {
      id: 'shareholders',
      title: 'Shareholders Information',
      subItems: ['Shareholding Pattern', 'Dividend History', 'AGM/EGM Notices', 'Voting Results'],
      content:
        'Information for our valued shareholders including dividend history and voting results.'
    },
    {
      id: 'financials',
      title: 'Financials',
      subItems: ['Annual Reports', 'Quarterly Results', 'Investor Presentations', 'Balance Sheets'],
      content:
        'Access our complete financial records including annual reports and quarterly results.'
    },
    {
      id: 'notice',
      title: 'Notice',
      subItems: ['Board Meetings', 'Disclosures', 'Regulatory Filings', 'Press Releases'],
      content:
        'Important notices and regulatory filings as required by SEBI and other authorities.'
    }
  ];

  const handleMenuToggle = (id: string) => {
    setActiveMenu(prev => (prev === id ? null : id));
  };

  return (
    <>
      {/* Updated Hero Section matching Blog page */}
      <div className="relative h-72 w-full overflow-hidden">
        <img
          src={`${basePath}/investor-relation-bg.jpg`}
          alt="Investor Relations"
          className="w-full h-full object-cover"
        />

        {/* Darker Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />

        {/* Content Container */}
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
                INVESTOR RELATIONS
              </motion.span>
              
              <motion.h1
                className="text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-white mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                TIL <span className="text-[#F1B434]">Investors</span>
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
                Connecting with our investors and providing transparent financial information.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="pb-16 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 space-y-12">
          {/* Mega-Menu Header + Dropdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
          >
            <div className="flex flex-col md:flex-row items-center justify-between bg-[#F1B434] p-6 relative">
              <h2 className="text-2xl font-bold text-white mb-4 md:mb-0">
                Investor Relations
              </h2>

              {/* Mega-menu buttons */}
              <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                {sidebarData.map(item => (
                  <div key={item.id} className="relative">
                    <button
                      onClick={() => handleMenuToggle(item.id)}
                      className={`flex items-center text-white font-medium hover:underline focus:outline-none ${
                        activeMenu === item.id ? 'underline' : ''
                      }`}
                    >
                      {item.title}
                      <ChevronDown
                        size={16}
                        className={`ml-1 transition-transform ${
                          activeMenu === item.id ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </nav>
            </div>

            {/* Mega-menu panels */}
            <div className="relative">
              <AnimatePresence>
                {sidebarData.map(item => (
                  activeMenu === item.id && (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="bg-white border-t border-gray-100 shadow-md overflow-hidden"
                    >
                      <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 py-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-gray-700 mb-4">{item.content}</p>
                        </div>
                        <ul className="grid grid-cols-2 gap-4">
                          {item.subItems.map(sub => (
                            <li key={sub}>
                              <a
                                href={`/investors/${item.id}/${sub
                                  .toLowerCase()
                                  .replace(/\s+/g, '-')}`}
                                className="flex items-center text-gray-600 hover:text-[#F1B434] transition-colors"
                              >
                                <ArrowRight size={14} className="text-[#F1B434] mr-2" />
                                {sub}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Rest of Content Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* Share Queries */}
            <motion.div
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#F1B434]/50 transition-colors"
              whileHover={{ y: -2 }}
            >
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                For share-related queries, assistance, or information
              </h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="p-2.5 mr-4 bg-[#F1B434]/10 rounded-lg">
                    <Building2 size={20} className="text-[#F1B434]" />
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800">TIL Limited</h5>
                    <p className="text-sm text-gray-600 mt-1">
                      Secretarial Department<br />
                      1, Taratolla Road, Garden Reach, Kolkata-700 024
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="p-2 mr-3 bg-[#F1B434]/10 rounded-md">
                    <Phone size={16} className="text-[#F1B434]" />
                  </div>
                  <a href="tel:03366332000" className="text-gray-600 hover:text-[#F1B434] font-medium">
                    033 66332000
                  </a>
                </div>
                <div className="flex items-center">
                  <div className="p-2 mr-3 bg-[#F1B434]/10 rounded-md">
                    <Mail size={16} className="text-[#F1B434]" />
                  </div>
                  <a
                    href="mailto:secretarial.department@tilindia.com"
                    className="text-gray-600 hover:text-[#F1B434] break-all font-medium"
                  >
                    secretarial.department@tilindia.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* IR Team */}
            <motion.div
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#F1B434]/50 transition-colors"
              whileHover={{ y: -2 }}
            >
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Investor Relations Team</h4>
              <div className="flex items-start">
                <div className="p-2.5 mr-4 bg-[#F1B434]/10 rounded-lg">
                  <User size={20} className="text-[#F1B434]" />
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">Mr. Amit Sharma</h5>
                  <p className="text-sm text-gray-600">Head of Investor Relations</p>
                  <div className="mt-3 space-y-3">
                    <div className="flex items-center">
                      <Mail size={14} className="text-[#F1B434] mr-3" />
                      <a
                        href="mailto:investors@tilindia.com"
                        className="text-sm text-gray-600 hover:text-[#F1B434] font-medium"
                      >
                        investors@tilindia.com
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Phone size={14} className="text-[#F1B434] mr-3" />
                      <a
                        href="tel:+913324681357"
                        className="text-sm text-gray-600 hover:text-[#F1B434] font-medium"
                      >
                        +91 33 2468 1357
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Registered Office */}
            <motion.div
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#F1B434]/50 transition-colors"
              whileHover={{ y: -2 }}
            >
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Registered Office</h4>
              <div className="flex items-start">
                <div className="p-2.5 mr-4 bg-[#F1B434]/10 rounded-lg">
                  <MapPin size={20} className="text-[#F1B434]" />
                </div>
                <p className="text-gray-600">
                  1, Taratolla Road,<br />
                  Garden Reach, Kolkata - 700 024<br />
                  West Bengal, India
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Enquiry Button */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-right"
          >
            <motion.button
              className="inline-flex items-center px-6 py-3 bg-[#F1B434] text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all hover:bg-[#E8AC30]"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              SEND AN ENQUIRY
              <ArrowRight size={18} className="ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Page;