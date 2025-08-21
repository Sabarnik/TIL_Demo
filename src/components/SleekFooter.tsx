'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import {
  Phone,
  Mail,
  MapPin,
  Download,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  ArrowRight
} from 'lucide-react';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const SleekFooter: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handleEmergencyClick = () => {
    window.location.href = 'tel:+18004328911';
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/18004328911', '_blank');
  };

  const footerLinks: Record<string, string[]> = {
    Products: [
      'TIL Range',
      'Manitowoc Range',
      'Hyster TIL Range',
      'Snorkel Range',
    ],
    Services: [
      'Equipment Rental',
      'Maintenance & Repair',
      'Parts & Accessories',
      'Training Programs',
      'Technical Support',
      'Warranty Services'
    ],
    Company: [
      'About Us',
      'Our History',
      'Leadership Team',
      'Careers',
      'News & Events',
      'Investor Relations'
    ],
    Support: [
      'Contact Us',
      'Find a Dealer',
      'Service Locator',
      'Documentation',
      'FAQs',
      'Customer Portal'
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-[#0f1419] text-white relative">
      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
        <motion.button
          onClick={handleWhatsAppClick}
          className="flex items-center justify-center rounded-full p-4 shadow-lg bg-[#25D366] hover:bg-[#128C7E] transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="WhatsApp chat"
        >
          <FaWhatsapp size={24} className="text-white" />
        </motion.button>

        <motion.button
          onClick={handleEmergencyClick}
          className="flex items-center justify-center rounded-full p-4 shadow-lg bg-gradient-to-r from-[#F1B434] to-[#FFE352] hover:to-[#FFE352]/90"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Emergency support"
        >
          <Phone size={20} className="text-white" />
        </motion.button>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Column 1 */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <a href="/" className="mb-6 inline-block">
                <img
                  src={`${basePath}/logo1.png`}
                  alt="TIL India"
                  className="h-15 w-auto brightness-0 invert"
                />
              </a>

              <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                Leading the future of heavy machinery with innovative solutions that power the world&apos;s most ambitious projects.
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-medium mb-3 text-slate-400 uppercase tracking-wider">
                  Stay Updated
                </h4>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-[#1a2233] border border-[#F1B434]/20 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#F1B434] focus:border-[#F1B434]"
                  />
                  <motion.button
                    className="bg-gradient-to-br from-[#F1B434] to-[#FFE352] p-2 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowRight size={16} className="text-white" />
                  </motion.button>
                </div>
              </div>

              <div className="flex space-x-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    className="w-9 h-9 bg-[#1a2233] hover:bg-gradient-to-br hover:from-[#F1B434] hover:to-[#FFE352] rounded-lg flex items-center justify-center transition-all border border-[#F1B434]/20"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={label}
                  >
                    <Icon size={16} className="text-slate-300 hover:text-white" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Column 2–3 */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-sm font-medium mb-4 text-[#F1B434] uppercase tracking-wider">
                  {category}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link, i) => (
                    <motion.li
                      key={link}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                      viewport={{ once: true, margin: '-20px' }}
                    >
                      <a
                        href="#"
                        className="text-slate-300 hover:text-white text-sm transition-colors hover:underline underline-offset-4 decoration-[#F1B434]"
                      >
                        {link}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Column 4 */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="w-full bg-[#1a2233] border border-[#F1B434]/20 rounded-xl p-4 mb-6 group"
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-[#1a2233] group-hover:bg-[#F1B434] p-2 rounded-lg">
                    <Download size={16} className="text-[#F1B434] group-hover:text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-medium">Product Catalog</div>
                    <div className="text-xs text-slate-400">Download PDF (12MB)</div>
                  </div>
                </div>
              </motion.button>

              <div className="space-y-2.5 text-sm">
                <h4 className="text-[#F1B434] mb-3 font-medium uppercase tracking-wider">Quick Contact</h4>
                <div className="flex items-center space-x-3">
                  <Mail size={14} className="text-[#F1B434]" />
                  <a href="mailto:mktg-til@tilindia.com" className="text-slate-300 hover:text-white">
                    mktg-til@tilindia.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={14} className="text-[#F1B434]" />
                  <a href="tel:+9103366332000" className="text-slate-300 hover:text-white">
                    +91 033 6633 2000
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin size={14} className="text-[#F1B434] mt-0.5" />
                  <span className="text-slate-300 hover:text-white">
                    Taratolla Road, Garden Reach<br />
                    Kolkata 700 024, West Bengal
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-[#F1B434]/20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-xs text-slate-400">
              © 2025 Tractors India Limited. All rights reserved.
            </div>
            <div className="flex space-x-6 text-xs text-slate-400">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((text) => (
                <motion.a
                  key={text}
                  href="#"
                  className="hover:text-white hover:underline underline-offset-4 decoration-[#F1B434]"
                  whileHover={{ y: -1 }}
                >
                  {text}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SleekFooter;
